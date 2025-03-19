
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const blogPosts = [
  {
    title: "Transformación Inteligente: Casos de éxito al integrar IA en pequeñas empresas",
    excerpt: "Descubre cómo pymes de diversos sectores han implementado soluciones de IA asequibles para optimizar operaciones, mejorar la atención al cliente y aumentar sus ventas.",
    image: "/lovable-uploads/f40ccbac-2dd6-41ea-a9fe-ab9591eafab5.png",
    source: "Columbia.co.cr",
    url: "https://columbia.co.cr/transformacion-inteligente-casos-de-exito-al-integrar-inteligencia-artificial-en-pequenas-empresas/",
    date: "15 Jun 2023"
  },
  {
    title: "Implementa la IA en tu PYME sin impactar el presupuesto",
    excerpt: "Estrategias prácticas para integrar herramientas de inteligencia artificial en pequeñas y medianas empresas con recursos limitados, maximizando el retorno de inversión.",
    image: "/lovable-uploads/c83c0486-e426-4594-ab18-ed992fa26643.png",
    source: "Blog.Popular.com",
    url: "https://blog.popular.com/implementa-la-ia-en-tu-pyme-sin-impactar-el-presupuesto/",
    date: "22 May 2023"
  },
  {
    title: "Impulsando la innovación en PYMEs con estrategias de automatización de procesos y IA",
    excerpt: "Análisis de metodologías efectivas para implementar automatización inteligente en la cadena de suministro y operaciones clave de pequeñas empresas manufactureras.",
    image: "/lovable-uploads/53eb47cd-4f2f-483c-9ddb-bbe66188d2e0.png",
    source: "GlobalAnalytica.org",
    url: "https://globalanalytica.org/impulsando-la-innovacion-en-pymes-con-estrategias-de-automatizacion-de-procesos-y-ia/",
    date: "10 Apr 2023"
  }
];

export const BlogPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ai-dark">
            Artículos Recientes sobre IA y PYMEs
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-6">
              La IA ya no es exclusiva de las grandes corporaciones. 📊 Descubre cómo las pymes 
              están adoptando la IA para automatizar sus procesos clave y lograr grandes resultados.
            </p>
            <p className="text-lg text-gray-600">
              Desde consejos para implementar IA con bajo presupuesto hasta historias de pequeñas empresas 
              que aumentaron sus ventas, optimizaron operaciones y mejoraron la atención al cliente 
              gracias a la automatización inteligente. 🚀
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-52 object-cover object-center"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-ai-purple font-medium">{post.date}</span>
                  <span className="text-xs font-semibold bg-purple-100 text-ai-purple-dark px-2 py-1 rounded-full">
                    {post.source}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-ai-dark line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
                <a 
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center w-full bg-ai-purple hover:bg-ai-purple-dark text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Leer artículo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-500 italic mb-6">
            Prepárate para llevar la eficiencia y la innovación de tu negocio al siguiente nivel con estas 
            lecturas imprescindibles sobre IA en pymes. 💡
          </p>
          <Button 
            className="bg-ai-dark hover:bg-ai-purple text-white px-6 py-3 text-lg"
          >
            Explorar más recursos
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
