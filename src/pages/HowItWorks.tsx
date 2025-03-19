
import { Helmet } from "react-helmet-async";
import { Process } from "@/components/Process";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>Proceso de Implementación de IA | AIAutomate</title>
        <meta name="description" content="Conoce nuestro proceso de implementación de soluciones de IA y automatización. Desde el análisis inicial hasta la optimización continua para tu empresa." />
        <link rel="canonical" href="https://aiautomate.es/how-it-works" />
      </Helmet>
      <main className="min-h-screen bg-ai-dark">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-4 left-4 z-50"
        >
          <Link to="/">
            <Button 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <Home className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </motion.div>
        <Process />
        <Footer />
      </main>
    </>
  );
};

export default HowItWorks;
