
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const blogPosts = [
  {
    title: "5 Formas en que la IA está Transformando la Productividad Empresarial",
    excerpt: "Descubre cómo la automatización inteligente está revolucionando los procesos empresariales y aumentando la eficiencia operativa.",
    image: "/lovable-uploads/53eb47cd-4f2f-483c-9ddb-bbe66188d2e0.png",
    slug: "transformando-productividad-empresarial-con-ia",
    date: "15 Jun 2023"
  },
  {
    title: "Análisis Predictivo: El Futuro de la Toma de Decisiones Empresariales",
    excerpt: "Cómo los algoritmos de IA avanzados están permitiendo a las empresas anticiparse a tendencias y optimizar resultados.",
    image: "/lovable-uploads/53eb47cd-4f2f-483c-9ddb-bbe66188d2e0.png",
    slug: "analisis-predictivo-futuro-decisiones-empresariales",
    date: "22 May 2023"
  },
  {
    title: "Seguridad y Automatización: Protegiendo Datos Empresariales en la Era Digital",
    excerpt: "Estrategias avanzadas para mantener la integridad y confidencialidad de datos mientras se implementan soluciones de automatización.",
    image: "/lovable-uploads/53eb47cd-4f2f-483c-9ddb-bbe66188d2e0.png",
    slug: "seguridad-automatizacion-proteccion-datos-empresariales",
    date: "10 Apr 2023"
  }
];

export const BlogPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ai-dark">
            Últimos Artículos sobre IA y Automatización
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora las últimas tendencias y estrategias en inteligencia artificial y automatización empresarial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <span className="text-sm text-ai-purple font-medium">{post.date}</span>
                <h3 className="text-xl font-bold mb-3 text-ai-dark mt-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Button 
                  className="bg-ai-purple hover:bg-ai-purple-dark text-white w-full"
                >
                  Leer artículo
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
