const services = [
    ["01", "Financial planning", "A clear, editable starting point for goals, priorities, and next steps."],
    ["02", "Everyday banking", "Placeholder content for the practical tools that help keep life moving."],
    ["03", "Future building", "A space to describe long-term thinking, guidance, and steady progress."],
];

export default function ServicesPage() {
    return <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-10"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">Services</p><h1 className="mt-4 max-w-2xl text-4xl font-bold text-[var(--brand-dark)] sm:text-5xl">Support designed around real life.</h1><p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">Use these starter cards to introduce the services and ideas that matter most to your audience.</p><div className="mt-12 grid gap-5 md:grid-cols-3">{services.map(([number, title, description]) => <article key={number} className="rounded-2xl border border-[var(--line)] bg-white p-7"><p className="text-sm font-bold text-[var(--brand)]">{number}</p><h2 className="mt-12 text-2xl font-bold text-[var(--brand-dark)]">{title}</h2><p className="mt-4 text-sm leading-6 text-[var(--muted)]">{description}</p></article>)}</div></section>;
}