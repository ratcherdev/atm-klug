import Image from 'next/image'
import Link from 'next/link'
import ContactFooter from '@/components/layouts/ContactFooter'

export default function TentangKamiPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO BANNER TENTANG KAMI */}
      <section className="relative w-full h-72 md:h-122.5 flex items-end">
        <Image
          src="/assets/img/about-hero.jpg"
          alt="Tentang Kami Header"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Title Box Overlay */}
        <div className="relative z-10 max-w-6xl w-full mx-auto px-6 pb-8">
          <div className="inline-block px-8 py-4 text-white ">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider uppercase">
              TENTANG KAMI
            </h1>
          </div>
        </div>
      </section>

      {/* 2. SECTION PROFIL */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold tracking-widest text-gray-800 uppercase mb-4">
            PROFIL
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Didirikan pada tahun 2018, ini membuktikan bahwa INAKLUG merupakan konsultan pendidikan internasional yang berpengalaman, terbesar, terpercaya dan juga memiliki jam terbang tinggi untuk melayani para anak-anak muda Indonesia untuk menuntut ilmu di berbagai negara maju dunia.
          </p>
        </div>
      </section>

      {/* 3. SECTION VISI & MISI */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            
            {/* Kolom Visi */}
            <div className="flex flex-col">
              <div className="relative w-full h-56 md:h-64 rounded-xl overflow-hidden shadow-sm mb-6">
                <Image
                  src="/assets/img/visi.png"
                  alt="Visi Inaklug"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold tracking-widest text-gray-800 uppercase mb-3">
                VISI
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Membangun Sumber Daya Indonesia yang mempunyai daya saing tinggi, tangguh secara internasional untuk menghadapi persaingan di era globalisasi serta membangun karakter pemimpin indonesia masa depan yang tangguh, mandiri, dan profesional.
              </p>
            </div>

            {/* Kolom Misi */}
            <div className="flex flex-col">
              <div className="relative w-full h-56 md:h-64 rounded-xl overflow-hidden shadow-sm mb-6">
                <Image
                  src="/assets/img/misi.png"
                  alt="Misi Inaklug"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold tracking-widest text-gray-800 uppercase mb-3">
                MISI
              </h3>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Memfasilitasi siswa Indonesia untuk mengenyam pendidikan di berbagai perguruan tinggi di lebih dari 25 negara maju di dunia dengan layanan yang profesional.
                </p>
                <p>
                  Memberikan bantuan konsultasi terhadap siswa/i Indonesia dalam mempersiapkan studinya dari berbagai aspek, baik aspek sosial, budaya, maupun pendidikan.
                </p>
              </div>
            </div>

          </div>

          {/* Tombol LAYANAN KAMI */}
          <div className="mt-12">
            <Link
              href="/layanan-kami"
              className="inline-block border-2 border-gray-400 hover:border-gray-700 text-gray-600 hover:text-gray-900 text-xs font-semibold px-8 py-2.5 rounded-full uppercase tracking-wider transition-all"
            >
              Layanan Kami
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FOOTER HUBUNGI KAMI */}
      <ContactFooter />
    </main>
  )
}