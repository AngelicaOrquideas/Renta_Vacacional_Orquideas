// src/components/common/Footer.tsx
import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";

const instagramImages = [
  "https://i.pinimg.com/736x/87/c5/4c/87c54c05e4cef792e0090314bdcb2fad.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBNrD1VrdmP3NPUiAWT1TQB9VBHJLJ_ZX88B37O9PQhMT1ubXW3ovUM5IjWewQZakCTb4&usqp=CAU",
  "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
  "https://i.pinimg.com/736x/f8/75/f0/f875f02c682e48700db48c6a42fbe0bf.jpg",
  "https://i.pinimg.com/736x/72/8f/3e/728f3eea9f234ef04a0674e3abfb2fd9.jpg",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
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
            <FaFacebookF className="hover:text-red-600 cursor-pointer transition duration-300" />
            <FaXTwitter className="hover:text-red-600 cursor-pointer transition duration-300" />
            <FaYoutube className="hover:text-red-600 cursor-pointer transition duration-300" />
            <FaInstagram className="hover:text-red-600 cursor-pointer transition duration-300" />
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
            <li><a href="#" className="hover:text-red-500 transition">Guía de estilo</a></li>
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
