import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="px-6 pt-12">
      <div className="brand-gradient mx-auto flex max-w-[920px] flex-col items-center justify-between gap-6 rounded-[10px] px-8 py-6 md:flex-row md:px-10">
        <div>
          <h3 className="text-[18px] font-bold tracking-wide uppercase">
            Gratis Konseling Studi di Luar Negeri !!!
          </h3>
          <p className="mt-1 text-[13.5px] text-white/90">
            Konsultasi seputar kuliah / bekerja di Luar Negeri
          </p>
        </div>
        <Link
          href="/hubungi-kami"
          className="inline-flex shrink-0 items-center gap-3 rounded-full border border-white px-6 py-2.5 text-[13px] font-semibold tracking-wide uppercase"
        >
          Mulai Konsultasi
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
            <path d="M6 9l6 6 6-6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
