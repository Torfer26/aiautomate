import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Calendar } from "./ui/calendar";
import { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export const Hero = () => {
  const [date, setDate] = useState<Date>();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      // Aquí podrías implementar el envío del formulario a tu backend
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ai-dark text-white py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ai-dark/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ai-accent/20 via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img
              src="/lovable-uploads/c83c0486-e426-4594-ab18-ed992fa26643.png"
              alt="AIAutomate Logo"
              className="h-64 md:h-80 mx-auto mb-8"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          >
            Revoluciona tus procesos con IA
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            Automatización inteligente para empresas del futuro
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white rounded-full px-8 py-6 text-lg min-w-[250px]"
                >
                  Agenda una demostración
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Agenda tu demostración</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateSelect}
                    className="rounded-md border"
                    locale={es}
                    disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                  />
                  {date && (
                    <p className="text-center text-sm text-gray-500">
                      Has seleccionado: {format(date, "PPP", { locale: es })}
                    </p>
                  )}
                  {showSuccess && (
                    <p className="text-center text-green-500">
                      ¡Solicitud enviada! Te contactaremos pronto.
                    </p>
                  )}
                </div>
              </DialogContent>
            </Dialog>
            <Link to="/benefits">
              <Button
                size="lg"
                className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white rounded-full px-8 py-6 text-lg min-w-[250px]"
              >
                Beneficios Transformadores
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button
                size="lg"
                className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white rounded-full px-8 py-6 text-lg min-w-[250px]"
              >
                Proceso de Implementación
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};