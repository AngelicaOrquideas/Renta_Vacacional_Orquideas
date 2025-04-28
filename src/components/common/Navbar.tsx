import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo5.png";
import { IoBedOutline } from "react-icons/io5";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Navbar escritorio con óvalo */}
        <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[90%] md:max-w-5xl transition-all duration-500 ease-in-out ${
          scrolled ? "bg-white shadow-md py-1.5" : "bg-white shadow-md py-2"
        } rounded-full px-4`}>
        <div className="flex items-center justify-between w-full">
          {/* Logo + nombre */}
          <div className="flex items-center gap-3">
          <div className="h-14 w-14 md:h-16 md:w-16 rounded-full overflow-hidden">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-semibold text-gray-800 text-base md:text-lg leading-tight">
            Renta Vacacional <br className="hidden md:block" />
            <span>Orquídea</span>
          </span>
        </div>


          {/* Navegación desktop */}
          <ul className="hidden md:flex space-x-6 text-sm md:text-lg font-medium text-gray-700">
            <li>
              <Link
                to="/"
                className={`transition-all ${
                  location.pathname === "/" ? "text-red-500 font-bold" : "hover:text-red-400"
                }`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`transition-all ${
                  location.pathname === "/about" ? "text-red-500 font-bold" : "hover:text-red-400"
                }`}
              >
                Nosotros
              </Link>
            </li>
            {/* <li>
            <Link
                to="/rooms"
                className={`transition-all ${
                  location.pathname === "/rooms" ? "text-red-500 font-bold" : "hover:text-red-400"
                }`}
              >
              Estancias</Link> 
            </li> */}
            <li>
            <Link
                to="/contact"
                className={`transition-all ${
                  location.pathname === "/contact" ? "text-red-500 font-bold" : "hover:text-red-400"
                }`}
              >
              Contáctanos</Link>
            </li>
          </ul>

          {/* Botón acción escritorio */}
          <div className="hidden md:flex">
          <Link to="/rooms">
            <button className="group bg-red-500 text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 shadow-md hover:bg-red-600 hover:shadow-lg transition duration-300 cursor-pointer">
              <span className="group-hover:scale-110 transition-transform duration-300"><IoBedOutline className="text-xl" /></span>
              Habitaciones
            </button>
          </Link>
          </div>

          {/* Botón hamburguesa mobile */}
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-black">
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Overlay móvil SOLO si está abierto el menú */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-gray-60 bg-opacity-50 backdrop-blur-sm md:hidden" onClick={closeMenu} />
      )}

      {/* Sidebar lateral móvil */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* Encabezado del menú */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menú</h2>
          <button onClick={closeMenu}>
            <X size={28} className="text-black" />
          </button>
        </div>

        {/* Enlaces del menú */}
        <ul className="flex flex-col space-y-4 p-6 text-lg">
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className={`transition-all ${
                location.pathname === "/" ? "text-red-500 font-bold" : "hover:text-red-400"
              }`}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              className={`transition-all ${
                location.pathname === "/about" ? "text-red-500 font-bold" : "hover:text-red-400"
              }`}
            >
              Nosotros
            </Link>
          </li>
          {/* <li>
          <Link
              to="/rooms"
              onClick={closeMenu}
              className={`transition-all ${
                location.pathname === "/rooms" ? "text-red-500 font-bold" : "hover:text-red-400"
              }`}
            >
            Estancias</Link>
          </li> */}
          <li>
          <Link
              to="/contact"
              onClick={closeMenu}
              className={`transition-all ${
                location.pathname === "/contact" ? "text-red-500 font-bold" : "hover:text-red-400"
              }`}
            >
            Contáctanos</Link>
          </li>
          <li>
          <Link
              to="/rooms"
              onClick={closeMenu}
              className={`transition-all ${
                location.pathname === "/rooms" ? "text-red-500 font-bold" : "hover:text-red-400"
              }`}
            >
              Habitaciones
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
