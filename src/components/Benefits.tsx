
import { motion } from "framer-motion";
import { Brain, Cpu, BarChart3, Shield, Zap, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Brain,
    title: "IA Avanzada",
    description: "Algoritmos de última generación que aprenden y se adaptan a tus necesidades específicas",
  },
  {
    icon: Cpu,
    title: "Automatización Inteligente",
    description: "Optimiza procesos complejos con soluciones automatizadas que ahorran tiempo y recursos",
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Protección de datos de nivel empresarial con encriptación avanzada",
  },
  {
    icon: BarChart3,
    title: "Análisis Predictivo",
    description: "Toma decisiones informadas con análisis de datos en tiempo real",
  },
  {
    icon: Zap,
    title: "Alto Rendimiento",
    description: "Procesamiento ultrarrápido para resultados instantáneos",
  },
  {
    icon: Clock,
    title: "24/7 Disponibilidad",
    description: "Servicio ininterrumpido con soporte técnico continuo",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-ai-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Link to="/benefits" className="inline-block hover:opacity-80 transition-opacity">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple">
              Beneficios Transformadores
            </h2>
          </Link>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre cómo nuestra tecnología de IA puede revolucionar tu empresa y llevarla al siguiente nivel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-ai-purple/20"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-ai-purple to-ai-purple-light rounded-xl flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
