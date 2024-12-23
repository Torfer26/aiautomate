import { motion } from "framer-motion";
import { Brain, Cpu, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Cpu,
    title: "Automatización eficiente",
    description: "Optimiza tus procesos empresariales con soluciones IA avanzadas",
  },
  {
    icon: Brain,
    title: "Análisis basado en IA",
    description: "Obtén insights valiosos con análisis predictivo inteligente",
  },
  {
    icon: BarChart3,
    title: "Optimización de recursos",
    description: "Maximiza la eficiencia y reduce costos operativos",
  },
];

export const Benefits = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Beneficios principales
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre cómo nuestra tecnología puede transformar tu negocio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-ai-accent/10 rounded-xl flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-ai-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};