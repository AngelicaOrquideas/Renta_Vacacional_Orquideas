# 🌺 Renta Vacacional Orquídea 🌴🏖️

Sitio web profesional para ofrecer **alojamientos vacacionales en Cancún**, con información de habitaciones, ubicación, descripción del servicio y contacto directo.

🔗 [Visita el sitio web](https://rentavacacionalorquideas.com.mx)

---

## 🚀 Tecnologías utilizadas

### 🧰 Tecnologías utilizadas

<h3 align="center">🛠️ Tecnologías utilizadas</h3>

<p align="center">
  <a href="https://reactjs.org/" target="_blank" title="React">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" height="40" alt="React" />
  </a>
  &nbsp;
  <a href="https://www.typescriptlang.org/" target="_blank" title="TypeScript">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" height="40" alt="TypeScript" />
  </a>
  &nbsp;
  <a href="https://vitejs.dev/" target="_blank" title="Vite">
    <img src="https://vitejs.dev/logo.svg" width="40" height="40" alt="Vite" />
  </a>
  &nbsp;
  <a href="https://tailwindcss.com/" target="_blank" title="Tailwind CSS">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="40" height="40" alt="Tailwind CSS" />
  </a>
  &nbsp;
  <a href="https://www.framer.com/motion/" target="_blank" title="Framer Motion">
    <img src="https://raw.githubusercontent.com/framer/logos/main/mark/framer-icon.svg" width="40" height="40" alt="Framer Motion" />
  </a>
  &nbsp;
  <a href="https://reactrouter.com/" target="_blank" title="React Router DOM">
    <img src="https://reactrouter.com/favicon-light.png" width="40" height="40" alt="React Router DOM" />
  </a>
  &nbsp;
  <a href="https://github.com/staylor/react-helmet-async" target="_blank" title="React Helmet Async">
    <img src="https://raw.githubusercontent.com/staylor/react-helmet-async/main/logo.png" width="40" height="40" alt="Helmet Async" />
  </a>
  &nbsp;
  <a href="https://www.netlify.com/" target="_blank" title="Netlify">
    <img src="https://www.netlify.com/v3/img/components/logomark.png" width="40" height="40" alt="Netlify" />
  </a>
  &nbsp;
  <a href="https://search.google.com/search-console" target="_blank" title="Google Search Console">
    <img src="https://www.gstatic.com/images/branding/product/1x/search_console_48dp.png" width="40" height="40" alt="Google Search Console" />
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
