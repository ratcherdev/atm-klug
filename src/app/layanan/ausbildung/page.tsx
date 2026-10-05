import Photo from "@/components/Photo";

const programs = [
  "Perawat",
  "Perhotelan",
  "Guru / TK",
  "Pariwisata",
  "Otomotif",
  "Marketing",
  "Restoran",
  "Perkebunan",
  "Perhutanan",
  "Design Grafik",
];

export default function AusbildungPage() {
  return (
    <div>
      <Photo src="/design/hero-ausbildung.jpg" alt="Ausbildung" className="block h-auto w-full" />
      <article className="mx-auto max-w-215 px-8 pt-16 pb-12">
        <h2 className="text-center text-[18px] font-semibold tracking-[0.22em] text-[#4a4a4a] uppercase">
          Apa itu Ausbildung?
        </h2>
        <p className="mt-8 text-[14.5px] leading-8 text-[#4a4a4a]">
          Sistem pendidikan kejuruan Jerman dinamakan &quot;duale Ausbildung&quot;, di kalangan
          internasional disebut sebagai &quot;dual system&quot;. Prinsip pendidikannya adalah, para
          pelajar langsung belajar praktek di perusahaan. Ausbildung memiliki sistem yang hampir
          sama dengan program Strata 1 Duale Studium di Jerman. Dalam program yang berlangsung
          sekitar 3 tahun, Anda akan kuliah sambil bekerja. Anda akan bekerja selama 3 hari dan
          belajar selama 2 hari di sekolah (Berufsschule). Ada banyak pilihan Ausbildung di Jerman,
          mulai dari:
        </p>
        <ul className="mt-6 space-y-1.5 text-[14.5px] text-[#4a4a4a]">
          {programs.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <div className="mt-8 space-y-5 text-[14.5px] leading-7 text-[#4a4a4a]">
          <p>
            <span className="text-[#4a4a4a]">Partner With:</span>
            <br />
            Europäisches Studienkolleg der Wirtschaft (ESKW), Magdeburg, Jerman
          </p>
          <p>
            <span className="text-[#4a4a4a]">RSVP:</span>
            <br />
            081512040071 | 08111998167 | 08112999155
          </p>
          <p>
            <span className="text-[#4a4a4a]">Online Registration:</span>
            <br />
            <a
              href="https://tinyurl.com/ausbildungdijerman"
              className="underline decoration-white/40 underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              https://tinyurl.com/ausbildungdijerman
            </a>
          </p>
        </div>
      </article>
    </div>
  );
}
