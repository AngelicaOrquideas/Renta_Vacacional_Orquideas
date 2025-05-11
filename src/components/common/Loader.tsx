import { PulseLoader } from "react-spinners";
import { FaSpa } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#fef9f4] via-[#fff5ec] to-[#fdf1e9] text-[#8b3a2d] px-4">
      <div className="mb-4 animate-bounce-slow">
        <FaSpa className="text-6xl md:text-7xl text-[#a855f7]" />
      </div>
      <PulseLoader size={16} color="#a855f7" />
      <p className="mt-6 text-lg md:text-xl font-semibold text-center animate-pulse">
        Cargando tu experiencia en Orquídeas Cancún...
      </p>
    </div>
  );
};

export default Loader;
