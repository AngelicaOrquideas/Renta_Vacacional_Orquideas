import { useState } from "react";
import { FaChevronDown,} from "react-icons/fa";

const faqData = [
  {
    question: "¿Ofrecen descuentos por estancias largas?",
    answer:
      "Sí, ofrecemos tarifas especiales para estancias mayores a una semana. Contáctanos para más detalles.",
  },
  {
    question: "¿Puedo reservar por teléfono o WhatsApp?",
    answer: "Sí, puedes hacer tu reservación directamente vía llamada o WhatsApp.",
  },
  {
    question: "¿Cuáles son los horarios de check-in y check-out?",
    answer: "El check-in es a partir de las 3:00 PM y el check-out es a las 11:00 AM.",
  },
  {
    question: "¿Cómo sé si mi reservación fue confirmada?",
    answer: "Recibirás un correo o mensaje de confirmación con los detalles de tu estancia.",
  },
  {
    question: "¿Qué pasa si deseo cancelar mi reserva?",
    answer:
      "Puedes cancelarla sin cargo hasta 48 horas antes del check-in. Después de ese periodo se aplican cargos.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#F2F2F2] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Preguntas Frecuentes
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Resuelve tus dudas antes de reservar con nosotros. Aquí te dejamos las más comunes.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-300 rounded-xl p-5 shadow-md border ${
                activeIndex === index
                  ? "bg-white border-red-200 shadow-lg"
                  : "bg-white border-gray-200"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full font-semibold text-gray-900 text-left"
              >
                <span>{item.question}</span>
                <span
                  className={`ml-4 transition-transform ${
                    activeIndex === index ? "rotate-180 text-red-500" : "text-gray-400"
                  }`}
                >
                  <FaChevronDown className="text-lg" />
                </span>
              </button>
              {activeIndex === index && (
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
