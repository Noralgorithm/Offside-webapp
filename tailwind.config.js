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
        "skyblue-offside": "#8FCCCA",
        "bg-titles" : "#CAC4D0",
        "offside-white": "#EAEAEA",
        "bg-empty": "#76778A",
      },
      backgroundImage: {
        "fondo-barajita": "url('/src/Images/fondo.jpg')",
        "marco-barajita": "url('/src/Images/marco.png')",
        "fondo-homepage-fantasy": "url('/src/Images/fondo-jugador-fantasy.png')",
        "campo-plantilla": "url('/src/Images/campo-fantasy-gray.png')",
        "gradient-offside":"linear-gradient(to bottom, #D13256, #FE5F42)",
        "campo-homepage":"url('/src/Images/campo-fantasy-gray.png')",
        "jugador":"url('/src/Images/jugador.png')",
        "SobreOffside": "url('/src/Images/SobreOffside.png')",
        "AlbumOffside": "url('/src/Images/AlbumOffside.png')"
      },
    },
  },
  plugins: [],
};
