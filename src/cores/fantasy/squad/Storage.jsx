import React from "react";
import Banking from "./Banking";

function Storage() {
  return (
    <div className="w-5/12 h-[90%] bg-[#647B80]">
        <header className="w-full bg-[#829498] h-[7%] flex items-center">
          <h1 className="w-2/5 text-center text-[#EFEFEF]">Almacén de jugadores</h1>
        </header>
        <Banking />
    </div>
  );
}

export default Storage;
