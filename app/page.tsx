import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="bank-hero flex min-h-[570px] items-center sm:min-h-[620px] lg:min-h-[680px]">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-sky-200 sm:text-sm">A more comfortable way to bank</p>
            <h1 className="max-w-xl text-4xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-6xl">Banking Made Pleasant, Simple and Fair.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">At EasyFair Bank, we believe banking should feel simple, welcoming and convenient. We are here to make your everyday financial experience easier, with services designed around your needs and a banking experience you can feel comfortable using.</p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-500 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-sky-600">OPEN AN ACCOUNT</Link>
              <Link href="/services" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/75 bg-white/10 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-white/20">EXPLORE OUR SERVICES</Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Services" className="min-h-64 bg-white sm:min-h-72">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20" />
      </section>
    </div>
  );
}
