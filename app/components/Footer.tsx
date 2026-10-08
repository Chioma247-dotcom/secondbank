import Link from "next/link";

const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Pages", href: "/pages" },
    { label: "News", href: "/news" },
    { label: "Help", href: "/help" },
    { label: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="bg-[var(--brand-dark)] text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr] lg:px-10">
                <div>
                    <p className="text-lg font-bold tracking-[0.18em]">SECONDBANK</p>
                    <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">Thoughtful tools and guidance for the next chapter of your financial life.</p>
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">Explore</p>
                    <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-white/75">
                        {footerLinks.map((item) => <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>)}
                    </div>
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">Contact</p>
                    <div className="mt-4 space-y-2 text-sm leading-6 text-white/75">
                        <p>hello@secondbank.example</p>
                        <p>+1 (000) 000-0000</p>
                        <p>123 Example Street, Your City</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/15 px-5 py-5 text-center text-xs text-white/55 sm:px-8 lg:px-10">© 2026 Secondbank. All rights reserved.</div>
        </footer>
    );
}