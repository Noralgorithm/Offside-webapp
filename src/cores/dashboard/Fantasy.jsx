import React from "react";
import { Link } from "react-router-dom";

function Fantasy() {
  return (
    <div className="h-5/6 w-full bg-gradient-offside rounded-lg flex items-end">
      <div className="h-1/2 w-full bg-white rounded-b-lg flex flex-col justify-around">
        <div className="w-full h-1/2 flex flex-col justify-around ml-7">
          <h1 className="text-offside-titles font-bold">Fantasy</h1>
          <h2 className="text-offside-secondary-titles font-semibold">
            Arma tu equipo ideal
          </h2>
        </div>
        <footer className="w-full h-1/4 flex justify-end">
          <div className="w-3/4 h-3/4 flex justify-center gap-4">
            <Link className="bg-transparent border-2 border-offside-titles rounded-full w-5/12 py-2 text-offside-titles font-bold flex items-center justify-center">
              Ver subastas
            </Link>
            <Link className="bg-gradient-offside text-white py-2 w-5/12 font-semibold rounded-full flex items-center justify-center">
              Ver plantilla
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Fantasy;
