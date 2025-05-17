import { FC } from "react";
import { Room } from "../../../interfaces/Room";
import { FaBed, FaWifi, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const RoomCard: FC<Room> = ({ id, title, images, pricePerNight, features, description }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/rooms/${id}`)}
      className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-sm flex flex-col"
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-sm flex flex-col">
        <img
          src={images[0]}
          alt={`Foto de la habitación "${title}" disponible en Cancún`}
          className="w-full h-48 object-cover"
        />

        <div className="p-5 flex flex-col justify-between flex-grow">
          {/* Título y descripción */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{title}</h3>
            <p className="text-sm text-gray-500 line-clamp-2 mt-1">{description}</p>
          </div>

          {/* Detalles del cuarto */}
          <div className="flex items-center justify-between text-sm text-gray-600 mt-3">
            <span className="flex items-center gap-1">
              <FaUsers /> {features.guests} huéspedes
            </span>
            <span className="flex items-center gap-1">
              <FaBed /> {features.beds} camas
            </span>
            {features.wifi && (
              <span className="flex items-center gap-1">
                <FaWifi /> Wifi
              </span>
            )}
          </div>


          {/* Precio y botón */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-gray-800 font-bold text-base">
              ${pricePerNight}
              <span className="text-sm font-normal text-gray-500"> /noche</span>
            </p>
            <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-full hover:bg-red-600 transition">
              Reservar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
