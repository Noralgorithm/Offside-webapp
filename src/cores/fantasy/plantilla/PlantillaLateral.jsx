import React from "react";
import Banca from "./Banca";

function PlantillaLateral() {
  return (
    <div className="w-5/12 h-[90%] flex flex-col items-center gap-y-4">
      <header className="flex w-full justify-evenly">
        <h1 className="text-3xl text-sticker-name font-bold">Fantasy</h1>
        <button className="bg-red-offside px-2 rounded text-white font-semibold hover:bg-red-800">
          Ver puntajes
        </button>
      </header>
      <h2 className="text-center text-3xl text-sticker-name font-semibold">
        ¡Arma tu equipo!
      </h2>
      <Banca />
    </div>
  );
}

export default PlantillaLateral;
