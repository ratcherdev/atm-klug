import Link from 'next/link'

export default function ContactFooter() {
  return (
    <footer className="bg-white pt-16 border-t border-gray-100">
      {/* 1. SECTION HUBUNGI KAMI */}
      <div className="max-w-2xl mx-auto text-center px-6 pb-16">
        <h2 className="text-xl md:text-2xl font-bold tracking-widest text-gray-800 uppercase mb-8">
          HUBUNGI KAMI
        </h2>

        <div className="space-y-3 text-gray-600 text-sm md:text-base leading-relaxed">
          <p className="font-bold text-gray-800 tracking-wider">KANTOR PUSAT</p>
          <p>
            Gedung D, Jl. M. Saidi No.1, RT.1/RW.2, Petukangan Selatan, <br className="hidden sm:block" />
            Pesanggrahan, Jakarta Selatan
          </p>
          <p>
            Phone: (+62) 812-3456-7890 / (+62) 21-1234-5678 <br />
            Hotline: (+62) 811-1234-5678 (WA Only)
          </p>
        </div>

        {/* Tombol Aksi (Lokasi Kami & Kirim Pesan) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            href="/lokasi"
            className="w-full sm:w-auto bg-linear-to-r from-[#200A49]/90 via-[#1E40AF]/80 to-[#0284C7]/75 hover:opacity-90 text-white text-xs font-semibold px-8 py-3 rounded-full uppercase tracking-wider transition-all text-center shadow-md"
          >
            Lokasi Kami
          </Link>

          <Link
            href="/hubungi-kami"
            className="w-full sm:w-auto border-2 border-gray-400 hover:border-gray-700 text-gray-600 hover:text-gray-900 text-xs font-semibold px-8 py-3 rounded-full uppercase tracking-wider transition-all text-center"
          >
            Kirim Pesan
          </Link>
        </div>
      </div>

      {/* 2. BOTTOM BAR COPYRIGHT */}
      <div className="bg-linear-to-r from-[#200A49]/90 via-[#1E40AF]/80 to-[#0284C7]/75 text-white text-xs text-center py-4 px-6 border-t border-white/10">
        <p className="opacity-80">
          Copyright © {new Date().getFullYear()} - Klug. All rights reserved.
        </p>
      </div>
    </footer>
  )
}