import { useRef, useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const locations = [
  {
    name: "California Habitación 101",
    address: "California, Cancún - Quintana Roo",
    image: "https://live.staticflickr.com/65535/54475877739_d93bc31366_z.jpg", // imagen principal o nueva hero
    link: "https://maps.app.goo.gl/bAab8xoNzjg91iYd9"
  },  
  {
    name: "Jardines del Sur",
    address: "Zona hotelera - Cancún, Quintana Roo",
    image: "https://img10.naventcdn.com/avisos/18/01/42/72/42/53/720x532/1439085673.jpg?isFirstImage=true",
    link: "https://maps.app.goo.gl/REUZiNLxqzftrBnr9",
  },
  {
    name: "Casa de El Pedregal",
    address: "Puerto Cancún - Cancún, Quintana Roo",
    image: "https://casa-campestre-premium-bed-breakfast.hotels-quintana-roo.com/data/Pictures/OriginalPhoto/7790/779042/779042643/picture-cancun-casa-campestre-premium-bed-breakfast-27.JPEG",
    link: "https://maps.app.goo.gl/REUZiNLxqzftrBnr9",
  },
  {
    name: "Apartamento Orquídea 1",
    address: "Zona centro - Cancún, Quintana Roo",
    image: "https://imganuncios.mitula.net/quillota_chacabuco_960_2970002736000764554.jpg",
    link: "https://maps.app.goo.gl/REUZiNLxqzftrBnr9",
  },
  {
    name: "Jardines del Sur",
    address: "Zona hotelera - Cancún, Quintana Roo",
    image: "https://img10.naventcdn.com/avisos/18/01/42/72/42/53/720x532/1439085673.jpg?isFirstImage=true",
    link: "https://maps.app.goo.gl/REUZiNLxqzftrBnr9",
  },
  {
    name: "Casa de El Pedregal",
    address: "Puerto Cancún - Cancún, Quintana Roo",
    image: "https://casa-campestre-premium-bed-breakfast.hotels-quintana-roo.com/data/Pictures/OriginalPhoto/7790/779042/779042643/picture-cancun-casa-campestre-premium-bed-breakfast-27.JPEG",
    link: "https://maps.app.goo.gl/REUZiNLxqzftrBnr9",
  },
  // Puedes agregar más
];

const LocationsCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        setShowLeftArrow(scrollRef.current.scrollLeft > 10);
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
    }

    return () => {
      if (container) container.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <section className="bg-white py-20 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestras ubicaciones</h2>
          <p className="text-gray-500 mt-4 md:mt-0 max-w-lg">
            Descubre dónde están ubicados nuestros alojamientos. Lugares estratégicos, accesibles y acogedores en Cancún.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative">
          {/* Botón Izquierda */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="hidden sm:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-full shadow-md z-10"
            >
              <FaArrowLeft />
            </button>
          )}

          {/* Botón Derecha */}
          <button
            onClick={() => scroll("right")}
            className="hidden sm:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-full shadow-md z-10"
          >
            <FaArrowRight />
          </button>

          {/* Contenedor Scrollable */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
          >
            {locations.map((loc, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-xs flex-shrink-0 relative rounded-xl overflow-hidden shadow-md group cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-96 object-cover"
                />
                {/* Overlay degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col justify-end">
                  <h3 className="text-white font-semibold text-lg">{loc.name}</h3>
                  <p className="text-white text-sm">{loc.address}</p>
                  <a
                    href={loc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red-300 hover:underline mt-1"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsCards;
