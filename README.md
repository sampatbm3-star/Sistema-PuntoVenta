# 🛒 Sistema Punto de Venta

Proyecto desarrollado con **React + Vite + Styled Components + Supabase**.

---

## 📦 Tecnologías y Dependencias

| Paquete | Uso |
|---|---|
| `react` & `react-dom` | Librería principal y renderizado |
| `react-router-dom` | Navegación entre páginas y rutas protegidas |
| `styled-components` | Estilos CSS-in-JS |
| `zustand` | Manejo de estado global (Stores) |
| `@supabase/supabase-js` | Base de datos (PostgreSQL), Autenticación y Backend as a Service |
| `sweetalert2` | Alertas dinámicas y modales |
| `react-icons` & `@iconify/react` | Iconos |

---

## 🚀 Instalación en una nueva computadora

> **Requisitos previos:** Tener instalado [Node.js](https://nodejs.org/) (v18 o superior) y [pnpm](https://pnpm.io/es/).

### Paso 1 — Clonar o copiar el proyecto
```bash
# Si usas Git:
git clone https://github.com/sampatbm3-star/Sistema-PuntoVenta.git
```

### Paso 2 — Entrar a la carpeta del proyecto
```bash
cd Sistema-PuntoVenta
```

### Paso 3 — Instalar todas las dependencias
Este proyecto utiliza `pnpm` en lugar de `npm` como gestor de paquetes.
```bash
pnpm install
```
> Esto lee el `package.json` e instala todo automáticamente de manera más rápida. ✅

### Paso 4 — Configurar Variables de Entorno (Supabase)
Crea un archivo `.env.local` en la raíz del proyecto y añade tus credenciales de Supabase:
```env
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_anon_key_de_supabase
```

### Paso 5 — Iniciar el servidor de desarrollo
```bash
pnpm dev
```

Abre tu navegador en: **http://localhost:5173**

---

## 📁 Estructura Principal del Proyecto

```
Sistema-PuntoVenta/
├── src/
│   ├── components/      # Componentes UI (átomos, moléculas, organismos, templates)
│   ├── context/         # Contextos globales (ej. AuthContext para validar sesión)
│   ├── hooks/           # Custom hooks (ej. Rutas protegidas)
│   ├── pages/           # Páginas de la aplicación (Home, Login)
│   ├── routers/         # Configuración de React Router
│   ├── store/           # Estados globales con Zustand (AuthStore, EmpresaStore)
│   ├── styles/          # Estilos globales, temas (claro/oscuro) y variables
│   ├── supabase/        # Configuración y operaciones CRUD de la base de datos
│   ├── utils/           # Utilidades y datos estáticos
│   ├── index.ts         # Archivo de barril (exports centralizados)
│   ├── App.tsx          # Componente padre
│   └── main.tsx         # Punto de entrada de la aplicación
├── index.html
├── package.json      
└── README.md
```

---

## 🔧 Scripts disponibles

| Comando | Descripción |
|---|---|
| `pnpm dev` | Inicia el servidor de desarrollo local |
| `pnpm build` | Genera la versión para producción |
| `pnpm preview` | Muestra una vista previa del build generado |
| `pnpm lint` | Revisa errores de código mediante ESLint |
