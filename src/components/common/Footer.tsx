// src/components/common/Footer.tsx
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa6";

const instagramImages = [
  "https://live.staticflickr.com/65535/54475877739_d93bc31366_w.jpg",
  "https://live.staticflickr.com/65535/54470746842_717c03c5d6_n.jpg",
  "https://live.staticflickr.com/65535/54471854218_6d9bd0224e_n.jpg",
  "https://live.staticflickr.com/65535/54471582896_1d269d7876_n.jpg",
  "https://live.staticflickr.com/65535/54471787919_22d8950cb4_n.jpg",
  "https://live.staticflickr.com/65535/54470746622_e9a693a6ce_n.jpg"
];

const Footer = () => {
  return (
    <footer className="bg-[#FFF8E7] text-gray-700 px-6 md:px-12 pt-20 pb-10 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + descripción + redes */}
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Renta Vacacional Orquídea</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Disfruta de una estancia cómoda, moderna y tranquila. Nuestro compromiso es tu descanso.
          </p>
          <div className="flex gap-4 text-red-500 text-xl">
            <a href="https://wa.me/4421323281" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-green-500 cursor-pointer transition duration-300" />
            </a>
            <a href="https://www.facebook.com/angelica.flore.96" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer transition duration-300" />
            </a>
            <a href="https://www.instagram.com/flore3970/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 cursor-pointer transition duration-300" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=floreslopezmaangelica@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="hover:text-yellow-500 cursor-pointer transition duration-300" />
            </a>

          </div>
        </div>

        {/* Páginas */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Páginas</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-red-500 transition">Inicio</a></li>
            <li><a href="/about" className="hover:text-red-500 transition">Nosotros</a></li>
            <li><a href="/rooms" className="hover:text-red-500 transition">Habitaciones</a></li>
            <li><a href="/contact" className="hover:text-red-500 transition">Contáctanos</a></li>
          </ul>
        </div>

        {/* Páginas útiles */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Páginas útiles</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-red-500 transition">Términos & Condiciones</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Política de privacidad</a></li>
            
            <li><a href="#" className="hover:text-red-500 transition">Error 404</a></li>
          </ul>
        </div>

        {/* Galería de Instagram */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Síguenos en Instagram</h4>
          <div className="grid grid-cols-3 gap-2">
            {instagramImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Instagram ${i}`}
                className="w-full h-20 object-cover rounded-md shadow hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Separador */}
      <div className="border-t border-gray-300 my-8 max-w-7xl mx-auto" />

      {/* Contacto directo */}
      <div className="w-full flex justify-center">
  <div className="flex flex-col md:flex-row items-center justify-center text-center gap-4">
    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-xl">
      📱
    </div>
    <div>
      <h5 className="font-semibold text-gray-900 text-base mb-1">
        ¿Tienes dudas o quieres reservar?
      </h5>
      <p className="text-sm text-gray-600">
        Contáctanos por{" "}
        <span className="font-medium text-red-500">WhatsApp, Facebook o Instagram</span> y te
        responderemos lo antes posible.
      </p>
    </div>
  </div>
</div>


      {/* Footer final */}
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-600 mt-6 border-t pt-4">
        © {new Date().getFullYear()} Renta Vacacional Orquídea | Diseñado por <span className="text-red-500 font-medium">Software a la Carta</span>
      </div>
    </footer>
  );
};

export default Footer;
