import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section className="py-8 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-linear-to-r from-[#200A49]/90 via-[#1E40AF]/80 to-[#0284C7]/75 rounded-xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          
          {/* Teks Informasi (Kiri) */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-wide mb-1">
              GRATIS KONSELING STUDI DI LUAR NEGERI !!
            </h3>
            <p className="text-xs md:text-sm text-white/80">
              Konsultasi seputar kuliah / bekerja di Luar Negeri.
            </p>
          </div>

          {/* Tombol Action (Kanan) */}
          <Link
            href="/hubungi-kami"
            className="bg-white/10 hover:bg-white/20 border border-white/40 text-white text-xs font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all whitespace-nowrap shadow-sm group"
          >
            <span>TANYA KONSELOR</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>

        </div>
      </div>
    </section>
  )
}