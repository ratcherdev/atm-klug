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
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" aria-hidden>
      {direction === "left" ? (
        <path d="M14.5 5.5 8 12l6.5 6.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9.5 5.5 16 12l-6.5 6.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export default function PageArrows() {
  const pathname = usePathname();
  const { prev, next } = neighbors(pathname);

  return (
    <>
      <Link
        href={prev}
        aria-label="Halaman sebelumnya"
        className="fixed top-1/2 left-0 z-40 flex h-24 w-24 -translate-x-[68%] -translate-y-1/2 items-center justify-end rounded-full bg-[#2a2a2a]/40 pr-4 text-white opacity-40 transition-all duration-200 hover:-translate-x-[18%] hover:bg-[#2a2a2a] hover:opacity-100"
      >
        <Chevron direction="left" />
      </Link>
      <Link
        href={next}
        aria-label="Halaman berikutnya"
        className="fixed top-1/2 right-0 z-40 flex h-24 w-24 translate-x-[68%] -translate-y-1/2 items-center justify-start rounded-full bg-[#2a2a2a]/40 pl-4 text-white opacity-40 transition-all duration-200 hover:translate-x-[18%] hover:bg-[#2a2a2a] hover:opacity-100"
      >
        <Chevron direction="right" />
      </Link>
    </>
  );
}
