import Photo from "@/components/Photo";

const partners = [
  { name: "424 Aviation", logo: "/design/partner-1.png" },
  { name: "St. Andrew's College", logo: "/design/partner-2.png" },
  { name: "HTW Berlin", logo: "/design/partner-3.png" },
  { name: "Study Group", logo: "/design/partner-4.png" },
];

export default function Partners() {
  return (
    <section className="px-6 pt-16 pb-4">
      <h2 className="section-title">Mitra Kami</h2>
      <div className="mx-auto mt-10 grid max-w-[920px] grid-cols-2 gap-5 sm:grid-cols-4">
        {partners.map((partner) => (
          <Photo
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
            className="h-[114px] w-full rounded-[12px] object-cover"
          />
        ))}
      </div>
    </section>
  );
}
