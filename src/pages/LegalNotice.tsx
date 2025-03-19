import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const LegalNotice = () => {
  return (
    <>
      <Helmet>
        <title>Aviso Legal | AIAutomate</title>
        <meta name="description" content="Información legal sobre AIAutomate, soluciones de IA y automatización para empresas. Consulta nuestros términos y condiciones." />
        <link rel="canonical" href="https://aiautomate.es/aviso-legal" />
      </Helmet>
      <div className="min-h-screen bg-white py-16 relative">
        <div className="absolute top-4 left-4">
          <Link to="/">
            <Button 
              variant="outline" 
              className="bg-ai-dark/10 hover:bg-ai-dark/20 text-ai-dark border-ai-dark/20"
            >
              <Home className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Aviso Legal</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Datos identificativos</h2>
            <p className="mb-4">
              En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Titular: AIAutomate</li>
              <li>Correo electrónico: contact@aiautomate.es</li>
              <li>Domicilio: Madrid, España</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Condiciones generales de uso</h2>
            <p className="mb-4">
              El presente aviso legal regula el uso y utilización del sitio web AIAutomate, al que se accede a través de la dirección web www.aiautomate.es.
            </p>
            <p className="mb-4">
              La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Uso del portal</h2>
            <p className="mb-4">
              www.aiautomate.es proporciona acceso a información y contenidos sobre servicios de automatización e inteligencia artificial. El Usuario se compromete a hacer un uso adecuado de los contenidos y servicios que AIAutomate ofrece a través de su portal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Responsabilidad</h2>
            <p className="mb-4">
              AIAutomate no se hace responsable de los daños y perjuicios que se puedan derivar de interferencias, omisiones, interrupciones, virus informáticos, averías telefónicas o desconexiones en el funcionamiento operativo de este sistema electrónico, motivadas por causas ajenas a AIAutomate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Legislación aplicable</h2>
            <p className="mb-4">
              El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso de esta web, las partes se someten a los Juzgados y Tribunales de Madrid, España.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default LegalNotice;
