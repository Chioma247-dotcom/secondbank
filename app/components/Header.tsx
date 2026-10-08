"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "PAGES", href: "/pages" },
    { label: "NEWS", href: "/news" },
    { label: "HELP", href: "/help" },
    { label: "CONTACT", href: "/contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-white/15 bg-blue-900">
            <div className="mx-auto flex flex-row items-center justify-between gap-4 px-5 py-4 sm:px-4 lg:px-5">
                <Link href="/" className="flex shrink-0 items-center gap-2" onClick={() => setMenuOpen(false)} aria-label="EasyFair Bank home">
                    <Image src="/py.png" alt="EasyFair Bank logo" width={112} height={106} priority className="h-auto w-24 sm:w-28" />

                </Link>

                <div className="hidden shrink-0 items-center lg:flex">
                    <nav aria-label="Primary navigation" className="flex items-center gap-5 whitespace-nowrap">
                        {navigation.map((item) => (
                            <Link key={item.href} href={item.href} className="text-[10px] font-bold tracking-[0.08em] text-white/90 transition-colors hover:text-sky-200 xl:text-xs xl:tracking-[0.1em]">
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="ml-7 flex shrink-0 items-center gap-4">
                        <Link href="/login" className="text-[10px] font-bold tracking-[0.08em] text-white transition-colors hover:text-sky-200 xl:text-xs">LOGIN</Link>
                        <Link href="/contact" className="rounded-md bg-sky-500 px-3 py-2.5 text-[10px] font-bold tracking-[0.04em] text-white transition-colors hover:bg-sky-600 xl:px-4 xl:text-xs">OPEN AN ACCOUNT</Link>
                    </div>
                </div>

                <button
                    type="button"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md border border-white/35 bg-white/10 lg:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="h-0.5 w-5 bg-white" />
                    <span className="h-0.5 w-5 bg-white" />
                    <span className="h-0.5 w-5 bg-white" />
                </button>
            </div>

            {menuOpen && (
                <nav aria-label="Mobile navigation" className="border-t border-white/15 bg-blue-900 px-5 py-3 lg:hidden">
                    {navigation.map((item) => (
                        <Link key={item.href} href={item.href} className="block border-b border-white/10 py-4 text-sm font-bold tracking-[0.08em] text-white last:border-0" onClick={() => setMenuOpen(false)}>
                            {item.label}
                        </Link>
                    ))}
                    <div className="flex items-center gap-5 pt-4">
                        <Link href="/login" className="text-xs font-bold tracking-[0.08em] text-white" onClick={() => setMenuOpen(false)}>LOGIN</Link>
                        <Link href="/contact" className="rounded-md bg-sky-500 px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-sky-600" onClick={() => setMenuOpen(false)}>OPEN AN ACCOUNT</Link>
                    </div>
                </nav>
            )}
        </header>
    );
}