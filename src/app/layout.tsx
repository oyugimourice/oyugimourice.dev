import type { Metadata } from "next";
import { Manrope, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans-main",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Oyugi Mourice Odhiambo | Software Engineer",
  description:
    "Software Engineer specializing in building exceptional digital experiences. Inspired by minimalism and functional design.",
  keywords: [
    "software engineer",
    "web developer",
    "frontend developer",
    "portfolio",
    "Oyugi Mourice",
  ],
};

import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} ${jetbrainsMono.variable} ${cormorantGaramond.variable} antialiased text-(--text-color) bg-(--bg-color)`}>
        <div className="w-full max-w-285 mx-auto px-0 sm:px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 min-h-screen relative">
            <Header />
            <main className="flex-1 min-w-0 w-full lg:ml-0">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
