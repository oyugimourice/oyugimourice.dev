"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Ventures() {
    const ventures = [
        {
            name: "KINARA",
            status: "Active",
            tagline: "AI learning systems.",
            desc: "Kiinara is an AI-first learning product built around feedback loops and measurable outcomes.",
            link: "#",
            linkLabel: "Learn more",
            color: "text-black"
        },
        {
            name: "KOSMOS labs",
            status: "Heading to beta",
            tagline: "Publish-ready content pipelines.",
            desc: "KOSMOS helps pharma teams create, review, and deploy content—compliance baked in from day one.",
            link: "#",
            linkLabel: "Learn more",
            color: "text-indigo-600"
        },
        {
            name: "ADIMS",
            status: "Active",
            tagline: "Operations for driving instructors.",
            desc: "Bookings, student management, and accounts in one place—so instructors can run their business without spreadsheets.",
            link: "#",
            linkLabel: "Visit ADIMS",
            color: "text-red-600"
        }
    ];

    return (
        <div className="content-area">
            <section className="py-8">
                <div className="flex flex-col gap-12">
                    {/* Header */}
                    <div className="flex flex-col gap-2">
                        <p className="section-label">Ventures</p>
                        <h1 className="text-[2.3rem] md:text-[2.6rem] font-medium tracking-tight text-(--text-color)">Ventures in motion.</h1>
                        <p className="text-[15px] text-(--text-muted) leading-relaxed max-w-2xl mt-3">
                            Ventures I&apos;m developing right now—each one starts with a real problem and a plan to ship.
                        </p>
                    </div>

                    {/* Ventures List */}
                    <div className="flex flex-col gap-6">
                        {ventures.map((v, i) => (
                            <motion.div
                                key={i}
                                className="p-7 bg-(--second-bg-color) border border-(--border-color) rounded-lg flex flex-col gap-6 transition-colors hover:bg-(--selection-bg)/35"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="flex items-center gap-4">
                                    <h2 className={`text-2xl font-bold tracking-tighter ${v.color}`}>{v.name}</h2>
                                    <span className="px-2.5 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-semibold rounded uppercase tracking-widest">
                                        {v.status}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="font-mono text-[12px] text-(--text-muted) italic">
                                        {v.tagline}
                                    </p>
                                    <p className="text-[13px] text-(--text-muted) leading-relaxed max-w-2xl">
                                        {v.desc}
                                    </p>
                                </div>
                                <Link href={v.link} className="text-xs font-bold border-b border-black w-max pb-0.5 mt-2 hover:border-transparent transition-all">
                                    {v.linkLabel} ↗
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Lab Section */}
                    <div className="section-block flex flex-col gap-5">
                        <div>
                            <p className="section-label">Lab</p>
                            <h2 className="text-[2rem] font-medium tracking-tight mt-2">Experiments & open source.</h2>
                            <p className="text-[14px] text-(--text-muted) leading-relaxed max-w-2xl mt-3">
                                Small bets and real prototypes—tools and open source work I build in public. Some ship, some don&apos;t, but everything teaches.
                            </p>
                        </div>
                        <Link href="/lab" className="btn-secondary w-max">
                            <i className="bx bx-vial text-sm"></i>
                            Visit the Lab
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
