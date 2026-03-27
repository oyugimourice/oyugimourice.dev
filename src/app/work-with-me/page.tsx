"use client";
import Image from "next/image";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function WorkWithMe() {
    const [activeTab, setActiveTab] = useState<"founders" | "mentoring">("founders");

    const founderServices = [
        { title: "Technical Strategy", desc: "Scope, sequencing, and the technical moves that de-risk delivery." },
        { title: "Architecture Decisions", desc: "Architecture choices that survive real constraints and future growth." },
        { title: "Hiring & Team", desc: "Build the right team with clear signals and practical review loops." },
        { title: "Product & Roadmap", desc: "Turn roadmap into shipping: tight scope, fast iterations, and measurable progress." },
        { title: "AI & Automation", desc: "Where AI helps, where it doesn’t, and how to integrate safely." },
        { title: "Investor Readiness", desc: "Technical due diligence prep and a clear story backed by evidence." }
    ];

    const mentoringFocus = [
        { title: "Career Clarity", desc: "A direction you can execute: projects, proof, and a realistic plan." },
        { title: "Technical Breadth", desc: "Systems thinking: architecture, trade-offs, and practical design." },
        { title: "Adding (m)Value", desc: "Build projects that show judgment—not just output." },
        { title: "Thinking like a Founder", desc: "Scope decisions, constraints, and execution under uncertainty." },
        { title: "Career Reviews", desc: "Resume/portfolio feedback that gets interviews for the right reasons." },
        { title: "Roadmap", desc: "Weekly targets and accountability that keep momentum steady." }
    ];

    return (
        <div className="content-area">
            <section className="py-8">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <p className="section-label">Work With Me</p>
                        
                        <div className="flex gap-2 p-1 bg-(--selection-bg) rounded-md w-max border border-(--border-color)">
                            <button 
                                onClick={() => setActiveTab("founders")}
                                className={`px-4 py-1.5 text-[11px] font-semibold rounded transition-all ${activeTab === "founders" ? "bg-(--bg-color)" : "text-(--text-muted) hover:text-(--text-color)"}`}
                            >
                                Founders
                            </button>
                            <button 
                                onClick={() => setActiveTab("mentoring")}
                                className={`px-4 py-1.5 text-[11px] font-semibold rounded transition-all ${activeTab === "mentoring" ? "bg-(--bg-color)" : "text-(--text-muted) hover:text-(--text-color)"}`}
                            >
                                Mentoring
                            </button>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {activeTab === "founders" ? (
                            <motion.div 
                                key="founders"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex flex-col gap-14"
                            >
                                {/* Founders Header */}
                                <div className="flex flex-col gap-6 max-w-3xl">
                                    <p className="section-label">Work With Me — Founders</p>
                                    <h1 className="text-[2.35rem] md:text-[2.7rem] font-medium tracking-tight leading-[1.1]">
                                        Make the right calls <br /> early.
                                    </h1>
                                    <p className="text-[15px] text-(--text-muted) leading-relaxed max-w-2xl">
                                        Strategic technical guidance for founders and product teams. Less rework, better architecture, and clearer next steps.
                                    </p>
                                    <button className="btn-primary w-max mt-1">
                                        <i className="bx bx-calendar text-sm"></i>
                                        Book a Call
                                    </button>
                                </div>

                                {/* Problem Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 section-block">
                                    <div className="flex flex-col gap-4">
                                        <p className="section-label">The Problem</p>
                                        <h2 className="text-[2rem] font-medium tracking-tight">
                                            Building is hard. <br /> Building wrong is expensive.
                                        </h2>
                                    </div>
                                    <div className="flex flex-col gap-4 text-(--text-muted) leading-relaxed">
                                        <p>The hard part isn&apos;t code. It&apos;s choosing what to build—and what to skip—so your plan stays coherent.</p>
                                        <p>When decisions arrive late, you lose time, budget, and focus.</p>
                                        <p>We align on scope, architecture, and execution so you ship with less rework.</p>
                                    </div>
                                </div>

                                {/* Help Section */}
                                <div className="section-block flex flex-col gap-8">
                                    <div>
                                        <p className="section-label">What I Help With</p>
                                        <h2 className="text-[2rem] font-medium tracking-tight mt-2">Where I help most.</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 border border-(--border-color) rounded-xl overflow-hidden">
                                        {founderServices.map((s, i) => (
                                            <div key={i} className="p-8 border-[0.5px] border-(--border-color) flex flex-col gap-3 hover:bg-(--selection-bg) transition-colors">
                                                <h3 className="font-bold text-base">{s.title}</h3>
                                                <p className="text-sm text-(--text-muted) leading-relaxed">{s.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* How it Works */}
                                <div className="section-block flex flex-col gap-8">
                                    <div>
                                        <p className="section-label">How It Works</p>
                                        <h2 className="text-[2rem] font-medium tracking-tight mt-2">How we work together.</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {[
                                            { num: "Option 1", title: "Advisory Retainer", desc: "Weekly calls plus async architecture and product reviews.", bestFor: "Founders who want a steady technical thought partner." },
                                            { num: "Option 2", title: "Strategy Sprint", desc: "A focused 2–4 week engagement to audit decisions, map risks, and produce an execution plan.", bestFor: "Teams at a critical decision point." },
                                            { num: "Option 3", title: "One-Off Session", desc: "One deep-dive call to resolve a specific hard problem: architecture, hiring, or roadmap.", bestFor: "Founders who need a second opinion fast." }
                                        ].map((o, i) => (
                                            <div key={i} className="p-6 border border-(--border-color) rounded-lg bg-(--second-bg-color) flex flex-col gap-8 hover:bg-(--selection-bg) transition-colors">
                                                <div className="flex flex-col gap-4">
                                                    <span className="text-[10px] font-bold tracking-widest text-(--text-muted) uppercase">{o.num}</span>
                                                    <h3 className="text-2xl font-bold">{o.title}</h3>
                                                    <p className="text-sm text-(--text-muted) leading-relaxed">{o.desc}</p>
                                                </div>
                                                <div className="mt-auto pt-8 border-t border-(--border-color)">
                                                    <p className="text-[10px] font-bold tracking-widest text-(--text-muted) uppercase mb-2">BEST FOR</p>
                                                    <p className="text-xs font-bold">{o.bestFor}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="mentoring"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex flex-col gap-14"
                            >
                                {/* Mentoring Header */}
                                <div className="flex flex-col gap-6 max-w-3xl">
                                    <p className="section-label">Work With Me — Mentoring</p>
                                    <h1 className="text-[2.35rem] md:text-[2.7rem] font-medium tracking-tight leading-[1.1]">
                                        Build skill that <br /> compounds.
                                    </h1>
                                    <p className="text-[15px] text-(--text-muted) leading-relaxed max-w-2xl">
                                        Mentorship for developers and builders who want more than tutorials—context, trade-offs, and feedback that turns into shipped work.
                                    </p>
                                    <button className="btn-primary w-max mt-1">
                                        <i className="bx bx-bolt-circle text-sm"></i>
                                        Apply Now
                                    </button>
                                </div>

                                {/* Mentoring Problem */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 section-block">
                                    <div className="flex flex-col gap-4">
                                        <p className="section-label">The Problem</p>
                                        <h2 className="text-[2rem] font-medium tracking-tight">
                                            Tutorials don&apos;t <br /> close the gap.
                                        </h2>
                                    </div>
                                    <div className="flex flex-col gap-4 text-(--text-muted) leading-relaxed">
                                        <p>Watching content doesn&apos;t teach decision-making under constraints.</p>
                                        <p>We focus on practical work: scoping, trade-offs, and evaluation.</p>
                                        <p>You build stronger instincts through targeted feedback and real targets.</p>
                                    </div>
                                </div>

                                {/* Focus Areas */}
                                <div className="section-block flex flex-col gap-8">
                                    <div>
                                        <p className="section-label">What We&apos;ll Focus On</p>
                                        <h2 className="text-[2rem] font-medium tracking-tight mt-2">What we&apos;ll work on.</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 border border-(--border-color) rounded-xl overflow-hidden">
                                        {mentoringFocus.map((s, i) => (
                                            <div key={i} className="p-8 border-[0.5px] border-(--border-color) flex flex-col gap-3 hover:bg-(--selection-bg) transition-colors">
                                                <h3 className="font-bold text-base">{s.title}</h3>
                                                <p className="text-sm text-(--text-muted) leading-relaxed">{s.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Methodology */}
                                <div className="section-block flex flex-col gap-8">
                                    <div>
                                        <p className="section-label">How It Works</p>
                                        <h2 className="text-[2rem] font-medium tracking-tight mt-2">Mentorship, in practice.</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {[
                                            { title: "1:1 Calls", desc: "Bi-weekly sessions. We review decisions, tighten the plan, and remove roadblocks." },
                                            { title: "Async Support", desc: "Message between calls. Bring questions on architecture, projects, and next steps." },
                                            { title: "Accountability", desc: "Clear goals and simple check-ins. Steady momentum, week after week." }
                                        ].map((o, i) => (
                                            <div key={i} className="p-6 border border-(--border-color) rounded-lg bg-(--second-bg-color) flex flex-col gap-4 hover:bg-(--selection-bg) transition-colors">
                                                <h3 className="text-[1.5rem] font-medium">{o.title}</h3>
                                                <p className="text-sm text-(--text-muted) leading-relaxed">{o.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Checklists - Common to both */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 section-block">
                        <div className="flex flex-col gap-6 p-6 bg-(--second-bg-color) border border-(--border-color) rounded-lg">
                            <p className="section-label">This Is For You If...</p>
                            <h3 className="text-[1.5rem] font-medium">This is for you if...</h3>
                            <ul className="flex flex-col gap-4">
                                {activeTab === "founders" ? [
                                    "You're a non-technical founder building a tech product",
                                    "You're technical but want a sounding board who's been there",
                                    "You're about to hire engineers and don't want to get it wrong",
                                    "You're burning money on dev and not seeing results",
                                    "You're preparing for a fundraise and need your tech story straight"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                                        <i className="bx bx-check text-(--text-color) text-lg"></i>
                                        {item}
                                    </li>
                                )) : [
                                    "You want more than code/career, you want high level and/or growth",
                                    "You're an engineer but feel like you're missing the big-picture",
                                    "You value context over frameworks, result over tools",
                                    "You're serious about creating something of your own someday",
                                    "You're ready to put in work that goes beyond tutorials and checklists"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                                        <i className="bx bx-check text-(--text-color) text-lg"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6 p-6 border border-(--border-color) rounded-lg bg-(--second-bg-color)">
                            <p className="section-label">This Isn&apos;t For You If...</p>
                            <h3 className="text-[1.5rem] font-medium text-(--text-muted)">This probably isn&apos;t for you if...</h3>
                            <ul className="flex flex-col gap-4">
                                {activeTab === "founders" ? [
                                    "You want someone to just execute your spec",
                                    "You're looking for a dev shop or agency",
                                    "You're not ready to be challenged on your assumptions"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-(--text-muted) leading-relaxed">
                                        <i className="bx bx-x text-lg"></i>
                                        {item}
                                    </li>
                                )) : [
                                    "You want someone to find you a job or dev role",
                                    "You are not willing to put in work between sessions",
                                    "You want individual and constant resume reviews",
                                    "You're looking for code instructions or step-by-step trial growth"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-(--text-muted) leading-relaxed">
                                        <i className="bx bx-x text-lg"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Why Me Section */}
                    <div className="section-block flex flex-col gap-8">
                        <p className="section-label">Why Work With Me?</p>
                        <h2 className="text-[2rem] font-medium tracking-tight">Why work with me?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { title: "Practical experience", desc: "I’ve worked through real builds. The goal is usable guidance—not theory." },
                                { title: "Clear context", desc: "Advice tailored to your constraints, timeline, and what you can execute next." },
                                { title: "AI-first engineering", desc: "Architecture, evaluation, and reliability—paired with speed where it counts." }
                            ].map((w, i) => (
                                <div key={i} className="flex flex-col gap-3 p-1">
                                    <h3 className="font-bold text-lg">{w.title}</h3>
                                    <p className="text-sm text-(--text-muted) leading-relaxed">{w.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial Section */}
                    <div className="section-block flex flex-col gap-8">
                        <p className="section-label">Testimonials</p>
                        <div className="p-6 border border-(--border-color) bg-(--second-bg-color) rounded-lg max-w-3xl">
                            <p className="text-sm text-(--text-muted) leading-relaxed italic mb-6">
                                {activeTab === "founders" 
                                    ? `"Clear decisions, practical architecture, and calm execution. Oyugi helped us turn uncertainty into shipping momentum."`
                                    : `"Focused feedback on trade-offs and execution. I left with a plan I could follow—and work I could actually show."`}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full overflow-hidden grayscale">
                                    <Image
                                        src={activeTab === "founders" ? "https://i.pravatar.cc/150?u=marga" : "https://i.pravatar.cc/150?u=aayush"} 
                                        alt={"Testimonial Author"}
                                        width={40}
                                        height={40}
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold">{activeTab === "founders" ? "Marga López" : "Aayush Pradhan"}</span>
                                    <span className="text-[10px] text-(--text-muted) uppercase font-bold tracking-widest">{activeTab === "founders" ? "Senior Software Engineer & Tech Lead" : "Student & Aspiring Software Engineer"}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Commitment Section */}
                    {activeTab === "mentoring" && (
                        <div className="flex flex-col gap-4 py-20 border-t border-(--border-color)">
                            <p className="text-[10px] font-bold tracking-widest text-(--text-muted) uppercase">COMMITMENT</p>
                            <h2 className="text-3xl font-bold tracking-tight">A commitment to clarity.</h2>
                            <p className="text-base text-(--text-muted) leading-relaxed max-w-2xl">
                                Pricing depends on format and cadence. You&apos;ll get a clear proposal after the intro.
                            </p>
                            <p className="text-sm font-bold mt-2 italic">I keep the format hands-on so you get real feedback—not generic advice.</p>
                        </div>
                    )}

                    {/* Final CTA */}
                    <div className="section-block flex flex-col gap-5">
                        <p className="section-label">Ready?</p>
                        <h2 className="text-[2.15rem] md:text-[2.4rem] font-medium tracking-tight">
                            {activeTab === "founders" ? "Ready to ship with better decisions." : "Ready to build with clarity?"}
                        </h2>
                        <p className="text-[15px] text-(--text-muted)">
                            {activeTab === "founders" ? "One call to align on the decision you&apos;re facing and a clear next step." : "Tell me where you are, where you want to go, and what&apos;s blocking progress."}
                        </p>
                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex items-center gap-6">
                                <button className="btn-primary">
                                    <i className={`${activeTab === "founders" ? "bx bx-calendar" : "bx bx-envelope"} text-sm`}></i>
                                    {activeTab === "founders" ? "Book a Call" : "Apply via Updates"}
                                </button>
                                {activeTab === "founders" && (
                                    <Link href="#" className="text-sm font-bold border-b border-(--text-color) pb-1 hover:border-transparent transition-all">
                                        Or send a message — I&apos;ll reply with next steps.
                                    </Link>
                                )}
                            </div>
                            {activeTab === "mentoring" && <p className="text-[10px] text-(--text-muted) uppercase font-bold tracking-widest">I READ EVERY APPLICATION PERSONALLY.</p>}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

