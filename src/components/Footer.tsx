"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-10 border-t border-(--border-color) flex flex-col md:flex-row gap-4 md:justify-between md:items-center">
            <div className="flex flex-col gap-2">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-(--text-muted)">Stay In Touch</p>
                <div className="flex gap-4">
                    <Link
                        href="https://github.com/oyugimourice"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12px] font-medium hover:text-(--text-muted) transition-colors underline decoration-(--border-color) underline-offset-4"
                    >
                        GitHub
                    </Link>
                    <Link
                        href="https://linkedin.com/in/oyugimourice"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12px] font-medium hover:text-(--text-muted) transition-colors underline decoration-(--border-color) underline-offset-4"
                    >
                        LinkedIn
                    </Link>
                </div>
            </div>

            <Link
                href="/#home"
                className="text-[10px] font-semibold tracking-widest uppercase border border-(--border-color) px-3 py-2 rounded-md hover:bg-(--selection-bg) transition-colors"
            >
                BACK TO TOP ↑
            </Link>
        </footer>
    );
}
