
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos Gutiérrez",
    role: "Director de Innovación, TechSolve",
    content: "La implementación de AIAutomate ha revolucionado nuestra forma de procesar datos. Hemos reducido el tiempo de análisis en un 78% y mejorado la precisión significativamente.",
    avatar: "CG"
  },
  {
    name: "Ana López",
    role: "CEO, StartupVision",
    content: "Automate today, inspire tomorrow - este lema refleja perfectamente lo que AIAutomate ha hecho por nosotros. Transformaron nuestra operación y nos inspiraron a reimaginar nuestro negocio.",
    avatar: "AL"
  },
  {
    name: "Miguel Sánchez",
    role: "Director de Operaciones, IndustrialTech",
    content: "La transición a un modelo basado en IA ha sido fluida gracias al equipo de AIAutomate. Su compromiso con la excelencia y atención personalizada marca la diferencia.",
    avatar: "MS"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ai-dark">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas que han transformado su negocio con nuestras soluciones de IA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-6 text-ai-purple">
                    <svg width="45" height="36" className="fill-current">
                      <path d="M13.415.43c-2.523 0-4.75 1.173-6.682 3.52C4.8 6.298 3.833 9.15 3.833 12.507c0 3.356.967 6.208 2.9 8.556 1.932 2.347 4.16 3.52 6.682 3.52 2.522 0 4.75-1.173 6.682-3.52 1.932-2.348 2.9-5.2 2.9-8.556 0-3.357-.968-6.21-2.9-8.557C18.166 1.602 15.938.43 13.415.43zm30.166 0c-2.523 0-4.75 1.173-6.682 3.52-1.932 2.347-2.9 5.2-2.9 8.557 0 3.356.968 6.208 2.9 8.556 1.932 2.347 4.16 3.52 6.682 3.52 2.523 0 4.75-1.173 6.682-3.52 1.932-2.348 2.9-5.2 2.9-8.556 0-3.357-.968-6.21-2.9-8.557-1.932-2.347-4.16-3.52-6.682-3.52z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">{testimonial.content}</p>
                  <div className="flex items-center">
                    <Avatar className="mr-4">
                      <AvatarFallback className="bg-ai-purple text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-ai-dark">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
