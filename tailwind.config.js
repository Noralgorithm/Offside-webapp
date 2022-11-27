/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-offside": "#7EA6AE",
        "sticker-name": "#34545D",
      },
      backgroundImage: {
        "fondo-barajita": "url('/src/Images/fondo.jpg')",
        "marco-barajita": "url('/src/Images/marco.png')",
        "jugador" : "url('/src/Images/Captura_de_Pantalla_2022_11_13_a_la_s_8_05_41_a_m_removebg_preview.png')",
      },
    },
  },
  plugins: [],
};
