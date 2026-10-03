import Photo from "@/components/Photo";

export default function Hero() {
  return (
    <section className="relative">
      <Photo
        src="/design/hero.jpg"
        alt="Ingin kuliah dan berkarir di luar negeri"
        className="block h-auto w-full"
        priority
      />
      <a
        href="#tentang"
        aria-label="Selengkapnya"
        className="absolute top-[76%] left-[37%] h-[9%] w-[17%]"
      />
    </section>
  );
}
