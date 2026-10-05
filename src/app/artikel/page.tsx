import Link from "next/link";
import Photo from "@/components/Photo";

const detailHref = "/artikel/penting-cara-mudah-kuliah-luar-negeri-dengan-beasiswa";
const title = "Penting! Cara Mudah agar Bisa Kuliah di Luar Negeri dengan Beasiswa";
const date = "Selasa, 18 Feb 2020 12:01 WIB";

const featured = [
  { image: "/design/feat-1.png", title },
  { image: "/design/feat-2.png", title },
];

const latest = [
  "/design/list-1.png",
  "/design/list-2.png",
  "/design/list-3.png",
  "/design/list-4.png",
  "/design/list-5.png",
];

export default function ArtikelPage() {
  return (
    <div>
      <Link href={detailHref} className="block">
        <Photo src="/design/hero-artikel.jpg" alt={title} className="block h-auto w-full" />
      </Link>

      <section className="mx-auto grid max-w-205 grid-cols-1 gap-8 px-6 pt-12 sm:grid-cols-2">
        {featured.map((item) => (
          <Link key={item.image} href={detailHref} className="text-center">
            <Photo src={item.image} alt="" className="aspect-292/167 w-full rounded-[10px] object-cover" />
            <h2 className="mt-3 text-[14px] leading-snug font-medium text-[#4a4a4a]">{item.title}</h2>
          </Link>
        ))}
      </section>

      <div className="rule mt-12" />

      <section className="mx-auto max-w-205 px-6 pt-10 pb-6">
        <h2 className="text-[13px] font-medium tracking-[0.22em] text-[#4a4a4a] uppercase">
          Artikel Terbaru
        </h2>
        <div className="mt-6 space-y-5">
          {latest.map((image) => (
            <Link key={image} href={detailHref} className="flex gap-5">
              <Photo
                src={image}
                alt=""
                className="h-28 w-52.5 shrink-0 rounded-lg object-cover"
              />
              <div className="pt-1">
                <h3 className="text-[15px] leading-snug font-medium text-[#4a4a4a]">{title}</h3>
                <p className="mt-2 text-[12px] text-[#8a8a8a]">{date}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-[13px]">
          <span className="text-[#4a4a4a]" aria-hidden>
            ‹
          </span>
          <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-full font-semibold text-white">
            1
          </span>
          {[2, 3, 4, 5].map((page) => (
            <span
              key={page}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d5d5d5] bg-white font-medium text-black"
            >
              {page}
            </span>
          ))}
          <span className="text-[#4a4a4a]" aria-hidden>
            ›
          </span>
        </div>
      </section>
    </div>
  );
}
