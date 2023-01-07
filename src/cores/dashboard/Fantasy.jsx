import React from "react";
import { Link } from "react-router-dom";

function Fantasy() {
  return (
    <div className="h-full md:w-[32%] bg-skyblue-offside rounded-lg bg-campo-homepage bg-no-repeat bg-[length:70%_80%] bg-[center] drop-shadow-xl flex items-end">
      <div className="h-[45%] w-full bg-white rounded-b-lg flex flex-col justify-around">
        <div className="w-full h-1/2 flex flex-col justify-around ml-7">
          <h1 className="text-offside-titles font-bold">Fantasy</h1>
          <h2 className="text-offside-secondary-titles font-semibold">
            Arma tu equipo ideal
          </h2>
        </div>
        <footer className="w-full md:h-1/5 h-2/6 flex justify-end">
          <div className="w-full h-3/4 flex justify-center gap-4">
            <Link className="bg-transparent border-2 border-offside-titles rounded-full w-5/12 py-2 text-offside-titles font-bold flex items-center justify-center md:text-sm">
              Ver subastas
            </Link>
            <Link
              className="bg-gradient-offside text-white py-2 w-5/12 font-semibold rounded-full flex items-center justify-center md:text-sm"
              to="/fantasy"
            >
              Ver plantilla
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Fantasy;
