"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                "service_2l2sler", 
                "template_d6q7w68", 
                formRef.current!,
                "eM2mO7s0WlBN_kuoc"
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    formRef.current?.reset();
                    setIsSubmitting(false);
                },
                (error) => {
                    alert("Something went wrong.");
                    console.error(error);
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <section id="contact" className="py-20 border-t border-(--border-color) mb-20">
            <div className="flex flex-col gap-12">
                <div className="flex items-center gap-3">
                    <span className="px-2 py-1 bg-(--text-color) text-(--bg-color) text-[10px] font-bold tracking-widest uppercase rounded">
                        GET IN TOUCH
                    </span>
                    <span className="w-8 h-px bg-(--border-color)"></span>
                </div>

                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Let&apos;s build something together.</h2>
                    <p className="text-base text-(--text-muted) leading-relaxed">
                        Currently open to new opportunities and collaborations. Drop me a message and I&apos;ll get back to you as soon as possible.
                    </p>
                </div>

                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold tracking-widest text-(--text-muted) uppercase">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="bg-transparent border border-(--border-color) rounded-lg p-4 text-sm focus:border-(--text-color) outline-none transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold tracking-widest text-(--text-muted) uppercase">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="bg-transparent border border-(--border-color) rounded-lg p-4 text-sm focus:border-(--text-color) outline-none transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-[10px] font-bold tracking-widest text-(--text-muted) uppercase">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            required
                            className="bg-transparent border border-(--border-color) rounded-lg p-4 text-sm focus:border-(--text-color) outline-none transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-[10px] font-bold tracking-widest text-(--text-muted) uppercase">Message</label>
                        <textarea
                            name="message"
                            rows={6}
                            required
                            className="bg-transparent border border-(--border-color) rounded-lg p-4 text-sm focus:border-(--text-color) outline-none transition-colors resize-none"
                        ></textarea>
                    </div>
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full md:w-auto px-12 py-4 bg-(--text-color) text-(--bg-color) font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
