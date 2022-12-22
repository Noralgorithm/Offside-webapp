import React from "react";
import Banking from "./Banking";
import FilterPlayer from "./FilterPlayer";

function Storage() {
  return (
    <div className="w-5/12 h-[90%] bg-[#647B80]">
        <header className="w-full bg-[#325D69] h-[15%] flex flex-col justify-center rounded">
          <h1 className="w-2/5 text-center text-[#EFEFEF] text-lg">Almacén de jugadores</h1>
          <FilterPlayer />
        </header>
        <Banking />
    </div>
  );
}

export default Storage;
