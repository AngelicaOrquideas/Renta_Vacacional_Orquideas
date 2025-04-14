import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Room } from "../../src/interfaces/Room";
import { getPopularRooms } from "../../src/services/roomService";
import { PiUsers, PiBathtub, PiDoor } from "react-icons/pi"; // opcional para íconos más suaves
import { FaCheck,} from "react-icons/fa";

const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<Room | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<"night" | "week" | "month">("night");

  useEffect(() => {
    getPopularRooms().then((rooms) => {
      const selected = rooms.find((r) => r.id === Number(id));
      if (selected) {
        setRoom(selected);
        if (!selected.pricePerNight) setSelectedPrice("week");
        if (!selected.pricePerNight && !selected.pricePerWeek) setSelectedPrice("month");
      }
    });
  }, [id]);

  if (!room) return <div className="text-center p-10">Cargando habitación...</div>;

  const {
    title,
    description,
    images,
    features,
    pricePerNight,
    pricePerWeek,
    pricePerMonth,
  } = room;

  const renderPrice = () => {
    switch (selectedPrice) {
      case "night": return `$${pricePerNight} MXN /noche`;
      case "week": return `$${pricePerWeek} MXN /semana`;
      case "month": return `$${pricePerMonth} MXN /mes`;
    }
  };

  return (
    <>
      {/* HERO + RESERVA */}
      <div className="relative w-full h-[500px] md:aspect-[21/9] overflow-hidden mb-10 md:mb-40">
        <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 md:p-10">
          <h1 className="text-white text-3xl md:text-5xl font-bold">{title}</h1>
          <p className="text-white/90 text-sm md:text-lg mt-2 max-w-2xl">{description}</p>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 pt-0 pb-20">
        {/* Chips de features */}
        <div className="flex flex-wrap gap-4 mb-6 pb-6">
        {features.guests > 0 && (
            <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm">
            <PiUsers className="text-lg" />
            <span>{features.guests} Huéspedes</span>
            </div>
        )}
        {features.bedrooms && (
            <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm">
            <PiDoor className="text-lg" />
            <span>{features.bedrooms} Cuartos</span>
            </div>
        )}
        {features.bathrooms && (
            <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm">
            <PiBathtub className="text-lg" />
            <span>{features.bathrooms} Baños</span>
            </div>
        )}
        </div>

        <hr className="my-10 border-t-2 border-gray-300" />

        {/* Descripción */}
        <h3 className="text-xl font-bold mb-">Sobre la habitación</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Cras tellus sit amet tempor amet, nascetur quam ornare proin.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li>Faucibus pulvinar elementum integer enim neque.</li>
          <li>Magna etiam tempor orci eu lobortis elementum nibh.</li>
          <li>Porta lorem mollis aliquam ut porttitor leo a diam.</li>
          <li>Pellentesque elit eget gravida cum sociis natoque penatibus.</li>
        </ul>

        <hr className="my-10 border-t-2 border-gray-300" />


        {/* Amenidades */}
        <h3 className="text-xl font-bold mb-4">Room amenities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-600 mb-8">
          {[
            features.wifi && "Wifi",
            features.airConditioning && "Aire Acondicionado",
            features.pool && "Alberca",
            features.petFriendly && "Pet Friendly",
          ]
            .filter(Boolean)
            .map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> {item as string}
              </span>
            ))}
        </div>

        <hr className="border-gray-300  border-t-2 my-10" />

        {/* Galería */}
        <h3 className="text-xl font-bold mb-4">Room gallery</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Galería ${i + 1}`}
              className="rounded-xl h-32 object-cover w-full"
            />
          ))}
        </div>
      </div>

      {/*CARD INDIVIDUAL*/}      
      <div className="relative md:absolute md:right-20 md:bottom-[-60px] mx-auto md:mx-0 bg-white p-6 rounded-xl shadow-2xl ring-1 ring-black/5 w-full max-w-sm z-10 transition-transform hover:scale-[1.02] mt-10 md:mt-0 mb-16 md:mb-0">

            <h4 className="text-xl font-bold mb-1">Reserva tu estadía</h4>
            <p className="text-sm text-gray-500 mb-4">Selecciona el tipo de precio para calcular el total:</p>

            {/* Botones de tipo de pago */}
            <div className="flex gap-2 mb-4">
            {pricePerNight && (
                <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedPrice === "night" ? "bg-red-500 text-white" : "bg-gray-100"
                }`}
                onClick={() => setSelectedPrice("night")}
                >
                Noche
                </button>
            )}
            {pricePerWeek && (
                <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedPrice === "week" ? "bg-red-500 text-white" : "bg-gray-100"
                }`}
                onClick={() => setSelectedPrice("week")}
                >
                Semana
                </button>
            )}
            {pricePerMonth && (
                <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedPrice === "month" ? "bg-red-500 text-white" : "bg-gray-100"
                }`}
                onClick={() => setSelectedPrice("month")}
                >
                Mes
                </button>
            )}
            </div>

            <div className="flex items-center justify-between mb-4">
            <p className="text-base text-gray-600">Precio:</p>
            <p className="text-lg font-bold">{renderPrice()}</p>
            </div>

            <hr className="my-8" />

            <div className="text-sm text-gray-600 mb-6 space-y-1">
            <p><span className="font-medium">Ubicación:</span> {room.location}</p>
            <p><span className="font-medium">Descripción:</span> {description}</p>
            <p><span className="font-medium">Mascotas:</span> {features.petFriendly ? "Permitidas" : "No permitidas"}</p>
            <p><span className="font-medium">Aire acondicionado:</span> {features.airConditioning ? "Sí" : "No"}</p>
            <p><span className="font-medium">Capacidad:</span> {features.guests} huéspedes</p>  
            </div>

            <button className="w-full bg-red-500 text-white py-3 rounded-full hover:bg-red-600 transition font-medium text-base">
            Reservar ahora
            </button>
        </div>  
    </>
  );
};

export default RoomDetail;
