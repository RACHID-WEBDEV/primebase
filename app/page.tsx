import CTA from "@/components/CTA";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonies from "@/components/Testimonies";

export default function Home() {
  return (
    <>
      <main className="mb-40">
        <Hero />
        <Feature />
        <Services />
        <Testimonies />
        <CTA />
      </main>
    </>
  );
}
