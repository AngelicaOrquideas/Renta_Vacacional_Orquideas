// src/App.tsx
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; 
import Whatsapp from "./components/Whatsapp"; 

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* 👈 justo aquí, antes de las rutas */}
      <Navbar />
      <AppRoutes />
      <Footer />
      <Whatsapp />
    </BrowserRouter>
  );
}

export default App;
