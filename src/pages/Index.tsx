import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;