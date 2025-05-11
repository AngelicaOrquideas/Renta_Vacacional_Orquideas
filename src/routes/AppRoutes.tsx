import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

// Lazy load de las páginas
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Rooms = lazy(() => import("../pages/Rooms"));
const RoomDetail = lazy(() => import("../pages/RoomDetail"));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/rooms" element={<Rooms />} />
    <Route path="/rooms/:id" element={<RoomDetail />} />
  </Routes>
);

export default AppRoutes;
