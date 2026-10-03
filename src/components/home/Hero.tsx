import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-5rem)] min-h-137.5 flex items-end">
      {/* 1. BACKGROUND IMAGE */}
      <Image
        src="/assets/img/hero-bg.png" // Simpan foto gedung di folder public/images/
        alt="Gedung Klasik Luar Negeri"
        fill
        priority
        className=" object-center"
      />

      {/* 2. OVERLAY TIPIS (Opsional: menjaga kontras gambar) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* 3. KOTAK OVERLAY TRANSPARAN (Posisi Kiri Bawah) */}
      <div className="relative z-10 max-w-2xl w-full mx-28 px-6 pb-18 md:pb-16">
        <div className="max-w-2xl bg-linear-to-r from-[#200A49]/90 via-[#1E40AF]/80 to-[#0284C7]/75 backdrop-blur-sm p-6 md:p-8 rounded-sm shadow-2xl border border-white/10 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Judul Utama */}
          <h1 className="text-xl font-extrabold tracking-wide uppercase leading-snug">
            Ingin Kuliah dan Berkarir <br className="hidden sm:block" />
            di Luar Negeri ?
          </h1>

          {/* Tombol Selengkapnya */}
          <button className="self-start md:self-auto border-2 border-white/80 hover:border-white bg-white/10 hover:bg-white/20 text-white text-[15px] font-semibold px-6 py-2.5 rounded-full flex items-center gap-4 transition-all group whitespace-nowrap">
            <span>SELENGKAPNYA</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
