"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const detail = "/artikel/penting-cara-mudah-kuliah-luar-negeri-dengan-beasiswa";

const pages = ["/", "/tentang-kami", "/artikel", detail, "/hubungi-kami"];

function neighbors(pathname: string) {
  if (pathname.startsWith("/layanan/ausbildung")) {
    return { prev: "/layanan-kami", next: "/artikel" };
  }
  if (pathname.startsWith("/layanan")) {
    return { prev: "/tentang-kami", next: "/artikel" };
  }

  let index = pages.indexOf(pathname);
  if (pathname.startsWith("/artikel/") && pathname !== "/artikel") index = pages.indexOf(detail);
  if (index < 0) index = 0;

  return {
    prev: pages[(index - 1 + pages.length) % pages.length],
    next: pages[(index + 1) % pages.length],
  };
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 md:h-8 md:w-8 text-white stroke-[2.5]"
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      {direction === "left" ? (
        <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export default function PageArrows() {
  const pathname = usePathname();
  const { prev, next } = neighbors(pathname);

  return (
    <>
      {/* Tombol Navigasi Kiri */}
      <Link
        href={prev}
        aria-label="Halaman sebelumnya"
        className="fixed top-1/2 left-0 z-50 flex h-32 w-36 -translate-y-1/2 translate-x-[-80%] items-center justify-end pr-4.5 rounded-full bg-black/40 text-white opacity-40 backdrop-blur-[2px] transition-all duration-300 ease-in-out hover:translate-x-[-70%] hover:bg-black/80 hover:opacity-100 focus:opacity-100 focus:outline-none"
      >
        <Chevron direction="left" />
      </Link>

      {/* Tombol Navigasi Kanan */}
      <Link
        href={next}
        aria-label="Halaman berikutnya"
        className="fixed top-1/2 right-0 z-50 flex h-32 w-36 -translate-y-1/2 translate-x-[80%] items-center justify-start pl-4.5 rounded-full bg-black/40 text-white opacity-40 backdrop-blur-[2px] transition-all duration-300 ease-in-out hover:translate-x-[70%] hover:bg-black/80 hover:opacity-100 focus:opacity-100 focus:outline-none"
      >
        <Chevron direction="right" />
      </Link>
    </>
  );
}