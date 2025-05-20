# 🌺 Renta Vacacional Orquídea 🌴🏖️

Sitio web profesional para ofrecer **alojamientos vacacionales en Cancún**, con información de habitaciones, ubicación, descripción del servicio y contacto directo.

🔗 [Visita el sitio web](https://rentavacacionalorquideas.com.mx)

---

## 🚀 Tecnologías utilizadas

### 🧰 Tecnologías utilizadas

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB&style=flat)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=flat)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=flat)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?logo=framer&logoColor=white&style=flat)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white&style=flat)
![Helmet Async](https://img.shields.io/badge/Helmet-121212?logo=react&logoColor=white&style=flat)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white&style=flat)
![Google Search Console](https://img.shields.io/badge/Google_Search_Console-4285F4?logo=google&logoColor=white&style=flat)


---

## 📁 Estructura del proyecto

```
public/
  ├── favicon.png           # Ícono del sitio web que se muestra en las pestañas del navegador (favicon).
  ├── robots.txt            # Archivo que indica a los motores de búsqueda qué URLs pueden rastrear.
  ├── sitemap.xml           # Mapa del sitio en formato XML para ayudar a los motores de búsqueda indexar las páginas correctamente.
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
```

---

## 🛠️ Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/AngelicaOrquideas/Renta_Vacacional_Orquideas.git
cd Renta_Vacacional_Orquideas
```

### 2. Instala dependencias

```bash
npm install
```

### 3. Inicia el servidor de desarrollo

```bash
npm run dev
```

4. Genera el build de producción:

```bash
npm run build
```

---

## ✅ Optimización SEO

- Se usan etiquetas `<Helmet>` para personalizar el `title`, `meta description` y `og:image` por página.
- Se implementó `robots.txt` y `sitemap.xml`.
- El sitio está **indexado en Google Search Console**.
- Las imágenes están siendo detectadas por **Google Imágenes**.

---

## 📷 Vista previa

![Preview](https://rentavacacionalorquideas.com.mx/preview.jpg) <!-- Puedes agregar una imagen personalizada -->

---

## 📌 Características principales

- 📍 Ubicación: Cancún, Quintana Roo.
- 🛏️ Sección de habitaciones con descripción y galería.
- 📱 Totalmente responsive.
- 📧 Contacto directo a través de WhatsApp y redes sociales.

---

## ✨ Funcionalidades destacadas

- Hero animado y diseño moderno
- Carrusel de ubicaciones
- Vista detallada por habitación
- Filtro dinámico por amenidades
- Modo responsive para móviles
- Acceso directo a WhatsApp

---

## 📌 Notas técnicas

- Las rutas están **cargadas de forma perezosa (lazy loading)** para mejorar el rendimiento.
- Se usa `Suspense` con un spinner visual de Tailwind como `fallback`.
- Los datos de habitaciones provienen de `rooms.json`, simulando una API real.

---

## 👩‍💻 Autor

**Angelica Orquídea**  
[Renta Vacacional Orquídea](https://rentavacacionalorquideas.com.mx)

---

## 📄 Licencia

Este proyecto es de uso personal/comercial. No redistribuir sin autorización.
