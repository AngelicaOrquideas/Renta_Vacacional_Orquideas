// src/pages/Contact.tsx
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import LocationsCards from "../components/common/cards/LocationsCards";
import FaqSection from "../components/common/cards/FaqSection";
import { Helmet } from "react-helmet-async";



const Contact = () => {
  return (
    <>
      {/* Helmet para SEO */}
      <Helmet>
        <title>Contáctanos | Renta Vacacional Orquídea</title>
        <meta
          name="description"
          content="¿Tienes alguna duda, solicitud o sugerencia? Comunícate con nosotros por WhatsApp, redes sociales o llamada telefónica."
        />
      </Helmet>
      {/* HERO */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center text-white bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0,0,0,0.3)), url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="text-center px-6 z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow">
            Contáctanos
          </h1>
          <p className="text-white/90 text-base md:text-lg drop-shadow">
            ¿Tienes alguna duda, solicitud o sugerencia? <br />
            Comunícate con nosotros por WhatsApp, redes sociales o llamada telefónica.
          </p>
        </div>
        {/* Botón scroll hacia abajo */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
            <button
                onClick={() => {
                    const section = document.getElementById("ContactoD");
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

      {/* CONTACTO DIRECTO */}
      <section id="ContactoD" className="bg-[#FFF8E7] py-20 px-6 md:px-12 scroll-mt-28">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {/* Teléfono */}
          <a href="tel:4421323281" className="flex flex-col items-center gap-2 hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-2xl">
              <FaPhoneAlt />
            </div>
            <p className="text-sm font-semibold">Llámanos</p>
            <p className="text-gray-600 text-sm">4421323281</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/4421323281"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-2xl">
              <FaWhatsapp />
            </div>
            <p className="text-sm font-semibold">WhatsApp</p>
            <p className="text-gray-600 text-sm">Escríbenos</p>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/angelica.flore.96"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl">
              <FaFacebookF />
            </div>
            <p className="text-sm font-semibold">Facebook</p>
            <p className="text-gray-600 text-sm">Maria A Flore </p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/flore3970/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
          >
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 text-2xl">
              <FaInstagram />
            </div>
            <p className="text-sm font-semibold">Instagram</p>
            <p className="text-gray-600 text-sm">flore3970</p>
          </a>
        </div>
      </section>

            
        {/* SECCIÓN: Ubicaciones */}
        <section id="ubicaciones" className="bg-white py-16 px-6 md:px-12 relative">
        <LocationsCards />
        </section>

        <FaqSection />
      
    </>
  );
};

export default Contact;
