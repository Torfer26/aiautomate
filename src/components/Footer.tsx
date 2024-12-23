import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/lovable-uploads/f40ccbac-2dd6-41ea-a9fe-ab9591eafab5.png"
              alt="AIAutomate Logo"
              className="h-8 mb-4"
            />
            <p className="text-gray-600 max-w-sm">
              Transformando empresas con soluciones de IA inteligentes y
              automatización avanzada.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-ai-accent transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-ai-accent transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-ai-accent transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contacto</h3>
            <p className="text-gray-600 mb-4">contact@aiautomate.es</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-ai-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ai-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ai-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} AIAutomate. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};