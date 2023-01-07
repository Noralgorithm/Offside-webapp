import React from "react";
import { Link } from "react-router-dom";

function Album() {
  return (
    <div className="h-full lg:w-[32%] md:w-[35%] bg-skyblue-offside rounded-lg flex items-end bg-AlbumOffside bg-no-repeat bg-[length:90%_80%] bg-[center_top] drop-shadow-xl">
      <div className="h-[45%] w-full bg-white rounded-b-lg flex flex-col justify-around">
        <div className="w-full h-1/2 flex flex-col justify-around ml-7">
          <h1 className="text-offside-titles font-bold">Album</h1>
          <h2 className="text-offside-secondary-titles font-semibold">
            Colecciona todos los cromos
          </h2>
        </div>
        <footer className="w-full flex justify-center md:h-1/5 h-2/6 gap-2 px-1">
          <Link className="bg-transparent border-2 border-offside-titles rounded-full w-1/2 py-2 text-offside-titles font-bold flex items-center justify-center mb-2 lg:text-sm md:text-xs text-sm">
            Intercambiar cromos
          </Link>
          <Link className="bg-gradient-offside text-white py-2 w-1/2 font-semibold rounded-full flex items-center justify-center mb-2 md:text-sm" to="/album">
            Ver album
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Album;
