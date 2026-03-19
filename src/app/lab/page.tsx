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
                    <div className="flex flex-col gap-5 max-w-190">
                        <p className="section-label">Lab</p>
                        <h1 className="text-[2.35rem] md:text-[2.7rem] font-medium tracking-tight leading-[1.1]">
                            Where Ideas go to breathe.
                        </h1>
                        <p className="text-[15px] md:text-[16px] text-(--text-muted) leading-relaxed max-w-2xl mt-1">
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
                                    className="p-6 md:p-7 bg-[#eeede8] border border-[#d8d6cf] rounded-lg flex flex-col gap-5 transition-colors hover:bg-[#e8e6df] text-neutral-900"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-start gap-4 md:gap-5">
                                        <div className="text-2xl text-neutral-800 pt-1">
                                            <i className={lab.icon}></i>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-wrap items-center gap-2.5">
                                                <h2 className="text-[2.05rem] font-medium tracking-tight leading-none text-neutral-900">{lab.title}</h2>
                                                <span className="px-2 py-0.5 border border-[#c9c7bf] text-[9px] font-mono rounded uppercase text-neutral-600">
                                                    {lab.tag}
                                                </span>
                                            </div>
                                            <p className="font-mono text-[11px] text-neutral-500 uppercase tracking-wide">
                                                {lab.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-[13px] text-neutral-600 leading-relaxed max-w-3xl ml-0 md:ml-12">
                                        {lab.desc}
                                    </p>
                                    <div className="flex items-center gap-4 ml-0 md:ml-12">
                                        {lab.links.map((link, li) => (
                                            <Link key={li} href={link.href} className="text-[11px] font-semibold border-b border-neutral-500 pb-0.5 hover:border-transparent transition-all text-neutral-700">
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
                                <div key={i} className="p-5 border border-[#d8d6cf] rounded-lg flex flex-col gap-3 hover:bg-[#e8e6df] transition-colors group bg-[#eeede8] text-neutral-900">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-[1.2rem] font-medium tracking-tight">{c.title}</h3>
                                        <span className={`text-[9px] px-2 py-0.5 rounded font-semibold uppercase tracking-wide ${c.tag === 'Live' ? 'bg-green-100 text-green-700' : 'bg-neutral-100 text-neutral-500'}`}>
                                            {c.tag}
                                        </span>
                                    </div>
                                    <p className="text-[13px] text-neutral-600 leading-relaxed flex-1">
                                        {c.desc}
                                    </p>
                                    <Link href={c.link} className="text-[11px] font-semibold w-max border-b border-neutral-500 pb-0.5 hover:border-transparent transition-all text-neutral-700">
                                        Visit ↗
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Philosophy */}
                    <div className="section-block grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12">
                        <div className="flex flex-col gap-2">
                            <p className="section-label">The Philosophy</p>
                            <h2 className="text-[2.2rem] font-medium tracking-tight mt-2">Why I keep a lab.</h2>
                        </div>
                        <div className="flex flex-col gap-4 text-(--text-muted) leading-relaxed max-w-2xl text-[15px]">
                            <p>I believe the best work happens when you&apos;re not trying to optimize for a bottom line. Curiosity needs a sandbox where the primary goal is just to see what happens.</p>
                            <p>The lab is my sandbox. It&apos;s where I stay sharp, where I fail without consequence, and where I contribute back to the tools and protocols that make my other work possible.</p>
                        </div>
                    </div>

                    {/* Follow Along */}
                    <div className="section-block flex flex-col gap-4">
                        <h2 className="text-[2.4rem] font-medium tracking-tight">Want to follow along?</h2>
                        <p className="text-[14px] text-(--text-muted) max-w-2xl leading-relaxed">
                            The newsletter is where I share what&apos;s happening in the lab — experiments, lessons, and the occasional beautiful failure.
                        </p>
                        <Link href="/newsletter" className="btn-secondary w-max mt-1">
                            <i className="bx bx-envelope text-sm"></i>
                            Join the Newsletter
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
