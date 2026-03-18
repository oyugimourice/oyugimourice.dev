"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Lab() {
    const experiments = [
        {
            title: "Akashik Protocol™",
            tag: "Spec live · Level 0 SDK in progress",
            subtitle: "Shared memory for AI agents.",
            desc: "An open specification for multi-agent coordination. The missing layer that lets AI agents remember, collaborate, and build on each other's work. Spec-first. Community-driven. Built in public.",
            links: [
                { label: "Read more", href: "#" },
                { label: "GitHub", href: "#" }
            ],
            icon: "bx bx-brain"
        }
    ];

    const campaigns = [
        {
            title: "King Kohli Petition",
            tag: "Live",
            desc: "A tribute and petition site for the greatest of our generation. Built for the community.",
            link: "#"
        },
        {
            title: "Purpose of Life",
            tag: "Coming soon",
            desc: "A street interview campaign exploring what makes us tick, from the ground up.",
            link: "#"
        }
    ];

    return (
        <div className="content-area">
            <section className="py-8">
                <div className="flex flex-col gap-12">
                    {/* Header */}
                    <div className="flex flex-col gap-6 max-w-3xl">
                        <p className="section-label">Lab</p>
                        <h1 className="text-[2.35rem] md:text-[2.7rem] font-medium tracking-tight leading-[1.1]">
                            Where Ideas go <br /> to breathe.
                        </h1>
                        <p className="text-[15px] text-[var(--text-muted)] leading-relaxed max-w-2xl mt-1">
                            Not everything needs to be a business. Some things are experiments. Some are contributions. Some are just fun. This is where I tinker, explore, and build in the open.
                        </p>
                    </div>

                    {/* Open Source */}
                    <div className="section-block flex flex-col gap-8">
                        <div>
                            <p className="section-label">Open Source</p>
                        </div>
                        <div className="flex flex-col gap-6">
                            {experiments.map((lab, i) => (
                                <motion.div
                                    key={i}
                                    className="p-7 bg-[var(--second-bg-color)] border border-[var(--border-color)] rounded-lg flex flex-col gap-6 transition-colors hover:bg-[var(--selection-bg)]/35"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="text-4xl text-[var(--text-color)] pt-1">
                                            <i className={lab.icon}></i>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-wrap items-center gap-4">
                                                <h2 className="text-[1.6rem] font-medium tracking-tight">{lab.title}</h2>
                                                <span className="px-3 py-1 border border-[var(--border-color)] text-[10px] font-mono rounded-md uppercase text-[var(--text-muted)]">
                                                    {lab.tag}
                                                </span>
                                            </div>
                                            <p className="font-mono text-sm text-[var(--text-muted)] italic">
                                                {lab.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-[13px] text-[var(--text-muted)] leading-relaxed max-w-3xl ml-0 md:ml-16">
                                        {lab.desc}
                                    </p>
                                    <div className="flex items-center gap-6 ml-0 md:ml-16">
                                        {lab.links.map((link, li) => (
                                            <Link key={li} href={link.href} className="text-xs font-bold border-b border-black pb-0.5 hover:border-transparent transition-all">
                                                {link.label} ↗
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Campaigns */}
                    <div className="section-block flex flex-col gap-8">
                        <div>
                            <p className="section-label">Campaigns</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {campaigns.map((c, i) => (
                                <div key={i} className="p-6 border border-[var(--border-color)] rounded-lg flex flex-col gap-4 hover:bg-[var(--selection-bg)] transition-colors group bg-[var(--second-bg-color)]">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-bold tracking-tight">{c.title}</h3>
                                        <span className={`text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest ${c.tag === 'Live' ? 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400' : 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800'}`}>
                                            {c.tag}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1">
                                        {c.desc}
                                    </p>
                                    <Link href={c.link} className="text-xs font-bold w-max border-b border-black pb-0.5 hover:border-transparent transition-all">
                                        Visit ↗
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Philosophy */}
                    <div className="section-block flex flex-col gap-5">
                        <div>
                            <p className="section-label">The Philosophy</p>
                            <h2 className="text-[2rem] font-medium tracking-tight mt-2">Why I keep a lab.</h2>
                        </div>
                        <div className="flex flex-col gap-6 text-[var(--text-muted)] leading-relaxed max-w-2xl">
                            <p>I believe the best work happens when you're not trying to optimize for a bottom line. Curiosity needs a sandbox where the primary goal is just to see what happens.</p>
                            <p>The lab is my sandbox. It's where I stay sharp, where I fail without consequence, and where I contribute back to the tools and protocols that make my other work possible.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
