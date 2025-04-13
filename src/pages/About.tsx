// src/pages/About.tsx

const About: React.FC = () => {
    return (
      <>
        {/* Hero Section - Sobre Nosotros */}
        <section
          className="relative min-h-[90vh] flex items-center justify-center text-white bg-no-repeat bg-center bg-cover bg-fixed"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0,0,0,0.2)), url('https://escuelaelbs.com/wp-content/uploads/Servicios-de-un-hotel.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            imageRendering: "auto",
          }}
        >
          <div className="text-center px-4 md:px-0 z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Sobre nuestros alojamientos</h1>
            <p className="max-w-xl mx-auto text-white/80 text-base md:text-lg leading-relaxed">
              No consectetur a erat nam at lectus urna duis convallis molestie nunc non blandit massa ut etiam sit amet nisl purus in mollis nunc sed et magnis dis.
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
                    {[1, 2, 3].map((_, i) => (
                    <div
                        key={i}
                        className="bg-white border border-gray-200 rounded-xl shadow-md px-4 py-3 hover:shadow-lg transition w-full max-w-sm"
                    >
                        <div className="flex items-start gap-3">
                        <div className="text-red-500 mt-1">
                            <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 text-base mb-1">
                            Apartamento Orquídea{i + 1}
                            </h4>
                            <p className="text-sm text-gray-600 mb-1">
                            Zona céntrica - Cancún, Quintana Roo
                            </p>
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
                    ))}
                </div>

                {/* Mapa en círculo */}
                <div className="flex justify-center">
                    <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-red-100 shadow-xl flex items-center justify-center">
                    <img
                        src="src/assets/Cancun.png"
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
            <div className="max-w-6xl mx-auto">
                {/* Encabezado */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Cómo empezamos</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra historia</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                </div>

                {/* Galería */}
                <div className="grid md:grid-cols-3 gap-6">
                {/* Imagen grande a la izquierda */}
                <div className="md:row-span-2">
                    <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/146341651.jpg?k=d970f89796b5e821a6431878e21745a50aee698c4bf15b220a1879e1ea6c1319&o=&hp=1"
                    alt="Main Story"
                    className="w-full h-full object-cover rounded-xl"
                    />
                </div>

                {/* Tres imágenes pequeñas a la derecha */}
                <div className="grid grid-cols-2 gap-4 md:col-span-2">
                    <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/146341651.jpg?k=d970f89796b5e821a6431878e21745a50aee698c4bf15b220a1879e1ea6c1319&o=&hp=1"
                    alt="Secondary 1"
                    className="w-full h-[180px] object-cover rounded-xl"
                    />
                    <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/146341651.jpg?k=d970f89796b5e821a6431878e21745a50aee698c4bf15b220a1879e1ea6c1319&o=&hp=1"
                    alt="Secondary 2"
                    className="w-full h-[180px] object-cover rounded-xl"
                    />
                    <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/146341651.jpg?k=d970f89796b5e821a6431878e21745a50aee698c4bf15b220a1879e1ea6c1319&o=&hp=1"
                    alt="Secondary 3"
                    className="w-full h-[180px] object-cover rounded-xl col-span-2"
                    />
                </div>
                </div>
            </div>
        </section>
                        
        {/* Footer */}
        


      </>
    );
  };
  
  export default About;
  