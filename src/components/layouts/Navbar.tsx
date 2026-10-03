"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/layanan-kami", label: "Layanan Kami" },
  { href: "/artikel", label: "Artikel" },
  { href: "/hubungi-kami", label: "Hubungi Kami" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/layanan-kami") {
    return pathname.startsWith("/layanan");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="brand-gradient sticky top-0 z-50 text-white">
      <div className="flex h-20 items-center gap-6 px-8 lg:px-10">
        <Link href="/" className="shrink-0 text-[34px] leading-none font-medium tracking-wide">
          <span className="inline-block border-b-[2.5px] border-white pb-px">klu</span>g
        </Link>

        <nav className="ml-6 hidden items-center gap-8 text-[14.5px] font-normal md:flex">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "border-b border-white pb-0.5"
                    : "pb-0.5 opacity-95 hover:opacity-100"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-8 lg:flex">
          <label className="relative block w-[190px]">
            <span className="sr-only">Ketik pencarian</span>
            <svg
              className="pointer-events-none absolute top-1/2 left-0 h-4 w-4 -translate-y-1/2 text-white/85"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden
            >
              <circle cx="11" cy="11" r="6.5" strokeWidth="1.7" />
              <path d="M16 16.5 20.5 21" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              placeholder="Ketik pencarian"
              className="w-full border-b border-white/80 bg-transparent py-1.5 pr-2 pl-6 text-[13px] text-white placeholder:text-white/75 focus:border-white focus:outline-none"
            />
          </label>

          <Link
            href="/hubungi-kami"
            className="rounded-full bg-[#195395] px-5 py-2.5 text-[12px] font-semibold tracking-wide whitespace-nowrap text-white shadow-sm"
          >
            DAFTAR ON-LINE
          </Link>
        </div>
      </div>

      <nav className="flex gap-4 overflow-x-auto px-6 pb-3 text-[13px] md:hidden">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="shrink-0 whitespace-nowrap">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
