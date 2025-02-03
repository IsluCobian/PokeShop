/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        // Pokemon types colors
        fire: "#FDE068", // Amarillo anaranjado
        water: "#4E81FF", // Azul
        grass: "#62BC6E", // Verde hierba
        electric: "#F9E24E", // Amarillo
        psychic: "#F2A0A1", // Rosa
        dragon: "#3D7BF0", // Azul intenso
        ghost: "#5F5F9E", // Morado oscuro
        fairy: "#F4A6E0", // Rosa claro
        poison: "#9B5B94", // Violeta
        bug: "#C9E900", // Verde limón
        normal: "#A8A77A", // Gris oliva
        ground: "#EBD69D", // Beige
        fighting: "#F93D34", // Rojo
        dark: "#705848", // Marrón oscuro
        steel: "#B8B8D0", // Gris azulado
        ice: "#6FB9D2", // Azul hielo
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
