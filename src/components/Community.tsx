"use client";

import { motion } from "framer-motion";

export default function Community() {
    return (
        <section id="community" className="section-block">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <p className="section-label">Community</p>
                </div>

                <motion.div
                    className="bg-[#f5f1df] dark:bg-[#1d1d1a] p-8 md:p-10 rounded-lg border border-(--border-color) flex flex-col gap-6"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col gap-3 max-w-2xl">
                        <h2 className="text-[2rem] md:text-[2.1rem] font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                            Build with people who ship.
                        </h2>
                        <p className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
                            A community for builders focused on AI-first engineering: real feedback, practical discussions, and work you can put to use.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <button className="btn-primary">
                            <i className="bx bxl-discord-alt text-sm"></i>
                            Join the Community
                        </button>
                        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-(--border-color) bg-(--bg-color) text-(--text-color) text-[11px] font-semibold tracking-wide hover:bg-(--selection-bg) transition-colors dark:bg-white dark:text-black dark:border-white/30 dark:hover:bg-white/90">
                            Get Updates
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
