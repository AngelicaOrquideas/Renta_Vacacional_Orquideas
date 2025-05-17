import { useEffect, useState, useRef } from 'react'
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5'


const RoomGallery = ({ images, title }: { images: string[]; title: string }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isHovering, setIsHovering] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const closeModal = () => setSelectedIndex(null)

  const showPrev = () =>
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1))

  const showNext = () =>
    setSelectedIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0))

  // Cierra con tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Cierra al hacer clic fuera de la imagen
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) closeModal()
  }

  

  return (
    <div className="my-10">
      <h3 className="text-xl font-bold mb-6 pb-2">Galería de la habitación</h3>

      {/* Grid de 5 columnas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedIndex(i)}
          >
            <img
              src={img}
              alt={`Imagen ${i + 1} de la habitación ${title}`}
              className="w-full h-auto rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          ref={modalRef}
          onClick={handleBackdropClick}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="fixed inset-0 z-50 bg-gradient-to-b from-black via-neutral-900 to-black bg-opacity-90 backdrop-blur-md flex items-center justify-center p-4 transition-all"
        >
          {/* Botón cerrar */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl hover:text-red-500 transition z-50 cursor-pointer"
            aria-label="Cerrar"
          >
            <IoClose />
          </button>

          {/* Contador superior */}
          <p className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium z-40">
            Imagen {selectedIndex + 1} de {images.length}
          </p>

          {/* Imagen con animación suave */}
          <img
            key={selectedIndex} // importante para reiniciar animación
            src={images[selectedIndex]}
            alt={`Imagen ${selectedIndex + 1} de la habitación ${title}`}
            className="max-w-[95vw] max-h-[90vh] rounded-2xl shadow-2xl object-contain animate-fade-in"
          />

          {/* Flechas (solo al hacer hover) */}
          {isHovering && (
            <>
              <button
                onClick={showPrev}
                className="absolute left-4 bg-white/10 backdrop-blur-md rounded-full p-2 text-white text-3xl hover:bg-white/20 transition z-50"
                aria-label="Anterior"
              >
                <IoChevronBack />
              </button>
              <button
                onClick={showNext}
                className="absolute right-4 bg-white/10 backdrop-blur-md rounded-full p-2 text-white text-3xl hover:bg-white/20 transition z-50"
                aria-label="Siguiente"
              >
                <IoChevronForward />
              </button>
            </>
          )}

          {/* Miniaturas debajo */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-4">
            {images.map((thumb, idx) => (
              <img
                key={idx}
                src={thumb}
                alt={`Miniatura ${idx + 1} de la habitación ${title}`}
                onClick={() => setSelectedIndex(idx)}
                className={`w-14 h-14 object-cover rounded-md border-2 ${
                  selectedIndex === idx ? 'ring-2 ring-red-500' : 'ring-1 ring-white/20'
                } cursor-pointer transition-all duration-300 hover:scale-110`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default RoomGallery
