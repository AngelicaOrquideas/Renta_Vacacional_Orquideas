import { FC, useEffect, useState } from "react";
import { Room } from "../../interfaces/Room";
import { getPopularRooms } from "../../services/roomService";
import RoomCard from "../common/cards/RoomCard";

const FILTERS = [
  { key: "all", label: "Todos" },
  { key: "pool", label: "Con Alberca" },
  { key: "full", label: "Completos" },
  { key: "empty", label: "Vacíos" }
];

const RoomListSection: FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    getPopularRooms().then(setRooms);
  }, []);

  const filteredRooms = rooms.filter((room) => {
    switch (activeFilter) {
      case "pool":
        return room.features.pool === true;
      case "full":
        return (
          room.features.wifi &&
          room.features.airConditioning &&
          room.features.beds >= 2 &&
          room.features.guests > 0
        );
      case "empty":
        return room.features.beds === 0 || room.features.guests === 0;
      default:
        return true;
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Filtro tipo botón */}
      <div className="flex flex-wrap justify-center gap-4 mb-10 ">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key)}
            className={`px-4 py-2 rounded-full font-semibold border transition-all cursor-pointer ${
              activeFilter === key
                ? "bg-red-500 text-white shadow"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Cards de habitaciones */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRooms.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
    </div>
  );
};

export default RoomListSection;
