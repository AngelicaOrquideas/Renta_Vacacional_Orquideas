# 🌺 Renta Vacacional Orquídea

Sitio web responsivo para mostrar información de alojamientos vacacionales en Cancún, Quintana Roo.  
Construido con React + TypeScript + Tailwind CSS + Vite.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React 19** – Componentes y navegación SPA
- 🧠 **TypeScript** – Tipado estático y seguridad
- 💨 **Tailwind CSS** – Utilidades de diseño modernas
- ⚡ **Vite** – Empaquetador ultrarrápido
- 📦 **Lazy Loading** – Carga diferida de rutas
- 🎨 **React Icons / Lucide** – Íconos visuales
- 🔁 **Axios** – Peticiones HTTP a servicios
- 📱 **Responsive Design** – Adaptado a todos los dispositivos

---

## 📁 Estructura del proyecto

```bash
src/
├── assets/                  # Imágenes y recursos
├── components/              # Componentes reutilizables
│   ├── common/              # Navbar, Footer, Spinner, etc.
│   ├── room/                # Galería y listado de cuartos
├── data/                    # rooms.json (datos simulados)
├── interfaces/              # Tipos TypeScript
├── pages/                   # Vistas principales (Home, About, Contact, Rooms)
├── routes/                  # Ruteo con React Router
├── services/                # Lógica para traer habitaciones
├── App.tsx                  # Composición principal
├── main.tsx                 # Entrada del proyecto
🛠️ Instalación y ejecución
1. Clona el repositorio
bash
Copiar
Editar
git clone https://github.com/tu-usuario/renta-vacacional-orquidea.git
cd renta-vacacional-orquidea
2. Instala dependencias
bash
Copiar
Editar
npm install
3. Inicia el servidor de desarrollo
bash
Copiar
Editar
npm run dev
Abre tu navegador en http://localhost:5173

🧼 Scripts útiles
bash
Copiar
Editar
npm run dev       # Inicia el servidor local
npm run build     # Genera versión optimizada para producción
npm run preview   # Previsualiza la versión de producción
npm run lint      # (si tienes ESLint activado)
✨ Funcionalidades destacadas
Hero animado y diseño moderno

Carrusel de ubicaciones

Vista detallada por habitación

Filtro dinámico por amenidades

Modo responsive para móviles

Acceso directo a WhatsApp

📌 Notas técnicas
Las rutas están cargadas de forma perezosa (lazy loading) para mejorar el rendimiento.

Se usa Suspense con un spinner visual de Tailwind como fallback.

Los datos de habitaciones provienen de rooms.json, simulando una API real.

📷 Captura de ejemplo


📄 Licencia
Este proyecto está desarrollado con fines demostrativos y educativos.
© 2025 — Renta Vacacional Orquídea