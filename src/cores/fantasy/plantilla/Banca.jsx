import React from "react";
import Almacen from "./Almacen";
import FilterPlayer from "./FilterPlayer";

function Banca() {
  return (
    <div className="bg-white h-full w-full border-sticker-name border-[1px] rounded flex flex-col items-center">
      <header className="flex justify-around w-full">
        <h1 className="text-2xl text-sticker-name font-bold">Banca</h1>
        <FilterPlayer />
      </header>
      <div>
        <Almacen />
      </div>
    </div>
  );
}

export default Banca;
