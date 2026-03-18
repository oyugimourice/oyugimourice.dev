"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Oyugi has an amazing attitude to lead and build any kind of project. From its ideation, brainstorming, definition, and build. It doesn't matter how big or small, rationale or crazy the concept is, he will put all of his heart into it.",
            name: "Hawona Rodgers",
            role: "CEO DuniAfrika Group |Senior Software Engineer & Technical Lead",
            image: "https://i.pravatar.cc/150?u=marga"
        },
        {
            quote: "What made it worthwhile was its hands-on, unfiltered format — everything done live, from brainstorming to coding and debugging. Not theory, the actual process of building a startup product step-by-step. I walked away with practical technical insights and a much clearer view of how to take an idea to a product.",
            name: "Paul Onsongo",
            role: "Student & Aspiring Software Engineer",
            image: "https://i.pravatar.cc/150?u=aayush"
        }
    ];

    return (
        <section id="testimonials" className="section-block">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <p className="section-label">Testimonials</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col gap-7 justify-between p-6 rounded-lg border border-(--border-color) bg-(--second-bg-color)"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <p className="text-[13px] text-(--text-muted) leading-relaxed">
                                &quot;{testimonial.quote}&quot;
                            </p>
                            
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full overflow-hidden grayscale border border-(--border-color)">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={40}
                                        height={40}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[13px] font-semibold tracking-tight">{testimonial.name}</span>
                                    <span className="text-[10px] font-semibold uppercase tracking-tight text-(--text-muted)">{testimonial.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
