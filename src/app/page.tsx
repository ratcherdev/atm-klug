import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Partners from "@/components/home/Partners";
import CtaBanner from "@/components/home/CtaBanner";
import Articles from "@/components/home/Articles";
import ContactFooter from "@/components/layouts/ContactFooter";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Partners />
      <CtaBanner />
      <Articles />
      <ContactFooter />
    </div>
  );
}
