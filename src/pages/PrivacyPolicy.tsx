const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Responsable del tratamiento</h2>
          <p className="mb-4">
            AIAutomate es el responsable del tratamiento de los datos personales del Usuario y le informa que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 de 27 de abril de 2016 (GDPR).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Datos que recopilamos</h2>
          <p className="mb-4">Los datos personales que tratamos son:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Datos identificativos: nombre y correo electrónico (a través del formulario de contacto)</li>
            <li>Datos de navegación: cookies técnicas esenciales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Finalidad del tratamiento</h2>
          <p className="mb-4">
            Los datos personales proporcionados se conservarán mientras el interesado no solicite su supresión. La finalidad del tratamiento es:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Gestionar el envío de la información que nos solicite</li>
            <li>Poder ofrecerle nuestros servicios</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Derechos del usuario</h2>
          <p className="mb-4">
            Los derechos de protección de datos de los que son titulares los interesados son:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Derecho a solicitar el acceso a los datos personales</li>
            <li>Derecho de rectificación o supresión</li>
            <li>Derecho de oposición</li>
            <li>Derecho a la limitación del tratamiento</li>
            <li>Derecho a la portabilidad de los datos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Medidas de seguridad</h2>
          <p className="mb-4">
            AIAutomate ha adoptado todas las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales suministrados y evitar su alteración, pérdida y tratamiento o acceso no autorizado.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">6. Contacto</h2>
          <p className="mb-4">
            Para ejercer sus derechos, puede contactar con nosotros a través de:
          </p>
          <ul className="list-disc pl-6">
            <li>Email: contact@aiautomate.es</li>
            <li>Dirección postal: Madrid, España</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;