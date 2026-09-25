import Hero from "@/components/Hero";
import Method from "@/components/Method";
import Studio from "@/components/Studio";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Method />
      <Studio />
      <Values />
      <Services />
      <Clients />
      <Footer />
    </main>
  );
}
