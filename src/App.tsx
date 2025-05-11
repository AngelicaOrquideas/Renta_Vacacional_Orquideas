import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Whatsapp from "./components/Whatsapp";
import AppRoutes from "./routes/AppRoutes";
import { Suspense } from "react";
import Loader from "./components/common/Loader";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Suspense>
      <Whatsapp />
    </BrowserRouter>
  );
}

export default App;
