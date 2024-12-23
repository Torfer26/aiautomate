import { motion } from "framer-motion";
import { Search, Cpu, Zap } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Analizamos tus procesos",
    description: "Evaluamos tus flujos de trabajo actuales",
  },
  {
    icon: Cpu,
    title: "Integramos IA personalizada",
    description: "Desarrollamos soluciones adaptadas a tus necesidades",
  },
  {
    icon: Zap,
    title: "Automatizamos y optimizamos",
    description: "Implementamos y mejoramos continuamente",
  },
];

export const Process = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cómo funciona
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un proceso simple y efectivo para transformar tu empresa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-ai-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-ai-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};