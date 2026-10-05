import Link from "next/link";

function OutlinePill({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex rounded-full bg-gradient-to-r from-[#6a2788] via-[#3d62c8] to-[#3aa4e4] p-[1.5px]"
    >
      <span className="rounded-full bg-white px-8 py-2.5 text-[12px] font-semibold tracking-[0.16em] text-[#4a4a4a] uppercase">
        {children}
      </span>
    </Link>
  );
}

export default function ContactFooter() {
  return (
    <footer>
      <div className="rule" />
      <div className="px-6 pt-16 pb-14 text-center">
        <h2 className="section-title">Hubungi Kami</h2>
        <div className="mx-auto mt-8 max-w-xl space-y-1.5 text-[14px] leading-relaxed text-[#4a4a4a]">
          <p className="font-semibold tracking-[0.18em] text-[#4a4a4a]">KANTOR PUSAT</p>
          <p>Gedung Ir. H. M. Suseno - Jl. R.P Soeroso No.6, Menteng, Jakarta Pusat</p>
          <p>Phone : (+62 21) 398 38706 - Fax : (+62 21) 316 1701</p>
          <p>Hotline : +6281519040071 / +62811998167</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/hubungi-kami#lokasi"
            className="brand-gradient rounded-full px-8 py-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-white"
          >
            Lokasi Kami
          </Link>
          <OutlinePill href="/hubungi-kami#pesan">Kirim Pesan</OutlinePill>
        </div>
      </div>
      <div className="brand-gradient px-6 py-5 text-center text-[13px] text-white">
        Copyright © 2020 - Inaklug Indonesia | Hak cipta dilindungi undang-undang
      </div>
    </footer>
  );
}
