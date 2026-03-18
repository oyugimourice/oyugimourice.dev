"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="min-h-[34vh] flex flex-col justify-center py-10 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6"
            >
                <h1 className="text-[2.6rem] md:text-[3.05rem] font-medium tracking-tight text-[var(--text-color)] leading-[1.04]">
                    Build With Intention
                </h1>

                <p className="text-[15px] md:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
                    Great tech starts with purpose, not code. I help founders <br className="hidden md:block" />
                    turn clarity into product.
                </p>

                <div className="flex flex-wrap gap-3 mt-2">
                    <Link href="/newsletter" className="btn-primary">
                        <i className="bx bx-envelope text-sm"></i>
                        Join the Newsletter
                    </Link>
                    <Link href="/work-with-me" className="btn-secondary">
                        <i className="bx bx-briefcase-alt-2 text-sm"></i>
                        Work With Me
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
