"use client";
import Image from "next/image";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function WorkWithMe() {
    const [activeTab, setActiveTab] = useState<"founders" | "mentoring">("founders");

    const founderServices = [
        { title: "Technical Strategy", desc: "What to build, what to skip, and in what order." },
        { title: "Architecture Decisions", desc: "Stack choices that won't haunt you in 12 months." },
        { title: "Hiring & Team", desc: "When to hire, who to hire, and how to spot the right engineers." },
        { title: "Product & Roadmap", desc: "Turning vision into versions — scoped right, shipped fast." },
        { title: "AI & Automation", desc: "Where AI fits, where it doesn't, and how to build AI-first." },
        { title: "Investor Readiness", desc: "Technical due diligence prep and technical storytelling." }
    ];

    const mentoringFocus = [
        { title: "Career Clarity", desc: "Where you're going and why. Cut through the noise." },
        { title: "Technical Breadth", desc: "Think beyond the code. Systems, architecture, trade-offs." },
        { title: "Adding (m)Value", desc: "The projects, the tools, maneuvering your way to yours." },
        { title: "Thinking like a Founder", desc: "Ownership, product sense, and seeing beyond the code." },
        { title: "Career Reviews", desc: "Resume, portfolio, and how to sell your growth." },
        { title: "Roadmap", desc: "Consistency is key. Specific, actionable plans." }
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
                                        I&apos;ve made the mistakes <br /> so you don&apos;t have to.
                                    </h1>
                                    <p className="text-[15px] text-(--text-muted) leading-relaxed max-w-2xl">
                                        Strategic tech guidance for founders building something real. Think of me as the technical co-founder you call before things get expensive.
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
                                            Building tech is hard. <br /> Building it wrong is expensive.
                                        </h2>
                                    </div>
                                    <div className="flex flex-col gap-4 text-(--text-muted) leading-relaxed">
                                        <p>Most founders don&apos;t fail because of bad ideas. They fail because of bad tech decisions made too early — wrong stack, wrong hires, wrong priorities.</p>
                                        <p>By the time you realize it, you&apos;ve burned runway, lost time, and built something that doesn&apos;t scale.</p>
                                        <p>I&apos;ve been on both sides. I&apos;ve made those calls. And I&apos;ve learned what works.</p>
                                    </div>
                                </div>

                                {/* Help Section */}
                                <div className="section-block flex flex-col gap-8">
                                    <div>
                                        <p className="section-label">What I Help With</p>
                                        <h2 className="text-[2rem] font-medium tracking-tight mt-2">Where I come in.</h2>
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
                                            { num: "Option 1", title: "Advisory Retainer", desc: "Ongoing partnership. Weekly calls, async access, architecture reviews.", bestFor: "Founders needing a technical thought partner." },
                                            { num: "Option 2", title: "Strategy Sprint", desc: "Intensive 2-4 week engagement on a specific roadmap or audit.", bestFor: "Founders facing a critical decision point." },
                                            { num: "Option 3", title: "One-Off Session", desc: "Single deep-dive call for clarity on a specific challenge.", bestFor: "Founders who need a second opinion fast." }
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
                                        Launch your career <br /> with intention.
                                    </h1>
                                    <p className="text-[15px] text-(--text-muted) leading-relaxed max-w-2xl">
                                        For developers and aspiring founders who want more than a job. I help you build skills that compound — so you can build a career that matters.
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
                                            Tutorials won&apos;t get <br /> you there.
                                        </h2>
                                    </div>
                                    <div className="flex flex-col gap-4 text-(--text-muted) leading-relaxed">
                                        <p>You can watch all the courses you want, but they won&apos;t show you how things actually work in the real world.</p>
                                        <p>The gap between knowledge and skills is where most developers stall. AI is changing where focus should go, and how to build. Tutorials don&apos;t show you the context.</p>
                                        <p>As your mentor, I don&apos;t give you a curriculum. I give you the context, challenges, and support you actually need to build things — and help you avoid the confusion.</p>
                                    </div>
                                </div>

                                {/* Focus Areas */}
                                <div className="section-block flex flex-col gap-8">
                                    <div>
                                        <p className="section-label">What We&apos;ll Focus On</p>
                                        <h2 className="text-[2rem] font-medium tracking-tight mt-2">What we&apos;ll focus on.</h2>
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
                                        <h2 className="text-[2rem] font-medium tracking-tight mt-2">How mentorship works.</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {[
                                            { title: "1:1 Calls", desc: "Regular sessions — bi-weekly mentoring. We dig into code and strategy, resolving roadblocks as they come." },
                                            { title: "Async Support", desc: "Message me between calls. Code questions, architecture, career decisions — I'm in your corner." },
                                            { title: "Accountability", desc: "No excuses. Clarity, then consistency. We set goals, we hit them, we move up." }
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
                                { title: "Real-world Experience", desc: "I'm not a theorist. Everything I share comes from building, launching, and failing on real startups and projects." },
                                { title: "Context is Everything", desc: "No generic advice here. We talk about high level growth that fits where you are and where you're going." },
                                { title: "Tech + Intent + AI First", desc: "I focus on sustainable tech building, balancing architecture with speed, while prioritizing AI-First tools in the workflow." }
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
                                    ? `"Oyugi has an amazing attitude to lead and build any kind of project. From its ideation, brainstorming, definition, and build. It doesn't matter how big or small, rationale or crazy the concept is, he will put all of his heart into it."`
                                    : `"What made it worthwhile was its hands-on, unfiltered format — everything done live, from brainstorming to coding and debugging. Not theory, the actual process of building a startup product step-by-step. I walked away with practical technical insights and a much clearer view of how to take an idea to a product."`}
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
                            <h2 className="text-3xl font-bold tracking-tight">A commitment for both of us.</h2>
                            <p className="text-base text-(--text-muted) leading-relaxed max-w-2xl">
                                Price depends on format and frequency. Apply below and we&apos;ll figure out what makes sense for where you are and where you&apos;re going.
                            </p>
                            <p className="text-sm font-bold mt-2 italic">I keep the cohort small so I can show up fully. This isn&apos;t a course, it&apos;s an investment.</p>
                        </div>
                    )}

                    {/* Final CTA */}
                    <div className="section-block flex flex-col gap-5">
                        <p className="section-label">Ready?</p>
                        <h2 className="text-[2.15rem] md:text-[2.4rem] font-medium tracking-tight">
                            {activeTab === "founders" ? "Let's figure it out together." : "Ready to build with intention?"}
                        </h2>
                        <p className="text-[15px] text-(--text-muted)">
                            {activeTab === "founders" ? "One call. No pitch. Just clarity on what to do next." : "Tell me where you are, where you want to go, and why this matters to you."}
                        </p>
                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex items-center gap-6">
                                <button className="btn-primary">
                                    <i className={`${activeTab === "founders" ? "bx bx-calendar" : "bx bx-envelope"} text-sm`}></i>
                                    {activeTab === "founders" ? "Book a Call" : "Apply via Newsletter"}
                                </button>
                                {activeTab === "founders" && (
                                    <Link href="#" className="text-sm font-bold border-b border-(--text-color) pb-1 hover:border-transparent transition-all">
                                        Or send me a message — I read everything.
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

