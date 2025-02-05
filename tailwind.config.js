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
        bug: "hsl(var(--bug))",
        dark: "hsl(var(--dark))",
        dragon: "hsl(var(--dragon))",
        electric: "hsl(var(--electric))",
        fairy: "hsl(var(--fairy))",
        fighting: "hsl(var(--fighting))",
        fire: "hsl(var(--fire))",
        flying: "hsl(var(--flying))",
        ghost: "hsl(var(--ghost))",
        grass: "hsl(var(--grass))",
        ground: "hsl(var(--ground))",
        ice: "hsl(var(--ice))",
        normal: "hsl(var(--normal))",
        poison: "hsl(var(--poison))",
        psychic: "hsl(var(--psychic))",
        rock: "hsl(var(--rock))",
        steel: "hsl(var(--steel))",
        water: "hsl(var(--water))",
      },
      keyframes: {
        "hearth-on": {
          "0%": {
            transform: "scale(0)",
          },
          "20%": { transform: "scale(0.5)" },
          "50%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "hearth-on": "hearth-on 0.4s ",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
