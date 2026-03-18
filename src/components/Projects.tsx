"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            title: "Akashic Protocol",
            description: "A shared memory and coordination protocol for multi-agent AI systems.",
            image: "bg-gradient-to-br from-neutral-800 to-neutral-900 border-neutral-700",
            icon: "bx bx-brain",
            link: "#"
        },
        {
            title: "KINARA OS",
            description: "An AI Operating System for Education.",
            image: "bg-gradient-to-tr from-purple-900 via-indigo-900 to-slate-900 border-indigo-500/20",
            icon: "bx bx-terminal",
            link: "#"
        }
    ];

    return (
        <section id="portfolio" className="section-block">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <p className="section-label">Now</p>
                    <h2 className="text-[2rem] font-medium tracking-tight text-[var(--text-color)]">What I'm building</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group flex flex-col gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={project.link} className={`block aspect-[16/9] rounded-lg overflow-hidden ${project.image} relative border border-[var(--border-color)] transition-transform duration-300 group-hover:scale-[1.005]`}>
                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    <h3 className="text-white text-[1.65rem] font-semibold tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">
                                        {project.title}
                                    </h3>
                                </div>
                            </Link>
                            <div className="flex items-start gap-2 group-hover:text-[var(--text-color)] transition-colors">
                                <p className="text-[12px] text-[var(--text-muted)] leading-relaxed group-hover:text-inherit">
                                    {project.description}
                                </p>
                                <i className="bx bx-right-arrow-alt text-sm mt-0.5 text-[var(--text-muted)] group-hover:text-inherit group-hover:translate-x-1 transition-all"></i>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
