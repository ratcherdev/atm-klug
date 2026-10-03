import Link from "next/link";
import Photo from "@/components/Photo";

export default function TentangKamiPage() {
  return (
    <div>
      <Photo src="/design/hero-tentang.jpg" alt="Tentang Kami" className="block h-auto w-full" />

      <section className="mx-auto max-w-[920px] px-8 pt-14 pb-6">
        <h2 className="text-[15px] font-medium tracking-[0.28em] text-[#4a4a4a] uppercase">Profil</h2>
        <p className="mt-4 max-w-[760px] text-[14.5px] leading-7 text-[#4a4a4a]">
          Didirikan pada tahun 2018, ini membuktikan bahwa INAKLUG merupakan konsultan
          pendidikan internasional yang berpengalaman, terbesar, terpercaya dan juga memiliki
          jam terbang tinggi untuk melayani para anak-anak muda Indonesia untuk menuntut ilmu
          di berbagai negara maju dunia.
        </p>
      </section>

      <section className="mx-auto grid max-w-[920px] grid-cols-1 gap-10 px-8 pt-8 pb-10 md:grid-cols-2">
        <article>
          <Photo src="/design/visi.png" alt="" className="h-[210px] w-full rounded-[12px] object-cover" />
          <h3 className="mt-5 text-[15px] font-medium tracking-[0.28em] text-[#4a4a4a] uppercase">Visi</h3>
          <p className="mt-3 text-[14px] leading-7 text-[#4a4a4a]">
            Membangun Sumber Daya Indonesia yang mempunyai daya saing tinggi, tangguh secara
            internasional untuk menghadapi persaingan di era globalisasi serta membangun karakter
            pemimpin indonesia masa depan yang tangguh, mandiri, dan profesional.
          </p>
        </article>
        <article>
          <Photo src="/design/misi.png" alt="" className="h-[210px] w-full rounded-[12px] object-cover" />
          <h3 className="mt-5 text-[15px] font-medium tracking-[0.28em] text-[#4a4a4a] uppercase">Misi</h3>
          <div className="mt-3 space-y-4 text-[14px] leading-7 text-[#4a4a4a]">
            <p>
              Memfasilitasi siswa Indonesia untuk mengenyam pendidikan di berbagai perguruan tinggi
              di lebih dari 25 negara maju di dunia dengan layanan yang profesional.
            </p>
            <p>
              Memberikan bantuan konsultasi terhadap siswa/i Indonesia dalam mempersiapkan studinya
              dari berbagai aspek, baik aspek sosial, budaya, maupun pendidikan.
            </p>
          </div>
        </article>
      </section>

      <div className="mx-auto max-w-[920px] px-8 pb-14">
        <Link
          href="/layanan-kami"
          className="inline-flex rounded-full bg-gradient-to-r from-[#6a2788] via-[#3d62c8] to-[#3aa4e4] p-[1.5px]"
        >
          <span className="rounded-full bg-white px-7 py-2.5 text-[12px] font-semibold tracking-[0.14em] text-[#4a4a4a] uppercase">
            Layanan Kami
          </span>
        </Link>
      </div>
    </div>
  );
}
