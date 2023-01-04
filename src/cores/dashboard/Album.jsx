import React from "react";
import { Link } from "react-router-dom";

function Album() {
  return (
    <div className="h-[50%] w-full bg-skyblue-offside rounded-lg flex items-end bg-AlbumOffside bg-no-repeat bg-[length:45%_80%] bg-[center_top]">
      <div className="h-[45%] w-full bg-white rounded-b-lg flex flex-col justify-around">
        <div className="w-full h-1/2 flex flex-col justify-around ml-7">
          <h1 className="text-offside-titles font-bold">Album</h1>
          <h2 className="text-offside-secondary-titles font-semibold">
            Colecciona todos los cromos
          </h2>
        </div>
        <footer className="w-full flex md:justify-end justify-center h-2/5 gap-2">
          <Link className="bg-transparent border-2 border-offside-titles rounded-full md:w-[38%] w-1/2 py-2  text-offside-titles font-bold flex items-center justify-center mb-2">
            Intercambiar cromos
          </Link>
          <Link className="bg-gradient-offside text-white py-2 w-4/12 font-semibold rounded-full flex items-center justify-center mr-7 mb-2" to="/album">
            Ver album
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Album;
