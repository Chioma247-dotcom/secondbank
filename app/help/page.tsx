import Link from "next/link";

const questions = ["How do I get started?", "Where can I learn more?", "Can I speak with someone?"];

export default function HelpPage() {
    return <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">Help</p><h1 className="mt-4 text-4xl font-bold text-[var(--brand-dark)] sm:text-5xl">Questions, made clearer.</h1><div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">{questions.map((question) => <details key={question} className="group py-6"><summary className="cursor-pointer list-none pr-8 text-lg font-bold text-[var(--brand-dark)]">{question}<span className="float-right text-[var(--brand)] group-open:rotate-45">+</span></summary><p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]">This is a placeholder answer. Replace it with the helpful information your visitors need.</p></details>)}</div><p className="mt-10 text-sm text-[var(--muted)]">Still need help? <Link href="/contact" className="font-bold text-[var(--brand)]">Contact us</Link>.</p></section>;
}