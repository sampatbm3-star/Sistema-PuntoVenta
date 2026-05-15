# 🛒 Sistema Punto de Venta

Proyecto desarrollado con **React + Vite + Styled Components**.

---

## 📦 Dependencias del proyecto

| Paquete | Versión | Uso |
|---|---|---|
| `react` | ^19.2.5 | Librería principal |
| `react-dom` | ^19.2.5 | Renderizado en el DOM |
| `react-router-dom` | ^7.15.0 | Navegación entre páginas |
| `styled-components` | ^6.1.18 | Estilos CSS-in-JS |
| `react-icons` | ^5.6.0 | Iconos |
| `@iconify/react` | ^6.0.2 | Iconos adicionales |

---

## 🚀 Instalación en una nueva computadora

> **Requisitos previos:** Tener instalado [Node.js](https://nodejs.org/) (v18 o superior)

### Paso 1 — Clonar o copiar el proyecto
```bash
# Si usas Git:
git clone <url-del-repositorio>

# O simplemente copia la carpeta del proyecto
```

### Paso 2 — Entrar a la carpeta del proyecto
```bash
cd Sistema-PuntoVenta
```

### Paso 3 — Instalar todas las dependencias
```bash
npm install
```
> Esto lee el `package.json` e instala todo automáticamente. ✅

### Paso 4 — Iniciar el servidor de desarrollo
```bash
npm run dev
```

Abre tu navegador en: **http://localhost:5173**

---

## 📁 Estructura del proyecto

```
Sistema-PuntoVenta/
├── src/
│   ├── components/
│   │   ├── Organismos/
│   │   │   └── sidebar/
│   │   │       └── Sidebar.tsx
│   │   └── Template/
│   │       └── HomeTemplate.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── routers/
│   │   └── Routers.tsx
│   ├── styles/
│   │   ├── GlobalStyles.tsx
│   │   └── breakpoints.ts
│   ├── index.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json      
└── README.md
```

---

## 🔧 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión de producción |
| `npm run preview` | Vista previa del build de producción |
| `npm run lint` | Revisa errores de código |
