"use client";

import { motion } from "framer-motion";

export default function About() {
    const services = [
        {
            tag: "For: Founders & Product Teams",
            title: "Make the right calls early.",
            desc: "From architecture to hiring to scope, I help you choose the moves that keep your roadmap realistic—and your software maintainable.",
            button: "Book a Call",
            bg: "bg-[#e9f1ed] dark:bg-[#1a2521]"
        },
        {
            tag: "For: Events & Conferences",
            title: "Talks that translate into action.",
            desc: "AI-first engineering, decision-making, and building systems that stay reliable. Keynotes, panels, and practical workshops—let’s shape a session for your audience.",
            button: "Invite Me",
            bg: "bg-[#f4f0e7] dark:bg-[#2a261f]"
        },
        {
            tag: "For: Developers & Builders",
            title: "Grow your skill with context.",
            desc: "Technical growth that compounds: systems thinking, trade-offs, and shipping habits. Less theory—more clarity you can apply immediately.",
            button: "Apply Now",
            bg: "bg-[#efefef] dark:bg-[#202020]",
            fullWidth: true
        }
    ];

    return (
        <section id="about" className="section-block">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <p className="section-label">Work With Me</p>
                    <h2 className="text-[2rem] font-medium tracking-tight text-(--text-color)">How I can help you</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`${service.bg} p-7 rounded-lg border border-(--border-color) flex flex-col gap-6 justify-between ${service.fullWidth ? "md:col-span-2" : ""}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex flex-col gap-4">
                                <span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400">
                                    {service.tag}
                                </span>
                                <h3 className="text-[1.7rem] font-medium tracking-tight leading-tight max-w-md text-neutral-100">
                                    {service.title}
                                </h3>
                                <p className="text-[13px] text-neutral-300 leading-relaxed max-w-xl">
                                    {service.desc}
                                </p>
                            </div>
                            <button className="w-max px-3 py-1.5 bg-white border border-white/30 rounded-md text-[10px] font-semibold uppercase tracking-widest text-neutral-900 hover:bg-neutral-100 transition-colors">
                                {service.button}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
