const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Política de Cookies</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. ¿Qué son las cookies?</h2>
          <p className="mb-4">
            Las cookies son pequeños archivos de texto que los sitios web almacenan en su navegador. Estas cookies nos permiten recordar sus preferencias y proporcionarle una mejor experiencia de usuario.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Tipos de cookies que utilizamos</h2>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Cookies técnicas esenciales:</h3>
            <p className="mb-4">
              Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Gestión de cookies</h2>
          <p className="mb-4">
            Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador de internet. En caso de que no permita la instalación de cookies en su navegador es posible que no pueda acceder a algunos de los servicios y que su experiencia en nuestra web pueda resultar menos satisfactoria.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Consentimiento</h2>
          <p className="mb-4">
            Al navegar y continuar en nuestro sitio web estará consintiendo el uso de las cookies antes enunciadas, por los plazos señalados y en las condiciones contenidas en la presente Política de Cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">5. Actualización de la Política de Cookies</h2>
          <p className="mb-4">
            AIAutomate puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;