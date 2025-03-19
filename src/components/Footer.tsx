
import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-ai-dark py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/lovable-uploads/53eb47cd-4f2f-483c-9ddb-bbe66188d2e0.png"
              alt="AIAutomate Logo"
              className="h-12 mb-4"
            />
            <p className="text-gray-300 max-w-sm">
              Transformando empresas con soluciones de IA inteligentes y
              automatización avanzada.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-ai-purple mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-ai-purple transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/benefits"
                  className="text-gray-300 hover:text-ai-purple transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-gray-300 hover:text-ai-purple transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-ai-purple mb-4">Contacto</h3>
            <p className="text-gray-300 mb-4">contact@aiautomate.es</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-ai-purple transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ai-purple transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ai-purple transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <Link to="/aviso-legal" className="hover:text-ai-purple transition-colors">
              Aviso Legal
            </Link>
            <Link to="/politica-privacidad" className="hover:text-ai-purple transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/politica-cookies" className="hover:text-ai-purple transition-colors">
              Política de Cookies
            </Link>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            © {new Date().getFullYear()} AIAutomate. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
