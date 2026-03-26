import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const essaysDirectory = path.join(process.cwd(), "content", "essays");

export type EssayFrontmatter = {
    title: string;
    date: string;
    author: string;
    excerpt: string;
    readTime: string;
};

export type EssayListItem = EssayFrontmatter & {
    slug: string;
};

async function getEssayFilenames() {
    const files = await fs.readdir(essaysDirectory);
    return files.filter((file) => file.endsWith(".mdx"));
}

function sortByDateDesc(items: EssayListItem[]) {
    return items.sort((a, b) => {
        const aTime = new Date(a.date).getTime();
        const bTime = new Date(b.date).getTime();
        return bTime - aTime;
    });
}

function normalizeDate(value: unknown) {
    if (value instanceof Date && !Number.isNaN(value.getTime())) {
        return value.toISOString().slice(0, 10);
    }

    const raw = String(value ?? "").trim();
    if (!raw) return "";

    const datePrefixMatch = raw.match(/^(\d{4}-\d{2}-\d{2})/);
    if (datePrefixMatch) {
        return datePrefixMatch[1];
    }

    const parsed = new Date(raw);
    if (!Number.isNaN(parsed.getTime())) {
        return parsed.toISOString().slice(0, 10);
    }

    return raw;
}

export async function getAllEssays(): Promise<EssayListItem[]> {
    const files = await getEssayFilenames();

    const items = await Promise.all(
        files.map(async (filename) => {
            const slug = filename.replace(/\.mdx$/, "");
            const filePath = path.join(essaysDirectory, filename);
            const source = await fs.readFile(filePath, "utf8");
            const { data } = matter(source);

            return {
                slug,
                title: String(data.title ?? "Untitled Essay"),
                date: normalizeDate(data.date),
                author: String(data.author ?? ""),
                excerpt: String(data.excerpt ?? ""),
                readTime: String(data.readTime ?? ""),
            } satisfies EssayListItem;
        })
    );

    return sortByDateDesc(items);
}

export async function getEssaySlugs() {
    const files = await getEssayFilenames();
    return files.map((file) => file.replace(/\.mdx$/, ""));
}

export async function getEssayBySlug(slug: string) {
    // Hardening: prevent directory traversal / arbitrary file reads.
    // Only allow simple "slug" characters we expect in filenames (letters, numbers, hyphen, underscore).
    const safeSlug = slug.trim();
    if (!/^[a-zA-Z0-9_-]+$/.test(safeSlug)) return null;

    const filePath = path.join(essaysDirectory, `${safeSlug}.mdx`);

    try {
        // Ensure the resolved file path still lives under essaysDirectory.
        const resolvedDir = `${path.resolve(essaysDirectory)}${path.sep}`;
        const resolvedFile = path.resolve(filePath);
        if (!resolvedFile.startsWith(resolvedDir)) return null;

        const source = await fs.readFile(resolvedFile, "utf8");

        const { frontmatter, content } = await compileMDX<EssayFrontmatter>({
            source,
            options: {
                parseFrontmatter: true,
                mdxOptions: {
                    remarkPlugins: [remarkGfm],
                },
            },
        });

        return {
            slug: safeSlug,
            frontmatter: {
                ...frontmatter,
                date: normalizeDate(frontmatter.date),
            },
            content,
        };
    } catch {
        return null;
    }
}
