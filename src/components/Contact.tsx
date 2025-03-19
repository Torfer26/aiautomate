
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (response.error) {
        throw new Error(response.error.message || "Error al enviar el mensaje");
      }

      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ai-dark mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo AIAutomate puede transformar tu negocio
          </p>
          <p className="text-lg text-ai-purple font-medium mt-2">
            Automate today, inspire tomorrow
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <Card className="border-ai-purple/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-ai-dark">Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <Input
                    type="text"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full focus:border-ai-purple focus:ring-ai-purple"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full focus:border-ai-purple focus:ring-ai-purple"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="w-full min-h-[150px] focus:border-ai-purple focus:ring-ai-purple"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-ai-purple hover:bg-ai-purple-dark text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
