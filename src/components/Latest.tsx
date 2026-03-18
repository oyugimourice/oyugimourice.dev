"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Latest() {
    return (
        <section id="latest" className="section-block">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <p className="section-label">Latest</p>
                    <h2 className="text-[2rem] font-medium tracking-tight text-[var(--text-color)]">Fresh from the desk</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group"
                >
                    <Link href="/writing" className="block p-7 bg-[var(--second-bg-color)] rounded-lg border border-[var(--border-color)] relative transition-colors hover:bg-[var(--selection-bg)]/35">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                                    <i className="bx bx-edit-alt"></i>
                                    Essay
                                </span>
                                <span className="text-[var(--border-color)]">•</span>
                                <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">Coming Soon</span>
                            </div>
                            
                            <h3 className="text-[1.85rem] md:text-[2rem] font-medium tracking-tight leading-tight">
                                MCP Solved Tools. A2A Solved Messaging. What Solves Memory?
                            </h3>
                            
                            <p className="text-[13px] text-[var(--text-muted)] leading-relaxed max-w-2xl">
                                The agentic stack is taking shape — but memory remains the missing primitive. This essay explores what comes next.
                            </p>
                        </div>
                        
                        <div className="absolute top-7 right-7 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
                            <i className="bx bx-right-arrow-alt text-xl"></i>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
