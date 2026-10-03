import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-linear-to-r from-[#200A49]/90 via-[#1E40AF]/80 to-[#0284C7]/75  text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-1 h-21 flex items-center justify-between gap-4">
        {/* 1. LOGO "klug" */}
        <Link href="/" className="text-3xl font-extrabold tracking-wider hover:opacity-90 transition-opacity">
          klug
        </Link>

        {/* 2. MENU NAVIGASI (Tengah) */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium">
          <Link href="/" className="hover:text-blue-300 transition-colors">
            Home
          </Link>
          <Link href="/tentang-kami" className="hover:text-blue-300 transition-colors">
            Tentang Kami
          </Link>
          <Link href="/layanan-kami" className="hover:text-blue-300 transition-colors">
            Layanan Kami
          </Link>
          <Link href="/artikel" className="hover:text-blue-300 transition-colors">
            Artikel
          </Link>
          <Link href="/hubungi-kami" className="hover:text-blue-300 transition-colors">
            Hubungi Kami
          </Link>
        </nav>

        {/* 3. SEARCH & TOMBOL DAFTAR (Kanan) */}
        <div className="flex items-center gap-14">
          {/* Input Pencarian */}
          <div className="relative hidden lg:block">
            <svg className="w-5 h-5 absolute top-1/2 -translate-y-1/2 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Ketik pencarian" className="bg-transparent text-[13px] text-white placeholder-white/60 pl-9 pr-4 py-2 border-b border-white/50 focus:border-white focus:outline-none w-40 lg:w-48 transition-all" />
          </div>

          {/* Tombol Kapsul "DAFTAR ON-LINE" */}
          <Link href="/daftar" className="bg-[#2B6CB0] hover:bg-[#2C5282] text-white text-[13px] font-semibold px-6 py-2.5 rounded-full uppercase tracking-wider transition-all shadow-md">
            Daftar On-Line
          </Link>
        </div>
      </div>
    </header>
  );
}
