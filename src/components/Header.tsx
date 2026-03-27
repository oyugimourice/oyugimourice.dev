"use client";
import Image from "next/image";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("home");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isThemeReady, setIsThemeReady] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const applyTheme = (darkMode: boolean) => {
        const root = document.documentElement;
        root.classList.add("theme-switching");

        if (darkMode) {
            root.classList.add("dark");
            root.classList.remove("light");
        } else {
            root.classList.add("light");
            root.classList.remove("dark");
        }

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                root.classList.remove("theme-switching");
            });
        });
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const nextIsDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

        applyTheme(nextIsDark);

        queueMicrotask(() => {
            setIsDarkMode(nextIsDark);
            setIsThemeReady(true);
        });
    }, []);

    useEffect(() => {
        if (pathname !== "/") return;

        const sectionIds = ["home", "about", "skills", "portfolio", "contact"];
        const sectionElements = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => Boolean(el));

        const handleScroll = () => {
            // Throttle scroll work to once per animation frame to avoid layout thrash.
            // Also compute which section is currently "passed" the threshold and only update state if it changed.
            let currentSection = "home";
            for (const el of sectionElements) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 200) currentSection = el.id;
            }
            setActiveSection((prev) => (prev === currentSection ? prev : currentSection));
        };

        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                ticking = false;
                handleScroll();
            });
        };

        // Initialize active section immediately on mount.
        handleScroll();

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [pathname]);

    const toggleTheme = (type: "light" | "dark") => {
        const nextIsDark = type === "dark";
        setIsDarkMode(nextIsDark);
        applyTheme(nextIsDark);
        localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const primaryNavLinks = [
        { name: "Home", href: "/", icon: "bx bx-home-alt-2" },
        { name: "Work With Me", href: "/work-with-me", icon: "bx bx-briefcase-alt-2" },
        { name: "Writing", href: "/writing", icon: "bx bx-edit-alt" },
        { name: "Speaking", href: "/speaking", icon: "bx bx-microphone" },
        { name: "Podcast", href: "/podcast", icon: "bx bx-podcast" },
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
        <aside className="sidebar-sticky lg:self-start z-100 bg-(--bg-color)">
            <div className="flex items-center justify-between lg:hidden">
                <Link href="/" onClick={closeMobileMenu} className="block text-[1.4rem] font-serif italic font-light tracking-tight text-(--text-color)">
                    Oyugi Mourice
                </Link>
                <button
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-(--border-color) text-(--text-muted) hover:text-(--text-color)"
                >
                    <i className={`bx ${isMobileMenuOpen ? "bx-x" : "bx-menu"} text-[18px]`}></i>
                </button>
            </div>

            <div className={`${isMobileMenuOpen ? "flex" : "hidden"} lg:flex flex-col mt-5 lg:mt-0`}>
                <div className="flex flex-col gap-8">
                    <Link href="/" onClick={closeMobileMenu} className="hidden lg:block text-[1.75rem] font-serif italic font-light tracking-tight text-(--text-color)">
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
                                            ? "bg-(--selection-bg) text-(--text-color)"
                                            : "text-(--text-muted) hover:text-(--text-color)"
                                        }`}
                                >
                                    <i className={`${link.icon} text-[14px]`}></i>
                                    {link.name}
                                </Link>
                            ))}

                            <div className="flex items-center justify-between gap-2.5 px-2.5 py-1.5 rounded-md text-[12px] font-medium text-(--text-muted)/70">
                                <span className="flex items-center gap-2.5">
                                    <i className="bx bx-book-open text-[14px]"></i>
                                    Engineer Notes
                                </span>
                                <span className="text-[10px] tracking-wide">UPCOMING</span>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="flex flex-col gap-5 pt-6 mt-6 lg:mt-6 border-t border-(--border-color)">
                    <div className="flex items-center gap-3 px-2.5">
                        <div className="w-9 h-9 rounded-full bg-neutral-200 overflow-hidden border border-(--border-color)">
                            <Image
                                src={"/img/ste.jpg"} 
                                alt={"Profile"}
                                width={36}
                                height={36} 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[12px] font-semibold leading-none">Oyugi Mourice</span>
                            <span className="text-[10px] text-(--text-muted) mt-1 tracking-tight">Founder · Builder · Engineer</span>
                        </div>
                    </div>

                    <div className="flex gap-2.5 px-2.5">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[15px] text-(--text-muted) hover:text-(--text-color) transition-colors"
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
                        <p className="text-[10px] text-(--text-muted) leading-relaxed">
                            Designed & Developed by Oyugi Mourice
                        </p>
                        <div className="inline-flex items-center gap-1 p-1 bg-(--selection-bg) rounded-lg w-max border border-(--border-color)">
                            <button
                                onClick={() => isDarkMode && toggleTheme("light")}
                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold rounded-md transition-all ${(isThemeReady && !isDarkMode) ? "bg-black text-white shadow-sm" : "text-(--text-muted) hover:text-(--text-color)"}`}
                            >
                                <i className="bx bx-sun text-[12px]"></i>
                                Light
                            </button>
                            <button
                                onClick={() => !isDarkMode && toggleTheme("dark")}
                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold rounded-md transition-all ${(isThemeReady && isDarkMode) ? "bg-white text-black shadow-sm" : "text-(--text-muted) hover:text-(--text-color)"}`}
                            >
                                <i className="bx bx-moon text-[12px]"></i>
                                Dark
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
