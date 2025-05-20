# 🌺 Renta Vacacional Orquídea 🌴🏖️

Sitio web profesional para ofrecer **alojamientos vacacionales en Cancún**, con información de habitaciones, ubicación, descripción del servicio y contacto directo.

🔗 [Visita el sitio web](https://rentavacacionalorquideas.com.mx)

---

## 🚀 Tecnologías utilizadas

### 🧰 Tecnologías utilizadas

<p align="left">
  <a href="https://reactjs.org/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" height="40"/>
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" height="40"/>
  </a>
  <a href="https://vitejs.dev/" target="_blank">
    <img src="https://vitejs.dev/logo.svg" alt="Vite" width="40" height="40"/>
  </a>
  <a href="https://tailwindcss.com/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" width="40" height="40"/>
  </a>
  <a href="https://www.framer.com/motion/" target="_blank">
    <img src="https://raw.githubusercontent.com/framer/logos/main/mark/framer-icon.svg" alt="Framer Motion" width="40" height="40"/>
  </a>
  <a href="https://reactrouter.com/" target="_blank">
    <img src="https://reactrouter.com/favicon-light.png" alt="React Router DOM" width="40" height="40"/>
  </a>
  <a href="https://github.com/staylor/react-helmet-async" target="_blank">
    <img src="https://raw.githubusercontent.com/staylor/react-helmet-async/main/logo.png" alt="Helmet Async" width="40" height="40"/>
  </a>
  <a href="https://www.netlify.com/" target="_blank">
    <img src="https://www.netlify.com/v3/img/components/logomark.png" alt="Netlify" width="40" height="40"/>
  </a>
  <a href="https://search.google.com/search-console" target="_blank">
    <img src="https://www.gstatic.com/images/branding/product/1x/search_console_48dp.png" alt="Google Search Console" width="40" height="40"/>
  </a>
</p>



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
