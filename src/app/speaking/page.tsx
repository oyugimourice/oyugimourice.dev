"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Speaking() {
    const topics = [
        {
            title: "Build With Intention",
            desc: "Most products don't fail because of bad code. They fail because nobody stopped to ask why before asking how. I talk about building with clarity — and what changes when purpose comes first."
        },
        {
            title: "The Future of Building With AI",
            desc: "AI isn't a feature anymore, it's a foundation. I share what I'm learning from building AI-first products — the opportunities, the traps, and what it means for founders and teams right now."
        },
        {
            title: "From Engineer to Founder",
            desc: "It's not a promotion, it's a completely different game. I talk about the shift — the identity crisis, the lone lines, the lessons — and how to make it without losing yourself."
        },
        {
            title: "The Fractional CTO Perspective",
            desc: "I've sat across from dozens of founders making decisions they weren't sure about. I share the patterns — what works, what doesn't, and what I wish someone had told me earlier."
        },
        {
            title: "Purpose Before Code",
            desc: "A talk about intention. About slowing down before speeding up. About building things that matter — not just things that ship."
        },
        {
            title: "Something else?",
            desc: "If you have a theme in mind, let's shape something together. The best talks come from real conversations.",
            link: "Start a conversation —"
        }
    ];

    const formats = [
        { type: "Keynote", desc: "A focused talk, 20-45 minutes. One idea, explored deeply." },
        { type: "Panel", desc: "Happy to join conversations on building, AI, leadership, or founder life." },
        { type: "Podcast", desc: "New long-form. Let's go deep." },
        { type: "Workshop", desc: "Interactive. For teams who want to work through something together." },
        { type: "Fireside Chat", desc: "Informal, conversational. Audience questions welcome." },
        { type: "Offsite or Retreat", desc: "Intimate settings where real conversations happen." }
    ];

    return (
        <div className="content-area">
            <section className="py-8">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6 max-w-3xl">
                        <p className="section-label">Speaking</p>
                        <h1 className="text-[2.35rem] md:text-[2.7rem] font-medium tracking-tight leading-[1.1]">
                            Lessons worth sharing.
                        </h1>
                        <p className="text-[15px] text-[var(--text-muted)] leading-relaxed max-w-2xl">
                            Honest lessons from years of building products, leading teams, and figuring it out along the way. If your audience wants substance over polish, we'll get along.
                        </p>
                        <button className="btn-primary w-max mt-1">
                            <i className="bx bx-calendar text-sm"></i>
                            Let's Talk
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 section-block mt-2">
                        <div className="flex flex-col gap-4">
                            <p className="section-label">The Story</p>
                            <h2 className="text-[2rem] font-medium tracking-tight">Why I speak.</h2>
                        </div>
                        <div className="flex flex-col gap-6 text-[var(--text-muted)] leading-relaxed">
                            <p>I kept having the same conversations with founders, with engineers, with people trying to build something that matters and I realized these lessons might help more than just the person in front of me.</p>
                            <p>I speak about building. About clarity. About intention. About the messy, unglamorous work of turning ideas into something real.</p>
                            <p>If that resonates with your audience, I'd love to be part of what you're creating.</p>
                        </div>
                    </div>

                    <div className="section-block flex flex-col gap-8">
                        <div>
                            <p className="section-label">Talk Topics</p>
                            <h2 className="text-[2rem] font-medium tracking-tight mt-2">Ideas I keep coming back to.</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 border border-[var(--border-color)] rounded-xl overflow-hidden">
                            {topics.map((t, i) => (
                                <div key={i} className="p-8 border-[0.5px] border-[var(--border-color)] flex flex-col gap-3 hover:bg-[var(--selection-bg)] transition-colors">
                                    <h3 className="font-bold text-base">{t.title}</h3>
                                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{t.desc}</p>
                                    {t.link && <Link href="#" className="text-xs font-bold border-b border-black w-max pb-0.5 mt-2">{t.link}</Link>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="section-block flex flex-col gap-8">
                        <div>
                            <p className="section-label">Formats</p>
                            <h2 className="text-[2rem] font-medium tracking-tight mt-2">Ways we can work together.</h2>
                        </div>
                        <div className="flex flex-col gap-0 border-t border-[var(--border-color)]">
                            {formats.map((f, i) => (
                                <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] py-6 border-b border-[var(--border-color)] group hover:bg-[var(--selection-bg)] px-4 transition-colors">
                                    <span className="font-bold text-sm">{f.type}</span>
                                    <span className="text-sm text-[var(--text-muted)] leading-relaxed">{f.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="section-block flex flex-col gap-8">
                        <div>
                            <p className="section-label">The Practical Stuff</p>
                            <h2 className="text-[2rem] font-medium tracking-tight mt-2">A few details.</h2>
                        </div>
                        <div className="flex flex-col gap-0 border-t border-[var(--border-color)]">
                            {[
                                { label: "Based in", value: "Nairobi, Available anywhere." },
                                { label: "Virtual", value: "Absolutely — for podcasts, webinars, remote events." },
                                { label: "Fees", value: "Vary by format, travel, and context. Let's have a conversation." },
                                { label: "Lead Time", value: "More is better, but I'll make it work for the right fit." }
                            ].map((detail, i) => (
                                <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] py-6 border-b border-[var(--border-color)] group hover:bg-[var(--selection-bg)] px-4 transition-colors">
                                    <span className="font-bold text-sm tracking-tight">{detail.label}</span>
                                    <span className="text-sm text-[var(--text-muted)] leading-relaxed">{detail.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="section-block flex flex-col gap-5">
                        <p className="section-label">Let's Talk</p>
                        <h2 className="text-[2.15rem] md:text-[2.4rem] font-medium tracking-tight">If this feels right, let's talk.</h2>
                        <p className="text-[15px] text-[var(--text-muted)] max-w-2xl">Tell me about your event. Who's in the room. What you're hoping they walk away with. I'd love to hear what you're building.</p>
                        <div className="flex items-center gap-6 mt-4">
                            <button className="btn-primary">
                                <i className="bx bx-calendar text-sm"></i>
                                Start a Conversation
                            </button>
                            <Link href="#" className="text-sm font-bold border-b border-[var(--text-color)] pb-1 hover:border-transparent transition-all">
                                Or email me — I read everything.
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
