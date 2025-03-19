
import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Benefits } from "@/components/Benefits";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { BlogPreview } from "@/components/BlogPreview";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AIAutomate | Soluciones de Automatización Inteligente con IA para Empresas</title>
        <meta name="description" content="Transformamos empresas con soluciones de IA inteligente y automatización avanzada. Algoritmos avanzados, análisis predictivo y seguridad de nivel empresarial." />
        <link rel="canonical" href="https://aiautomate.es" />
      </Helmet>
      <main className="min-h-screen bg-white">
        <Hero />
        <Benefits />
        <Process />
        <Testimonials />
        <BlogPreview />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
