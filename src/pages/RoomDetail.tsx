import { PiUsers, PiBathtub, PiDoor, PiHairDryerBold, PiOvenDuotone } from "react-icons/pi"; // opcional para íconos más suaves
import {FaWifi, FaSnowflake, FaSwimmingPool, FaDog, FaTv, FaCar, FaUtensils, FaGamepad, FaFire,FaHotTub,FaBlender,} from "react-icons/fa";
import { RiSafe2Fill, RiArmchairLine } from "react-icons/ri";
import { LuLampCeiling, LuUtensils, LuMicrowave } from "react-icons/lu";
import { GiMirrorMirror, GiWashingMachine, GiToaster, GiHighGrass } from "react-icons/gi";
import { MdCoffeeMaker, MdBalcony, MdOutlineOutdoorGrill, MdLocalLaundryService } from "react-icons/md";
import { FaKitchenSet } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Room } from "../../src/interfaces/Room";
import { getPopularRooms } from "../../src/services/roomService";
import RoomGallery from "../components/room/GallerySection";
import * as PiIcons from "react-icons/pi";
import { Helmet } from "react-helmet-async";


const amenitiesList = [
  { key: "wifi", label: "Wifi", icon: FaWifi },
  { key: "airConditioning", label: "Aire Acondicionado", icon: FaSnowflake },
  { key: "pool", label: "Alberca", icon: FaSwimmingPool },
  { key: "petFriendly", label: "Pet Friendly", icon: FaDog },
  { key: "tv", label: "TV", icon: FaTv },
  { key: "parking", label: "Estacionamiento", icon: FaCar },
  { key: "kitchen", label: "Cocina", icon: FaUtensils },
  { key: "gameRoom", label: "Sala de Juegos", icon: FaGamepad },
  { key: "fireplace", label: "Chimenea", icon: FaFire },
  { key: "hotTub", label: "Tina de Hidromasaje", icon: FaHotTub },
  { key: "ceilingFan", label: "Ventilador de Techo", icon: LuLampCeiling },
  { key: "safeBox", label: "Caja Fuerte", icon: RiSafe2Fill   },
  { key: "fullLengthMirror", label: "Espejo de cuerpo completo", icon: GiMirrorMirror },
  { key: "microwave", label: "Microondas", icon: LuMicrowave },
  { key: "coffeeMaker", label: "Cafetera", icon: MdCoffeeMaker },
  { key: "washer", label: "Lavadora", icon: GiWashingMachine },
  { key: "hairDryer", label: "Secadora de Cabello", icon: PiHairDryerBold },
  { key: "extraTowels", label: "Toallas Adicionales", icon: MdLocalLaundryService },
  { key: "blender", label: "Licuadora", icon: FaBlender },
  { key: "toaster", label: "Tostadora", icon: GiToaster },
  { key: "oven", label: "Horno", icon: PiOvenDuotone },
  { key: "dishesAndCutlery", label: "Vajilla Completa", icon: FaKitchenSet },
  { key: "cookingUtensils", label: "Utensilios de Cocina", icon: LuUtensils },
  { key: "balconyOrTerrace", label: "Terraza / Balcón", icon: MdBalcony },
  { key: "privateGarden", label: "Jardín Privado", icon: GiHighGrass },
  { key: "barbecueGrill", label: "Parrilla / Asador", icon: MdOutlineOutdoorGrill },
  { key: "outdoorTableAndChairs", label: "Mesa y sillas exteriores", icon: RiArmchairLine }
];


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

        <Helmet>
          <title>{`${title} | Renta Vacacional Orquídea`}</title>
          <meta
            name="description"
            content={`Reserva la habitación "${title}" en Cancún. Ideal para ${features.guests} huéspedes, con ${features.beds} camas y amenidades como ${features.wifi ? 'WiFi' : 'sin WiFi'}.`}
          />
        </Helmet>

      {/* HERO + RESERVA */}
      <div className="relative w-full h-[500px] md:aspect-[21/9] overflow-hidden mb-10 md:mb-40">
        <img
          src={images[0]}
          alt={`Imagen principal de la habitación "${title}" en Cancún`}
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

        {/* Sección: Lo que te espera al llegar */}
        {room.arrivalExperience && (
          <div className="bg-gray-50 rounded-2xl p-8 mb-16 shadow-inner">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              🏠 Lo que te espera al llegar
            </h3>

            <p className="text-gray-700 text-base leading-relaxed mb-10 max-w-3xl">
              {room.arrivalExperience.intro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              {room.arrivalExperience.highlights.map(
                (highlight: { icon: string; text: string }, index: number) => {
                  const IconComponent = PiIcons[highlight.icon as keyof typeof PiIcons];

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm"
                    >
                      {IconComponent ? (
                        <IconComponent className="text-2xl text-red-500 mt-1" />
                      ) : (
                        <span className="text-2xl text-red-500 mt-1">✨</span>
                      )}
                      <span>{highlight.text}</span>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}

        <hr className="my-10 border-t-2 border-gray-300" />

        {/* Amenidades */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Amenidades que ofrecemos</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-700">
            {amenitiesList.map(({ key, label, icon: Icon }) =>
              features[key as keyof typeof features] ? (
                <div
                  key={key}
                  className="flex flex-col items-center justify-center text-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200"
                >
                  <Icon className="text-2xl mb-2 text-red-500" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ) : null
            )}
          </div>

        <hr className="border-gray-300  border-t-2 my-10" />

          <RoomGallery images={images.slice(1)} title={title} />
          
          <div className="mt-10 mb-20">
            <h3 className="text-xl font-bold mb-6 border-b border-gray-300 pb-2">Ubicación</h3>
            <div className="aspect-[21/9] w-full rounded-xl overflow-hidden shadow-sm">
              <iframe
                src={room.mapStreetViewUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

      </div>

      {/*CARD INDIVIDUAL*/}      
      <div className="relative md:absolute md:right-20 md:bottom-[-60px] mx-auto md:mx-0 bg-white p-6 rounded-xl shadow-2xl ring-1 ring-black/5 w-full max-w-sm z-10 transition-transform hover:scale-[1.02] mt-6 md:mt-0 mb-10 md:mb-0">

            <h4 className="text-xl font-bold mb-1">Reserva tu estadía</h4>
            <p className="text-sm text-gray-500 mb-4">Selecciona el tipo de precio para calcular el total:</p>

            {/* Botones de tipo de pago */}
            <div className="flex gap-2 mb-4">
            {pricePerNight && (
                <button
                className={`px-4 py-2 rounded-full text-sm font-medium  cursor-pointer ${
                    selectedPrice === "night" ? "bg-red-500 text-white" : "bg-gray-100"
                }`}
                onClick={() => setSelectedPrice("night")}
                >
                Noche
                </button>
            )}
            {pricePerWeek && (
                <button
                className={`px-4 py-2 rounded-full text-sm font-medium  cursor-pointer ${
                    selectedPrice === "week" ? "bg-red-500 text-white" : "bg-gray-100"
                }`}
                onClick={() => setSelectedPrice("week")}
                >
                Semana
                </button>
            )}
            {pricePerMonth && (
                <button
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${
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
            <a
              href={`https://wa.me/4421323281?text=${encodeURIComponent(
                `Hola, quiero reservar la habitación "${title}" por ${renderPrice()}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block bg-red-500 text-white text-center py-3 rounded-full hover:bg-red-600 transition font-medium text-base"
            >
              Reservar ahora
            </a>
        </div>  
    </>
  );
};

export default RoomDetail;
