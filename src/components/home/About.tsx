export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white text-center px-6">
      <div className="max-w-4xl mx-auto">
        {/* Judul Section */}
        <h2 className="text-xl md:text-2xl font-bold tracking-widest text-gray-800 uppercase mb-6">
          TENTANG KAMI
        </h2>

        {/* Deskripsi Singkat */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed md:leading-loose font-normal">
          KLUG adalah Konsultan Pendidikan Internasional di Indonesia yang sudah
          memberangkatkan lebih dari 3000 mahasiswa Indonesia untuk kuliah, bekerja,
          serta bermukim di negara-negara maju di dunia.
        </p>
      </div>
    </section>
  )
}