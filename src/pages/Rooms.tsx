// src/pages/Rooms.tsx (o donde renders RoomListSection)
import RoomListSection from "../components/room/RoomListSection";
import { Helmet } from "react-helmet-async";



const Rooms = () => {
  return (
    <>
      <Helmet>
        <title>Habitaciones en Cancún | Renta Vacacional Orquídea</title>
        <meta
          name="description"
          content="Explora nuestras habitaciones completamente equipadas para tu comodidad en Cancún."
        />
      </Helmet>

      {/* Hero de habitaciones */}
      <section
        className="relative h-[75vh] md:h-[90vh] flex items-center justify-center text-white bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0,0,0,0.2)), url('https://live.staticflickr.com/65535/54505292262_606c25566c_b.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="text-center px-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Nuestras Habitaciones</h1>
          <p className="max-w-xl mx-auto text-white/80 text-base md:text-lg">
            Encuentra el alojamiento ideal para tus vacaciones en Cancún.
          </p>
        </div>
        {/* Botón scroll hacia abajo */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
            <button
                onClick={() => {
                    const section = document.getElementById("Cuartos");
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

      
      <section
  id="Cuartos"
  className="scroll-mt-28 bg-gradient-to-b from-white to-gray-100 px-6 py-24 md:py-28 text-gray-800"
>
  <div className="max-w-5xl mx-auto text-center">
    {/* Subtítulo discreto */}
    <p className="text-sm font-medium text-red-400 tracking-wide mb-3">
      Tu espacio perfecto te espera
    </p>

    {/* Título elegante */}
    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
      Habitaciones pensadas para tu descanso
    </h2>

    {/* Línea decorativa muy sutil */}
    <div className="w-16 h-1 bg-red-300/70 rounded-full mx-auto mb-6" />

    {/* Descripción convincente */}
    <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
      Cada una de nuestras habitaciones ha sido diseñada con detalle para brindarte tranquilidad,
      estilo y comodidad. Ya sea para relajarte después de explorar Cancún o disfrutar de una
      estancia prolongada, aquí encuentras el lugar ideal.
    </p>
  </div>
</section>

      {/* Lista de habitaciones */}
      <RoomListSection />
    </>
  );
};

export default Rooms;
