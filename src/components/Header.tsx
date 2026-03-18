"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("home");
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window === "undefined") return false;

        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    useEffect(() => {
        if (pathname !== "/") return;

        const handleScroll = () => {
            const sections = ["home", "about", "skills", "portfolio", "contact"];
            let currentSection = "home";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200) {
                        currentSection = section;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const toggleTheme = (type: "light" | "dark") => {
        if (type === "dark") {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const primaryNavLinks = [
        { name: "Home", href: "/", icon: "bx bx-home-alt-2" },
        { name: "Work With Me", href: "/work-with-me", icon: "bx bx-briefcase-alt-2" },
        { name: "Writing", href: "/writing", icon: "bx bx-edit-alt" },
        { name: "Speaking", href: "/speaking", icon: "bx bx-microphone" },
        { name: "Ventures", href: "/ventures", icon: "bx bx-rocket" },
        { name: "Lab", href: "/lab", icon: "bx bx-vial" },
    ];

    const secondaryNavLinks = [
        { name: "Newsletter", href: "/newsletter", icon: "bx bx-envelope" },
    ];

    const isLinkActive = (href: string) => {
        if (href === "/") return pathname === "/" && activeSection === "home";
        if (href.startsWith("/#")) return pathname === "/" && activeSection === href.substring(2);
        return pathname === href;
    };

    const socialLinks = [
        { href: "https://github.com/oyugimourice", icon: "bx bxl-github", label: "GitHub" },
        { href: "https://www.linkedin.com/in/oyugimourice", icon: "bx bxl-linkedin", label: "LinkedIn" },
        { href: "https://x.com/oyugi_4e", icon: "bx bxl-twitter", label: "X" },
        { href: "https://www.instagram.com/oyugimourice_", icon: "bx bxl-instagram", label: "Instagram" },
        { href: "https://discordapp.com/users/1260703236101373996", icon: "bx bxl-discord-alt", label: "Discord" },
    ];

    return (
        <aside className="sidebar-sticky lg:self-start z-[100] bg-[var(--bg-color)]">
            <div className="flex items-center justify-between lg:hidden">
                <Link href="/" onClick={closeMobileMenu} className="block text-[1.4rem] font-serif italic font-light tracking-tight text-[var(--text-color)]">
                    Oyugi Mourice
                </Link>
                <button
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-color)]"
                >
                    <i className={`bx ${isMobileMenuOpen ? "bx-x" : "bx-menu"} text-[18px]`}></i>
                </button>
            </div>

            <div className={`${isMobileMenuOpen ? "flex" : "hidden"} lg:flex flex-col mt-5 lg:mt-0`}>
                <div className="flex flex-col gap-8">
                    <Link href="/" onClick={closeMobileMenu} className="hidden lg:block text-[1.75rem] font-serif italic font-light tracking-tight text-[var(--text-color)]">
                        Oyugi Mourice
                    </Link>

                    <nav className="flex flex-col">
                        <div className="flex flex-col gap-0.5">
                            {primaryNavLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[12px] font-medium transition-colors ${isLinkActive(link.href)
                                            ? "bg-(--selection-bg) text-(--text-color)"
                                            : "text-(--text-muted) hover:text-(--text-color)"
                                        }`}
                                >
                                    <i className={`${link.icon} text-[14px]`}></i>
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-0.5 mt-8">
                            {secondaryNavLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[12px] font-medium transition-colors ${isLinkActive(link.href)
                                            ? "bg-[var(--selection-bg)] text-[var(--text-color)]"
                                            : "text-[var(--text-muted)] hover:text-[var(--text-color)]"
                                        }`}
                                >
                                    <i className={`${link.icon} text-[14px]`}></i>
                                    {link.name}
                                </Link>
                            ))}

                            <div className="flex items-center justify-between gap-2.5 px-2.5 py-1.5 rounded-md text-[12px] font-medium text-[var(--text-muted)]/70">
                                <span className="flex items-center gap-2.5">
                                    <i className="bx bx-book-open text-[14px]"></i>
                                    Developer&apos;s Read
                                </span>
                                <span className="text-[10px] tracking-wide">SOON</span>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="flex flex-col gap-5 pt-6 mt-8 lg:mt-auto border-t border-[var(--border-color)]">
                    <div className="flex items-center gap-3 px-2.5">
                        <div className="w-9 h-9 rounded-full bg-neutral-200 overflow-hidden border border-[var(--border-color)]">
                            <img src="/img/ste.jpg" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[12px] font-semibold leading-none">Oyugi Mourice</span>
                            <span className="text-[10px] text-[var(--text-muted)] mt-1 tracking-tight">Founder · Builder · Engineer</span>
                        </div>
                    </div>

                    <div className="flex gap-2.5 px-2.5">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[15px] text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors"
                            >
                                {social.label === "X" ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z" />
                                    </svg>
                                ) : (
                                    <i className={social.icon}></i>
                                )}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3 px-2.5">
                        <p className="text-[10px] text-[var(--text-muted)] leading-relaxed">
                            Designed & Developed by Oyugi Mourice
                        </p>
                        <div className="flex p-0.5 bg-[var(--selection-bg)] rounded-md w-max border border-[var(--border-color)]">
                            <button
                                onClick={() => isDarkMode && toggleTheme("light")}
                                className={`p-1 px-2.5 text-[10px] font-semibold rounded transition-all ${!isDarkMode ? "bg-[var(--bg-color)] text-[var(--text-color)]" : "text-[var(--text-muted)] hover:text-[var(--text-color)]"}`}
                            >
                                Light
                            </button>
                            <button
                                onClick={() => !isDarkMode && toggleTheme("dark")}
                                className={`p-1 px-2.5 text-[10px] font-semibold rounded transition-all ${isDarkMode ? "bg-[var(--second-bg-color)] text-[var(--text-color)]" : "text-[var(--text-muted)] hover:text-[var(--text-color)]"}`}
                            >
                                Dark
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
