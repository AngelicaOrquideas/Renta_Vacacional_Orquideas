# Renta Vacacional Orquídea 🌴🏖️

Sitio web profesional para ofrecer **alojamientos vacacionales en Cancún**, con información de habitaciones, ubicación, descripción del servicio y contacto directo.

🔗 [Visita el sitio web](https://rentavacacionalorquideas.com.mx)

---

## 🛠️ Tecnologías utilizadas

- **React** + **TypeScript**
- **Vite** como bundler
- **Tailwind CSS** para estilos rápidos y responsivos
- **Framer Motion** para animaciones
- **React Router DOM** para navegación entre vistas
- **React Helmet Async** para SEO dinámico
- **Netlify** para despliegue
- **Google Search Console** para indexación y posicionamiento SEO

---

## 📁 Estructura del proyecto

```
/public
  ├── favicon.png
  ├── robots.txt
  ├── sitemap.xml
/src
  ├── components/
  ├── interfaces/
  ├── pages/
  ├── routes/
  ├── services/
  ├── App.tsx
  └── main.tsx
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
