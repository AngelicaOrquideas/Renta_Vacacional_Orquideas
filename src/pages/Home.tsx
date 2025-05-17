import { useEffect, useState } from "react";
import { Room } from "../interfaces/Room";
import { getPopularRooms } from "../services/roomService";
import RoomCard from "../components/common/cards/RoomCard";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { Helmet } from "react-helmet-async";


const Home: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    getPopularRooms().then(setRooms).catch(console.error);
  }, []);

  const handleSmartRedirect = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open("https://wa.me/4421323281?text=Hola%2C%20quiero%20hacer%20una%20reserva", "_blank");
    } else {
      window.open("https://www.facebook.com/RentaVacacionalOrquidea", "_blank");
    }
  };
  

  return (
    <>
      <Helmet>
        <title>Inicio | Renta Vacacional Orquídea</title>
        <meta
          name="description"
          content="Renta habitaciones vacacionales en Cancún. Cómodas, modernas y accesibles. Descubre la experiencia Orquídea."
        />
      </Helmet>

      {/* Hero */}
      <div
        className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-no-repeat bg-center sm:bg-[center_top]"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.1)), url('https://live.staticflickr.com/65535/54506509740_1e7f9fdd3d_b.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="text-center px-4 sm:px-6 z-10 w-full max-w-[90%] py-10 sm:py-20">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white text-center leading-tight drop-shadow-md">
              <Typewriter
                words={[
                  "Descansa en espacios pensados para ti",
                  "Vive la experiencia de un descanso verdadero",
                  "Tu alojamiento ideal te espera aquí"
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>
          </div>

          <p className="text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto text-white/80 drop-shadow">
            Vive unas vacaciones inolvidables en Cancún. Hospédate en lugares acogedores, bien ubicados y con todas las comodidades incluidas.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/rooms">
              <button className="group bg-red-500 text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 shadow-md hover:bg-red-600 hover:shadow-lg transition duration-300">
                <FaSearch className="text-xl group-hover:scale-110 transition-transform duration-300" />
                Explorar Habitaciones
              </button>
            </Link>

            <Link to="/about">
              <button className="group bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 hover:shadow-md transition duration-300">
                <MdInfoOutline className="text-2xl text-red-500 group-hover:text-red-600 transition-colors" />
                Sobre nosotros
              </button>
            </Link>
          </div>
        </div>
      </div>


      {/* Sección: Explora nuestros cuartos más rentados */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Explora nuestros cuartos más rentados
            </h2>
            <Link to="/rooms">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer ">
              Ver todos
            </button>
          </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 justify-center items-stretch">
            {rooms.slice(0, 3).map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>

        </div>
      </section>

      {/* seccion de amenidades */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ven y disfruta de una experiencia con nosotros
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi, convallis vitae quam nec, elementum cursus odio.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {/* 1 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                {/* Aquí va tu ícono personalizado (SVG o imagen) */}
                <img src="https://live.staticflickr.com/65535/54506157366_8f63506e88_w.jpg" alt="aire" className="w-full h-full object-cover" />

              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Aire acondicionado</h4>
                <p className="text-sm text-gray-600">Mantente fresco durante todo tu hospedaje.</p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src="https://live.staticflickr.com/65535/54506157371_3dafe1f683_w.jpg" alt="alberca" className="w-full h-full object-cover" />

              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Alberca</h4>
                <p className="text-sm text-gray-600">Disfruta de un refrescante chapuzón.</p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src="https://live.staticflickr.com/65535/54505292407_d418f99a5b_n.jpg" alt="wifi" className="w-full h-full object-cover" />

              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Wi-Fi</h4>
                <p className="text-sm text-gray-600">Conexión rápida y estable durante tu estancia.</p>
              </div>
            </div>

            {/* 4 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src="https://live.staticflickr.com/65535/54505292417_0996c19924_n.jpg" alt="lugares céntricos" className="w-full h-full object-cover" />

              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Lugares céntricos</h4>
                <p className="text-sm text-gray-600">Hospedajes bien ubicados cerca de todo.</p>
              </div>
            </div>

            {/* 5 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <img src="https://live.staticflickr.com/65535/54506509670_5b7bb09931_n.jpg" alt="toallas" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Toallas</h4>
                <p className="text-sm text-gray-600">Limpias, suaves y listas para usar.</p>
              </div>
            </div>

            {/* 6 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <img src="https://live.staticflickr.com/65535/54506509930_175a256a53_w.jpg" alt="camas" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Camas</h4>
                <p className="text-sm text-gray-600">Colchones cómodos para el mejor descanso.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-4">
          <Link to="/rooms">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold cursor-pointer">
              Explorar habitaciones
            </button>
          </Link>
          <Link to="/about">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 border border-gray-300 cursor-pointer">
              Sobre nosotros
            </button>
          </Link>
          </div>
        </div>
      </section>

      {/* Sección: Lo que nos diferencia */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Galería de imágenes estilo collage */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://live.staticflickr.com/65535/54505292232_3b6399cbc0_b.jpg"
              alt="Renta Vacacional Orquídea"

              className="rounded-xl w-full h-auto object-cover row-span-2"
            />
            <img
              src="https://live.staticflickr.com/65535/54505292262_606c25566c_w.jpg"
              alt="Renta Vacacional Orquídea"
              className="rounded-xl w-full h-full object-cover"
            />
            <img
              src="https://live.staticflickr.com/65535/54506509740_1e7f9fdd3d.jpg"
              alt="Renta Vacacional Orquídea"
              className="rounded-xl w-full h-full object-cover"
            />
            
          </div>

          {/* Texto descriptivo + botón de reserva */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Qué nos hace diferentes?
            </h2>
            <p className="text-gray-600 mb-6">
              Descubre una experiencia de hospedaje única en espacios que combinan excelente atención, diseño y comodidad. Cada rincón está pensado para tu descanso.
            </p>
            <p className="text-gray-600 mb-8">
              Nuestro compromiso con la hospitalidad se refleja en cada detalle: desde la arquitectura rústica moderna hasta los servicios personalizados que garantizan una estancia inolvidable.
            </p>

            {/* Botón de reserva con redirección inteligente */}
            <button
              onClick={handleSmartRedirect}
              className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-red-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
              ¡Reserva Ahora!
            </button>
          </div>
        </div>
      </section>



    </>
  );
};

export default Home;
