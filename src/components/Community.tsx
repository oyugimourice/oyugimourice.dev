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
                    className="bg-[#f5f1df] dark:bg-[#1d1d1a] p-8 md:p-10 rounded-lg border border-[var(--border-color)] flex flex-col gap-6"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col gap-3 max-w-2xl">
                        <h2 className="text-[2rem] md:text-[2.1rem] font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                            You're not building alone.
                        </h2>
                        <p className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
                            A space for developers and founders who want to grow, share, and build with intention. No gatekeeping. Just real conversations.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <button className="btn-primary">
                            <i className="bx bxl-discord-alt text-sm"></i>
                            Join the Circle
                        </button>
                        <button className="btn-secondary">
                            Join our Newsletter
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
