// src/pages/Contact.tsx
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import LocationsCards from "../components/common/cards/LocationsCards";
import FaqSection from "../components/common/cards/FaqSection";

const Contact = () => {
  return (
    <>
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
      </section>


      {/* CONTACTO DIRECTO */}
      <section className="bg-[#FFF8E7] py-20 px-6 md:px-12">
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
            href="https://www.facebook.com/tuPagina"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl">
              <FaFacebookF />
            </div>
            <p className="text-sm font-semibold">Facebook</p>
            <p className="text-gray-600 text-sm">@tuPagina</p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/tuPerfil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
          >
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 text-2xl">
              <FaInstagram />
            </div>
            <p className="text-sm font-semibold">Instagram</p>
            <p className="text-gray-600 text-sm">@tuPerfil</p>
          </a>
        </div>
      </section>

            
        {/* SECCIÓN: Ubicaciones */}
        <section id="ubicaciones" className="bg-white py-20 px-6 md:px-12 relative">
        <LocationsCards />
        </section>


        <FaqSection />
      
    </>
  );
};

export default Contact;
