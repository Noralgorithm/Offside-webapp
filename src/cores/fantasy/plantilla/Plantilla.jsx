import React from "react";
import FantasyPlayer from "../FantasyPlayer";
import PlantillaCentral from "./PlantillaMedio";

function Plantilla() {
  return (
    <div className="w-3/12 h-[88%] bg-campo-plantilla bg-center bg-contain bg-no-repeat grid grid-rows-4 justify-items-center">
      <header className="w-full flex justify-center">
        <div className="w-[21.1%]">
          <FantasyPlayer />
        </div>
      </header>
      <PlantillaCentral />
      <PlantillaCentral />
      <footer className="flex w-full justify-evenly">
        <div className="w-[22.1%]">
          <FantasyPlayer />
        </div>
        <div className="w-[22.1%]">
          <FantasyPlayer />
        </div>
      </footer>
    </div>
  );
}

export default Plantilla;
