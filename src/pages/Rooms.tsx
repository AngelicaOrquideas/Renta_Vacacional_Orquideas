// src/pages/Rooms.tsx (o donde renders RoomListSection)
import RoomListSection from "../components/room/RoomListSection";

const Rooms = () => {
  return (
    <>
      {/* Hero de habitaciones */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center text-white bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0,0,0,0.2)), url('https://live.staticflickr.com/65535/54471787919_22d8950cb4_n.jpg')`,
        }}
      >
        <div className="text-center px-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Nuestras Habitaciones</h1>
          <p className="max-w-xl mx-auto text-white/80 text-base md:text-lg">
            Encuentra el alojamiento ideal para tus vacaciones en Cancún.
          </p>
        </div>
      </section>

      {/* Lista de habitaciones */}
      <RoomListSection />
    </>
  );
};

export default Rooms;
