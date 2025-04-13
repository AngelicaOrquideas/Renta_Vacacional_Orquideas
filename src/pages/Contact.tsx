// src/pages/Contact.tsx
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import LocationsCards from "../components/common/cards/LocationsCards";
import FaqSection from "../components/common/cards/FaqSection";

const Contact = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center text-white bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.1)), url('src/assets/Fondo.jpg')`,
        }}
      >
        <div className="text-center px-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Contáctanos</h1>
          <p className="max-w-xl mx-auto text-white/80">
            Comunícate con nosotros a través de nuestras redes sociales o vía telefónica. ¡Estamos para ayudarte!
          </p>
        </div>
      </section>

      {/* CONTACTO DIRECTO */}
      <section className="bg-[#FFF8E7] py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Opción 1 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-2xl">
              <FaPhoneAlt />
            </div>
            <p className="text-sm font-semibold">Llámanos</p>
            <p className="text-gray-600 text-sm">998 105 3623</p>
          </div>

          {/* Opción 2 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-green-500 text-2xl">
              <FaWhatsapp />
            </div>
            <p className="text-sm font-semibold">WhatsApp</p>
            <a
              href="https://wa.me/529981053623"
              target="_blank"
              className="text-red-500 hover:underline text-sm"
            >
              Escríbenos ahora
            </a>
          </div>

          {/* Opción 3 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-2xl">
              <FaInstagram />
            </div>
            <p className="text-sm font-semibold">Síguenos en redes</p>
            <div className="flex gap-4 text-red-500 text-xl">
              <a href="https://facebook.com" target="_blank"><FaFacebookF className="hover:text-red-600" /></a>
              <a href="https://instagram.com" target="_blank"><FaInstagram className="hover:text-red-600" /></a>
            </div>
          </div>
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
