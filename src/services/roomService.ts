import axios from "axios";
import { Room } from "../interfaces/Room";

const API_URL = "/src/data/rooms.json";

export const getPopularRooms = async (): Promise<Room[]> => {
  try {
    const response = await axios.get<{ rooms: Room[] }>(API_URL);
    return response.data.rooms;
  } catch (error) {
    console.error("Error al obtener los cuartos populares:", error);
    return [];
  }
};
