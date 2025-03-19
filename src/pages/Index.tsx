
import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Benefits } from "@/components/Benefits";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
