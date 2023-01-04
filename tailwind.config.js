/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "offsideColorWine": "#B02419",
        "offsideColorWineDark": "#63130B",
        "sticker-name": "#34545D",
        "bg-offside" : "#7EA6AE",
        "bg-contenedor": "#EFEFEF",
        "red-offside": "#B02419",
        "offside-titles": "#3D405B",
        "offside-secondary-titles": "#808080",

      },
      backgroundImage: {
        "fondo-barajita": "url('/src/Images/fondo.jpg')",
        "marco-barajita": "url('/src/Images/marco.png')",
        "fondo-homepage-fantasy": "url('/src/Images/fondo-jugador-fantasy.png')",
        "campo-plantilla": "url('/src/Images/campo-fantasy.jpg')",
        "gradient-offside":"linear-gradient(to bottom, #D13256, #FE5F42)", 
      },
    },
  },
  plugins: [],
};
