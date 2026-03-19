"use client";

import { motion } from "framer-motion";

export default function About() {
    const services = [
        {
            tag: "For: Founders & Startups",
            title: "I've made the mistakes so you don't have to.",
            desc: "From strategy to shipped product — I help you make the right decisions, build the right thing, and avoid the mistakes that kill startups.",
            button: "Book a Call",
            bg: "bg-[#e9f1ed] dark:bg-[#1a2521]"
        },
        {
            tag: "For: Events & Conferences",
            title: "I share what I've learned — on stages that matter.",
            desc: "I speak on AI-first development, building with intention, and the future of how we build software. Keynotes, panels, podcasts — let's talk.",
            button: "Invite Me",
            bg: "bg-[#f4f0e7] dark:bg-[#2a261f]"
        },
        {
            tag: "For: Developers & Aspiring Founders",
            title: "Launch your career with purpose.",
            desc: "From code to career, I help you build skills that compound. Technical growth with intention, not just tutorials.",
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
