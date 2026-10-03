import Link from "next/link";
import Photo from "@/components/Photo";

const services = [
  { title: "Studi S1 - Bachelor", image: "/design/s1.png" },
  { title: "Studi S2 - Master", image: "/design/s2.png" },
  { title: "Kursus Bahasa Asing", image: "/design/kursus.png" },
  { title: "Studi S3 - Ph.D", image: "/design/s3.png" },
  { title: "Study Tour", image: "/design/tour.png" },
  { title: "Ausbildung", image: "/design/ausbildung.png", href: "/layanan/ausbildung" },
];

export default function LayananKamiPage() {
  return (
    <div>
      <Photo src="/design/hero-layanan.jpg" alt="Layanan Kami" className="block h-auto w-full" />
      <section className="mx-auto grid max-w-[1120px] grid-cols-1 gap-5 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const image = (
            <Photo src={service.image} alt={service.title} className="block h-auto w-full" />
          );
          if (service.href) {
            return (
              <Link key={service.title} href={service.href} className="block overflow-hidden rounded-[18px]">
                {image}
              </Link>
            );
          }
          return (
            <div key={service.title} className="overflow-hidden rounded-[18px]">
              {image}
            </div>
          );
        })}
      </section>
    </div>
  );
}
