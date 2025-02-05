# PokéShop

La aplicacion esta desplegada en GitHub Pages, visitala en vivo: [PokéShop](https://islucobian.github.io/PokeShop/).

## Descripción

PokéShop es una tienda en línea de Pokémon donde los usuarios pueden buscar, ver detalles y comprar Pokémon. La aplicación consume la [PokéAPI](https://pokeapi.co/).

## 🚀 Tecnologías Utilizadas

- **Vite** - Entorno de desarrollo rápido para React

- **React + TypeScript** - Desarrollo modular y tipado seguro

- **React Query** - Optimización del fetching y gestión de caché.

- **Redux Toolkit** - Manejo eficiente del estado global

- **TailwindCSS** - Estilizado mediante clases

- **ShadCN** - Componentes UI reutilizables

- **React Router** - Manejo de rutas en la aplicación

## Instalación y Ejecución

1. Clona el repositorio:

```sh

git clone https://github.com/IsluCobian/pokeshop.git

cd pokeshop

```

2. Instala las dependencias:

```sh

pnpm install

```

3. Ejecuta el entorno de desarrollo:

```sh

pnpm run dev

```

## Arquitectura del proyecto

```sh
├───public/                # Archivos estáticos
└───📦 src/
│    ├─── 📂assets/            # Imágenes, íconos, fuentes, etc.
│    ├─── 📂 components/        # Componentes reutilizables
│    │   └─── 📂 ui/            # Componentes UI personalizados con ShadCN
│    ├─── 📂 hooks/             # Hooks personalizados
│    ├─── 📂 lib/               # Lógica de negocio (cálculos)
│    ├─── 📂 pages/             # Páginas principales
│    ├─── 📂 store/             # Redux Toolkit
│    ├─── 📂 tests/             # Pruebas unitarias e integración
│    │   └─── 📂 reducers/      # Pruebas de reducers de Redux
│    └─── 📂 types/             # Tipos de TypeScript
├── 📜 main.tsx # Definición de rutas y estructura principal
├── 📜 App.tsx # Pagina Principal
```

## 🔍 Justificación de Decisiones Técnicas

### ✅ **Uso de React Query**

Se utilizó **React Query** para el manejo de fetching porque:

- **Optimiza el rendimiento**: Usa **caché** para evitar múltiples peticiones innecesarias.
- **Reduce re-renders**: Solo actualiza los componentes cuando los datos cambian.
- **Refetching automático**: Mantiene los datos siempre actualizados en segundo plano.

Ejemplo de uso en la aplicación:

```ts
const { data, isLoading, error } = useQuery({
  queryKey: ["pokemonList"],
  queryFn: fetchPokemonList,
  staleTime: 1000 * 60 * 5, // 5 minutos de caché
});
```

### ✅ **Uso de ShadCN**

Se usó **ShadCN** en lugar de librerías como MUI o Bootstrap porque:

- **Es más liviano** y permite personalizar componentes sin añadir estilos extra.
- **Mejor integración con TailwindCSS**, facilitando la coherencia en el diseño.
- **Componentes accesibles**, mejorando la UX para todos los usuarios.

## 🔧 Mejoras Potenciales

**Mejoras de Diseño**:

- **Feedback Visual**: Indicadores de éxito (por ejemplo, animaciones de "añadido al carrito").

- **Accesibilidad**: Mejorar el contraste y la navegación con teclado.

- **Scroll Infinito para Listados de Productos**: Considerar implementar scroll infinito para cargar más Pokémon conforme el usuario se desplaza por la página. Aumentando el engagement del usuario.
