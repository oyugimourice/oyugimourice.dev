"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

export default function Speaking() {
    const topics = [
        {
            title: "AI-first systems",
            desc: "How to design agent workflows, evaluation loops, and toolchains that stay maintainable."
        },
        {
            title: "Decision-making under constraints",
            desc: "What to decide early, what to postpone, and how to avoid expensive architectural detours."
        },
        {
            title: "From prototype to production",
            desc: "A practical path from demos to real software: scope, testing, and operational thinking."
        },
        {
            title: "Hiring for signal",
            desc: "Structure interviews and reviews so you hire for judgment—then help teams deliver."
        },
        {
            title: "Reliability for AI features",
            desc: "Evaluation, monitoring, and feedback loops that keep AI behavior predictable."
        },
        {
            title: "Something else?",
            desc: "Tell me your audience and goals. I’ll tailor a talk around your context.",
            link: "Start a conversation →"
        }
    ];

    const formats = [
        { type: "Keynote", desc: "A focused talk, 20-45 minutes. One idea, explored deeply." },
        { type: "Panel", desc: "Happy to join conversations on building, AI, leadership, or founder life." },
        { type: "Podcast", desc: "New long-form. Let's go deep." },
        { type: "Workshop", desc: "Interactive. For teams who want to work through something together." },
        { type: "Fireside Chat", desc: "Informal, conversational. Audience questions welcome." },
        { type: "Offsite or Retreat", desc: "Intimate settings where real conversations happen." }
    ];

    return (
        <div className="content-area">
            <section className="py-8">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6 max-w-3xl">
                        <p className="section-label">Speaking</p>
                        <h1 className="text-[2.35rem] md:text-[2.7rem] font-medium tracking-tight leading-[1.1]">
                            Talks built for action.
                        </h1>
                        <p className="text-[15px] text-(--text-muted) leading-relaxed max-w-2xl">
                            Practical insights on AI-first engineering, product decisions, and shipping systems that people can trust.
                        </p>
                        <button className="btn-primary w-max mt-1">
                            <i className="bx bx-calendar text-sm"></i>
                            Let&apos;s Talk
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 section-block mt-2">
                        <div className="flex flex-col gap-4">
                            <p className="section-label">The Story</p>
                            <h2 className="text-[2rem] font-medium tracking-tight">Why I speak.</h2>
                        </div>
                        <div className="flex flex-col gap-6 text-(--text-muted) leading-relaxed">
                            <p>I’ve seen teams move fast in the wrong direction—and recover with better decisions.</p>
                            <p>I speak about engineering clarity: choosing the right architecture, setting up evaluation, and building systems that stay reliable.</p>
                            <p>If your audience wants usable frameworks—not vague motivation—we’ll get along.</p>
                        </div>
                    </div>

                    <div className="section-block flex flex-col gap-8">
                        <div>
                            <p className="section-label">Talk Topics</p>
                            <h2 className="text-[2rem] font-medium tracking-tight mt-2">Core themes.</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 border border-(--border-color) rounded-xl overflow-hidden">
                            {topics.map((t, i) => (
                                <div key={i} className="p-8 border-[0.5px] border-(--border-color) flex flex-col gap-3 hover:bg-(--selection-bg) transition-colors">
                                    <h3 className="font-bold text-base">{t.title}</h3>
                                    <p className="text-sm text-(--text-muted) leading-relaxed">{t.desc}</p>
                                    {t.link && <Link href="#" className="text-xs font-bold border-b border-black w-max pb-0.5 mt-2">{t.link}</Link>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="section-block flex flex-col gap-8">
                        <div>
                            <p className="section-label">Formats</p>
                            <h2 className="text-[2rem] font-medium tracking-tight mt-2">Ways we can work together.</h2>
                        </div>
                        <div className="flex flex-col gap-0 border-t border-(--border-color)">
                            {formats.map((f, i) => (
                                <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] py-6 border-b border-(--border-color) group hover:bg-(--selection-bg) px-4 transition-colors">
                                    <span className="font-bold text-sm">{f.type}</span>
                                    <span className="text-sm text-(--text-muted) leading-relaxed">{f.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="section-block flex flex-col gap-8">
                        <div>
                            <p className="section-label">The Practical Stuff</p>
                            <h2 className="text-[2rem] font-medium tracking-tight mt-2">A few details.</h2>
                        </div>
                        <div className="flex flex-col gap-0 border-t border-(--border-color)">
                            {[
                                { label: "Based in", value: "Available worldwide." },
                                { label: "Virtual", value: "Yes—webinars, podcasts, remote sessions." },
                                { label: "Fees", value: "Depends on scope. Let&apos;s discuss." },
                                { label: "Lead Time", value: "Two to six weeks when possible." }
                            ].map((detail, i) => (
                                <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] py-6 border-b border-(--border-color) group hover:bg-(--selection-bg) px-4 transition-colors">
                                    <span className="font-bold text-sm tracking-tight">{detail.label}</span>
                                    <span className="text-sm text-(--text-muted) leading-relaxed">{detail.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="section-block flex flex-col gap-5">
                        <p className="section-label">Let&apos;s Talk</p>
                        <h2 className="text-[2.15rem] md:text-[2.4rem] font-medium tracking-tight">Let&apos;s plan your session.</h2>
                        <p className="text-[15px] text-(--text-muted) max-w-2xl">Share your audience, format, and goals. I&apos;ll respond with a tailored outline and next steps.</p>
                        <div className="flex items-center gap-6 mt-4">
                            <button className="btn-primary">
                                <i className="bx bx-calendar text-sm"></i>
                                Request availability
                            </button>
                            <Link href="#" className="text-sm font-bold border-b border-(--text-color) pb-1 hover:border-transparent transition-all">
                                Prefer email? I&apos;ll reply with next steps.
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
