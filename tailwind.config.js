/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    screens: {
      sm: "767px",
      md: "1024px",
      lg: "1400px",
    },
    extend: {
      colors: {
        "regal-blue": "#b91c1c",
        primary: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        incomplete: "#f59e0b",
        pending: "",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
      },
    },
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
};
