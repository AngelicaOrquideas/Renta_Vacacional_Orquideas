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
      </section>

      
      <section className="px-6 py-12 text-center bg-white text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Descubre habitaciones ideales para tu descanso</h2>
          <p className="text-base">
            En Renta Vacacional Orquídea ofrecemos alojamientos acogedores, totalmente equipados y ubicados estratégicamente en Cancún. Perfectos para viajes familiares, en pareja o por trabajo.
          </p>
        </div>
      </section>
      {/* Lista de habitaciones */}
      <RoomListSection />
    </>
  );
};

export default Rooms;
