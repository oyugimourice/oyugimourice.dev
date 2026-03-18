"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Writing() {
    const essays = [
        {
            date: "2026-03-10",
            title: "MCP Solved Tools. A2A Solved Messaging. What Solves Memory?",
            desc: "The agentic stack is taking shape — but memory remains the missing primitive. This essay explores what comes next.",
            link: "#"
        },
        {
            date: "2026-02-28",
            title: "Building with Intention in an AI-First World",
            desc: "How we shift from 'writing code' to 'architecting systems' when the cost of production drops to zero.",
            link: "#"
        },
        {
            date: "2026-02-15",
            title: "The Case for Minimalist Engineering",
            desc: "Why the best code is the code you never wrote, and why simplicity is the ultimate sophistication in software design.",
            link: "#"
        }
    ];

    return (
        <div className="content-area">
            <section className="py-8">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <p className="section-label">Writing</p>
                        <h1 className="text-[2.3rem] md:text-[2.6rem] font-medium tracking-tight text-[var(--text-color)]">Essays</h1>
                        <p className="text-[15px] text-[var(--text-muted)] leading-relaxed max-w-2xl mt-3">
                            Long-form thinking on AI, building, and what it means to create with intention.
                        </p>
                    </div>

                    <div className="flex flex-col gap-12 mt-6">
                        {essays.map((essay, index) => (
                            <motion.div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-3 md:gap-10 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="text-sm font-mono text-[var(--text-muted)] pt-1">
                                    {essay.date}
                                </span>
                                <div className="flex flex-col gap-3">
                                    <Link href={essay.link} className="group-hover:text-[var(--text-muted)] transition-colors">
                                        <h2 className="text-[1.65rem] font-medium tracking-tight leading-snug text-[var(--text-color)] group-hover:text-inherit">
                                            {essay.title}
                                        </h2>
                                    </Link>
                                    <p className="text-[13px] text-[var(--text-muted)] leading-relaxed max-w-2xl">
                                        {essay.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
