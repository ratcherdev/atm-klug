import Link from "next/link";
import Photo from "@/components/Photo";

const articles = [
  {
    title: "5 Fakta yang Harus Kamu Ketahui Sebelum Studi ke Jerman",
    image: "/design/article-1.png",
    href: "/artikel/penting-cara-mudah-kuliah-luar-negeri-dengan-beasiswa",
  },
  {
    title: "Uni Eropa Menghadapi Virus Korona",
    image: "/design/article-2.png",
    href: "/artikel",
  },
  {
    title: "Belajar Bahasa Jerman Bersama Goethe Institut",
    image: "/design/article-3.png",
    href: "/artikel",
  },
  {
    title: "Apa Itu Gates Cambridge? Yuk Cari Tahu",
    image: "/design/article-4.png",
    href: "/artikel",
  },
];

export default function Articles() {
  return (
    <section className="px-6 pt-16 pb-8">
      <h2 className="section-title">Artikel Terbaru</h2>
      <div className="mx-auto mt-10 grid max-w-[760px] grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
        {articles.map((article) => (
          <Link key={article.title} href={article.href} className="group text-center">
            <Photo
              src={article.image}
              alt=""
              className="aspect-[720/390] w-full rounded-[6px] object-cover"
            />
            <h3 className="mt-4 text-[15px] leading-snug font-medium text-[#4a4a4a] group-hover:text-black">
              {article.title}
            </h3>
          </Link>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/artikel"
          className="inline-flex rounded-full bg-gradient-to-r from-[#6a2788] via-[#3d62c8] to-[#3aa4e4] p-[1.5px]"
        >
          <span className="rounded-full bg-white px-8 text-[#4a4a4a] py-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase">
            Artikel Lainnya
          </span>
        </Link>
      </div>
    </section>
  );
}
