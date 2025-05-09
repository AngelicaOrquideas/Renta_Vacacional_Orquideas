import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Whatsapp from "./components/Whatsapp";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
      <Whatsapp />
    </BrowserRouter>
  );
}

export default App;
