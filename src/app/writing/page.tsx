import Link from "next/link";
import Footer from "@/components/Footer";
import { getAllEssays } from "@/lib/essays";

export default async function Writing() {
    const essays = await getAllEssays();

    return (
        <div className="content-area">
            <section className="py-8">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <p className="section-label">Writing</p>
                        <h1 className="text-[2.3rem] md:text-[2.6rem] font-medium tracking-tight text-(--text-color)">Essays</h1>
                        <p className="text-[15px] text-(--text-muted) leading-relaxed max-w-2xl mt-3">
                            Long-form essays on AI-first engineering: architecture, trade-offs, and what to do next.
                        </p>
                    </div>

                    <div className="flex flex-col gap-12 mt-6">
                        {essays.map((essay) => (
                            <div
                                key={essay.slug}
                                className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-3 md:gap-10 group"
                            >
                                <span className="text-sm font-mono text-(--text-muted) pt-1">
                                    {essay.date}
                                </span>
                                <div className="flex flex-col gap-3">
                                    <Link href={`/writing/${essay.slug}`} className="group-hover:text-(--text-muted) transition-colors">
                                        <h2 className="text-[1.65rem] font-medium tracking-tight leading-snug text-(--text-color) group-hover:text-inherit">
                                            {essay.title}
                                        </h2>
                                    </Link>
                                    <p className="text-[13px] text-(--text-muted) leading-relaxed max-w-2xl">
                                        {essay.excerpt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
