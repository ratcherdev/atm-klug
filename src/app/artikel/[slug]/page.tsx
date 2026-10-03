import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";

const slug = "penting-cara-mudah-kuliah-luar-negeri-dengan-beasiswa";
const title = "Penting! Cara Mudah agar Bisa Kuliah di Luar Negeri dengan Beasiswa";

const paragraphs = [
  "Saat ini mahasiswa Indonesia sudah sangat banyak yang kuliah di luar negeri. Bahkan sebelum adanya beasiswa dari Lembaga Pengelola Dana Pendidikan (LPDP), sudah tidak terhitung warga negara Indonesia yang berkuliah di luar negeri.",
  "Lembaga Pengelola Dana Pendidikan atau LPDP adalah beasiswa pemerintah Indonesia yang berada di bawah Kementerian Keuangan yang mengelola dana pendidikan sebagaimana amanat PMK Nomor 252 tahun 2010.",
  "LPDP kemudian ditetapkan sebagai sebuah lembaga berbentuk Badan Layanan Umum pada 30 Januari 2012 setelah disahkannya PMK Nomor 18 tahun 2012. Dengan adanya LPDP, minat masyarakat Indonesia untuk melanjutkan studi ke luar negeri semakin tinggi.",
  "Selain beasiswa dari pemerintah Indonesia, sebenarnya lembaga-lembaga swasta maupun dari negara lain juga banyak yang menawarkan beasiswa untuk pelajar Indonesia. Bahkan perusahaan-perusahaan juga beberapa kali menyediakan beasiswa full untuk pelajar Indonesia.",
  "Berikut ada beberapa tahapan yang harus kita siapkan untuk menempuh studi di luar negeri, syukur-syukur bisa mendapatkan beasiswa full.",
  "Pertama, Motivasi yang Kuat. Ada banyak sekali orang yang pada akhirnya memutuskan untuk kuliah ke luar negeri. Tak bisa dipungkiri jika minat untuk kuliah di luar negeri memang terbilang tinggi, namun hal ini tentu tidak cukup untuk dijadikan alasan melakukan hal yang sama.",
  "Sangat penting untuk memiliki alasan yang kuat, sebelum akhirnya memutuskan untuk kuliah di luar negeri. Selain itu, proses penyesuaian diri dan juga belajar di sana bisa saja tidak mudah, sehingga perlu juga memiliki motivasi yang kuat.",
  "Kedua, Rencana yang Matang. Jika akhirnya kita memiliki keinginan yang kuat untuk kuliah di luar negeri, maka secara otomatis kita harus mengatur segala sesuatunya juga menjadi lebih besar. Seperti misalnya menentukan negara tujuan, jurusan yang akan diambil, melihat biaya hidup di sana, dan berbagai hal lainnya perlu diketahui sejak awal. Cara yang paling efektif adalah dengan mengumpulkan informasi-informasi yang akurat, sehingga memiliki gambaran yang lebih jelas terkait dengan studi kita.",
  "Ketiga, Mengupayakan Beasiswa. Biaya kuliah di luar negeri tentu tidak murah, apalagi jika ditambah dengan biaya hidupnya yang rata-rata jauh lebih tinggi dari biaya hidup di Indonesia. Untuk mengatasi masalah biaya ini, kita bisa mengupayakan untuk mendapatkan program beasiswa yang kini sudah lebih mudah diakses, terutama untuk orang yang memiliki prestasi belajar yang baik.",
  "Ada banyak program beasiswa yang bisa dijadikan pertimbangan, baik itu yang diberikan oleh pihak swasta ataupun yang disediakan oleh pihak pemerintah. Cari dan ketahui seleksinya sejak awal, agar bisa memangkas biaya kuliah.",
  "Keempat, Belajar dan Tes Bahasa. Menguasai bahasa yang digunakan di negara tujuan dan juga Bahasa Inggris merupakan poin yang sangat wajib serta tak boleh ditinggalkan. Mulailah untuk mempersiapkan diri dan belajar bahasa ini sejak sekarang, agar kelak kita tidak terkendala dalam berkomunikasi dan juga belajar. Ikuti juga tes TOEFL untuk mengetahui kemampuan Bahasa Inggris yang kita miliki.",
];

export default async function ArtikelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: current } = await params;
  if (current !== slug) notFound();

  return (
    <article className="px-6 pt-16 pb-8">
      <p className="text-center text-[13px] text-[#8a8a8a]">Selasa, 18 Feb 2020 12:01 WIB</p>
      <Photo
        src="/design/detail-hero.jpg"
        alt={title}
        className="mx-auto mt-8 block h-auto w-full max-w-[860px]"
      />
      <div className="mx-auto mt-10 max-w-[760px] space-y-6 text-[14.5px] leading-8 text-[#4a4a4a]">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <div className="rule mt-14" />

      <section className="mx-auto max-w-[820px] pt-10">
        <h2 className="text-[13px] font-medium tracking-[0.2em] text-[#4a4a4a] uppercase">
          Artikel Terkait
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {["/design/feat-1.png", "/design/feat-2.png"].map((image) => (
            <Link key={image} href={`/artikel/${slug}`} className="text-left">
              <Photo src={image} alt="" className="aspect-[292/167] w-full rounded-[10px] object-cover" />
              <h3 className="mt-3 text-[14px] leading-snug font-medium text-[#4a4a4a]">{title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
