// src/pages/About.tsx
import { Helmet } from 'react-helmet';


const About: React.FC = () => {
    return (
      <>
        <Helmet>
        <title>Sobre Nosotros | Renta Vacacional Orquídea</title>
        <meta
          name="description"
          content="Conoce más sobre nuestro compromiso, valores y filosofía de hospitalidad." />
      </Helmet>
        {/* Hero Section - Sobre Nosotros */}
        <section
          className="relative min-h-[90vh] flex items-center justify-center text-white bg-no-repeat bg-center bg-cover bg-fixed"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0,0,0,0.2)), url('https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            imageRendering: "auto",
          }}
        >
          <div className="absolute inset-0 bg-black/40 z-0" />
          <div className="text-center px-4 md:px-0 z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Sobre nuestros alojamientos</h1>
                <p className="max-w-xl mx-auto text-white/80 text-base md:text-lg leading-relaxed">
                En Renta Vacacional Orquídea nos enorgullece ofrecer espacios diseñados para tu confort, con una atención cálida y personalizada. Cada alojamiento está cuidadosamente preparado para brindarte una estancia tranquila, segura y memorable.
                </p>
            </div>
  
          {/* Botón scroll hacia abajo */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
            <button
                onClick={() => {
                    const section = document.getElementById("locations");
                    section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition cursor-pointer"
                >
                <svg
                    className="w-6 h-6 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            </div>
        </section>

        {/* Sección de Ubicaciones */}

        <section id="locations" className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-5xl mx-auto text-center">
                {/* Título */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Conoce nuestras ubicaciones
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto mb-12">
                Nuestros alojamientos están estratégicamente ubicados para brindarte la mejor experiencia.
                </p>

                {/* Grid de contenido */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-2 items-center">
                {/* Tarjetas */}
                <div className="flex flex-col items-center md:items-start gap-6">
                    {/* Orquídeas */}
                    <div className="bg-white border border-gray-200 rounded-xl shadow-md px-4 py-3 hover:shadow-lg transition w-full max-w-sm">
                    <div className="flex items-start gap-3">
                        <div className="text-red-500 mt-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
                        </svg>
                        </div>
                        <div>
                        <h4 className="font-semibold text-gray-800 text-base mb-1">Departamento Orquídeas</h4>
                        <p className="text-sm text-gray-600 mb-1">Zona céntrica - Cancún, Quintana Roo</p>
                        <a
                            href="https://maps.app.goo.gl/REUZiNLxqzftrBnr9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-red-500 font-medium hover:underline"
                        >
                            Ver en Google Maps
                        </a>
                        </div>
                    </div>
                    </div>

                    {/* Departamentos Tikal */}
                    <div className="bg-white border border-gray-200 rounded-xl shadow-md px-4 py-3 hover:shadow-lg transition w-full max-w-sm">
                    <div className="flex items-start gap-3">
                        <div className="text-red-500 mt-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
                        </svg>
                        </div>
                        <div>
                        <h4 className="font-semibold text-gray-800 text-base mb-1">Departamentos Tikal</h4>
                        <p className="text-sm text-gray-600 mb-1">Av. Tikal - Cancún, Quintana Roo</p>
                        <a
                            href="https://maps.app.goo.gl/a8nivJg8FfjXqXQKA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-red-500 font-medium hover:underline"
                        >
                            Ver en Google Maps
                        </a>
                        </div>
                    </div>
                    </div>

                    {/* Casa El Pedregal */}
                    <div className="bg-white border border-gray-200 rounded-xl shadow-md px-4 py-3 hover:shadow-lg transition w-full max-w-sm">
                    <div className="flex items-start gap-3">
                        <div className="text-red-500 mt-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
                        </svg>
                        </div>
                        <div>
                        <h4 className="font-semibold text-gray-800 text-base mb-1">Casa El Pedregal</h4>
                        <p className="text-sm text-gray-600 mb-1">Región 92 - Cancún, Quintana Roo</p>
                        <a
                            href="https://maps.app.goo.gl/Vnv3f2LzzKnurXdc6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-red-500 font-medium hover:underline"
                        >
                            Ver en Google Maps
                        </a>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Mapa en círculo */}
                <div className="flex justify-center">
                    <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-red-100 shadow-xl flex items-center justify-center">
                    <img
                        src="/assets/Cancun.png"
                        alt="Mapa decorativo"
                        className="w-full h-full object-cover"
                    />
                    </div>
                </div>
                </div>


                {/* Botón más ubicaciones */}
                <div className="mt-12">
                    <a
                        href="/contact#ubicaciones"
                        className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition"
                    >
                        Ver más ubicaciones
                    </a>
                </div>
            </div>
        </section>
    
        {/* Cómo empezamos & Nuestra historia*/}

        <section className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Ilustración a la izquierda */}
            <div className="flex justify-center">
              <img
                src="/assets/undraw_tree-swing_5010.svg"
                alt="Historia de la empresa"
                className="w-full max-w-md object-contain"
              />
            </div>

            {/* Información a la derecha */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestra historia
              </h2>
              <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                Todo comenzó con una idea sencilla pero poderosa: ofrecer un alojamiento cálido, accesible y con atención personalizada. Lo que inició como un pequeño proyecto familiar fue creciendo gracias al compromiso, la dedicación y la confianza de nuestros primeros huéspedes.
              </p>
              <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                Nos enfocamos desde el inicio en cuidar cada detalle: la limpieza impecable, el ambiente acogedor, el trato humano y respetuoso. Nuestro objetivo fue siempre brindar un espacio en el que las personas no solo se hospedaran, sino que realmente descansaran y se sintieran como en casa.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                A lo largo del tiempo, hemos fortalecido nuestra propuesta con mejoras continuas, ampliando servicios y escuchando atentamente a nuestros visitantes. Cada experiencia compartida ha sido un paso más en este camino que seguimos recorriendo con entusiasmo y pasión por la hospitalidad.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default About;
  