
import { motion } from "framer-motion";
import { Search, Cpu, Zap, ArrowRight, Settings, ChartBar } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Search,
    title: "Análisis Inicial",
    description: "Evaluamos tus necesidades específicas y objetivos empresariales para crear una solución personalizada",
  },
  {
    icon: Settings,
    title: "Configuración IA",
    description: "Implementamos y configuramos algoritmos de IA adaptados a tus procesos existentes",
  },
  {
    icon: Cpu,
    title: "Integración",
    description: "Conectamos perfectamente nuestras soluciones con tus sistemas actuales",
  },
  {
    icon: ChartBar,
    title: "Optimización",
    description: "Monitorizamos y ajustamos continuamente para maximizar el rendimiento",
  },
  {
    icon: Zap,
    title: "Resultados",
    description: "Observa mejoras significativas en eficiencia y productividad",
  },
];

export const Process = () => {
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
          <Link to="/how-it-works" className="inline-block hover:opacity-80 transition-opacity">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple">
              Proceso de Implementación
            </h2>
          </Link>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un enfoque estructurado y eficiente para transformar tu empresa con IA
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-center mb-12 last:mb-0"
            >
              <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-ai-purple to-ai-purple-light rounded-2xl flex items-center justify-center">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              
              <div className="ml-6 flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute -bottom-8 left-10 transform">
                  <ArrowRight className="w-6 h-6 text-ai-purple" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
