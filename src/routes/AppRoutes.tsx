import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Rooms from "../pages/Rooms";
import Contact from "../pages/Contact";
import RoomDetail from "../pages/RoomDetail";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Rooms" element={<Rooms />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/rooms/:id" element={<RoomDetail />} />
      {/* Ruta para manejar 404 */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
