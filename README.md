# 🌺 Renta Vacacional Orquídea 🌴🏖️

Sitio web profesional para ofrecer **alojamientos vacacionales en Cancún**, con información de habitaciones, ubicación, descripción del servicio y contacto directo.

🔗 [Visita el sitio web](https://rentavacacionalorquideas.com.mx)

---

## 🧰 Tecnologías utilizadas


- ⚛️ **React 19** – Componentes y navegación SPA  
- 🧠 **TypeScript** – Tipado estático y seguridad  
- 💨 **Tailwind CSS** – Utilidades de diseño modernas  
- ⚡ **Vite** – Empaquetador ultrarrápido  
- 📦 **Lazy Loading** – Carga diferida de rutas  
- 🎨 **React Icons / Lucide** – Íconos visuales  
- 🔁 **Axios** – Peticiones HTTP a servicios  
- 📱 **Responsive Design** – Adaptado a todos los dispositivos  
- 🎬 **Framer Motion** – Animaciones fluidas y modernas  
- 🧭 **React Router DOM** – Navegación entre vistas  
- 🔍 **React Helmet Async** – SEO dinámico por ruta  
- ☁️ **Netlify** – Despliegue automático continuo  
- 📈 **Google Search Console** – Indexación y monitoreo SEO

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

<img src="https://live.staticflickr.com/65535/54533206557_82bcf75427_b.jpg" alt="Preview" width="100%" />


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
