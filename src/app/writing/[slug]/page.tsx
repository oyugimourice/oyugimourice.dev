import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { getEssayBySlug, getEssaySlugs } from "@/lib/essays";

type EssayPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return getEssaySlugs().then((slugs) => slugs.map((slug) => ({ slug })));
}

export default async function EssayPage({ params }: EssayPageProps) {
    const { slug } = await params;
    const essay = await getEssayBySlug(slug);

    if (!essay) {
        notFound();
    }

    return (
        <div className="content-area">
            <section className="py-8">
                <div className="flex flex-col gap-10 max-w-3xl">
                    <Link
                        href="/writing"
                        className="text-[12px] text-(--text-muted) hover:text-(--text-color) transition-colors w-max"
                    >
                        ← All Essays
                    </Link>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-(--text-muted)">
                                <i className="bx bx-edit-alt"></i>
                                Essay
                            </span>
                            <span className="text-(--border-color)">•</span>
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-(--text-muted)">
                                {essay.frontmatter.date}
                            </span>
                            <span className="text-(--border-color)">•</span>
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-(--text-muted)">
                                {essay.frontmatter.author}
                            </span>
                            <span className="text-(--border-color)">•</span>
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-(--text-muted)">
                                {essay.frontmatter.readTime}
                            </span>
                        </div>

                        <h1 className="text-[2.35rem] md:text-[2.7rem] font-medium tracking-tight leading-[1.1] text-(--text-color)">
                            {essay.frontmatter.title}
                        </h1>
                        <p className="text-[15px] text-(--text-muted) leading-relaxed max-w-2xl">
                            {essay.frontmatter.excerpt}
                        </p>
                    </div>

                    <article className="flex flex-col gap-5 text-[15px] leading-relaxed text-(--text-color)">
                        {essay.content}
                    </article>

                    <div className="p-8 bg-(--selection-bg) rounded-lg border border-(--border-color) flex flex-col items-center text-center gap-3">
                        <h2 className="text-[2rem] font-medium tracking-tight text-(--text-color)">Don&apos;t miss the next one.</h2>
                        <p className="text-[13px] text-(--text-muted)">New essays, ideas, and editions delivered when they&apos;re ready.</p>
                        <Link href="/newsletter" className="btn-secondary mt-2">
                            <i className="bx bx-envelope text-sm"></i>
                            Join the Newsletter
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
