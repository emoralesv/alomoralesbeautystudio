import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#f6e7df",
        rose: "#d8a8a0",
        rosewood: "#853f32",
        champagne: "#e7cfa9",
        ivory: "#fffaf5",
        ink: "#211b1a",
        cocoa: "#6b4d47",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 70px rgba(65, 42, 35, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
