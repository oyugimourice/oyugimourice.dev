"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

export default function Newsletter() {
    const pillars = [
        {
            title: "Intention",
            desc: "Focusing on the 'why' and finding clarity before you write a single line of code."
        },
        {
            title: "Insight",
            desc: "Lessons from the front lines of building products, leading teams, and scaling ideas."
        },
        {
            title: "Action",
            desc: "Practical, immediate takeaways that you can apply to your work today."
        }
    ];

    const issues = [
        { date: "2026-03-08", title: "#11 Build With Intention | To the Women Building in Silence" },
        { date: "2026-03-01", title: "#10 Build With Intention | The Deadline That Broke My Excuses" },
        { date: "2026-02-22", title: "#9 Build With Intention | Pivoting Isn't Failure. Staying Stuck Is." }
    ];

    return (
        <div className="content-area">
            <section className="py-8">
                <div className="flex flex-col gap-14">
                    {/* Hero Section */}
                    <div className="flex flex-col gap-6 max-w-3xl">
                        <p className="section-label">Newsletter</p>
                        <h1 className="text-[2.35rem] md:text-[2.7rem] font-medium tracking-tight leading-[1.1]">
                            Build With Intention
                        </h1>
                        <p className="text-[15px] text-(--text-muted) leading-relaxed max-w-2xl">
                            Every Sunday, I share one idea to help you build smarter ~ as a founder, leader, or engineer.
                        </p>

                        <form className="flex flex-col gap-5 mt-2 p-6 bg-(--second-bg-color) rounded-lg border border-(--border-color)">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-semibold uppercase tracking-widest text-(--text-muted) ml-1">Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Your name" 
                                        className="px-4 py-2.5 rounded-md bg-(--bg-color) border border-(--border-color) text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-semibold uppercase tracking-widest text-(--text-muted) ml-1">Email</label>
                                    <input 
                                        type="email" 
                                        placeholder="you@example.com" 
                                        className="px-4 py-2.5 rounded-md bg-(--bg-color) border border-(--border-color) text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all"
                                    />
                                </div>
                            </div>
                            <button className="btn-primary w-max">
                                <i className="bx bx-envelope text-sm"></i>
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Pillars Section */}
                    <div className="section-block flex flex-col gap-8">
                        <div>
                            <p className="section-label">What To Expect</p>
                            <h2 className="text-[2rem] font-medium tracking-tight mt-2">Three pillars, one idea each week</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {pillars.map((p, i) => (
                                <div key={i} className="flex flex-col gap-4">
                                    <h3 className="text-lg font-bold">{p.title}</h3>
                                    <p className="text-sm text-(--text-muted) leading-relaxed">
                                        {p.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Archive Section */}
                    <div className="section-block flex flex-col gap-8">
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="section-label">Previous Editions</p>
                                <h2 className="text-[2rem] font-medium tracking-tight mt-2">See what&apos;s inside</h2>
                            </div>
                            <Link href="#" className="text-xs font-bold text-(--text-muted) hover:text-(--text-color) transition-colors">
                                Browse all →
                            </Link>
                        </div>
                        <div className="flex flex-col gap-0 border-t border-(--border-color)">
                            {issues.map((issue, i) => (
                                <Link 
                                    key={i} 
                                    href="#" 
                                    className="grid grid-cols-1 md:grid-cols-[120px_1fr_40px] py-8 border-b border-(--border-color) group items-center transition-all hover:bg-(--selection-bg) px-4"
                                >
                                    <span className="text-sm font-mono text-(--text-muted)">{issue.date}</span>
                                    <span className="text-base font-medium tracking-tight group-hover:translate-x-1 transition-transform">{issue.title}</span>
                                    <i className="bx bx-right-arrow-alt text-xl text-(--text-muted) opacity-0 group-hover:opacity-100 transition-all ml-auto"></i>
                                </Link>
                            ))}
                        </div>
                        <Link href="#" className="text-xs font-bold text-(--text-muted) hover:text-(--text-color) flex items-center gap-2">
                            View all {issues.length * 3}+ editions <i className="bx bx-right-arrow-alt"></i>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
