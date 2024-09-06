/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "rgba(247, 247, 247, 1)",
        "logo-color": "rgba(1, 71, 255, 1)",
        "text-color": " rgba(40, 40, 40, 1)",
        "text-color-2": " rgba(29, 29, 27, 1)",
        "vector-color": "rgba(217, 220, 213, 1)",
      },
    },
  },
  plugins: [],
};
