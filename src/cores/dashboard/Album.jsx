import React from "react";
import { Link } from "react-router-dom";
import ProgressBarAlbum from "./ProgressBarAlbum";

function Album() {
  return (
    <div className="h-full lg:w-[32%] md:w-[35%] bg-skyblue-offside rounded-lg drop-shadow-xl relative">
      <ProgressBarAlbum />
      <div className="w-full h-full flex items-end bg-AlbumOffside bg-no-repeat bg-[length:60%_70%] bg-[top_1.5rem_left]">
        <div className="h-[45%] w-full bg-white rounded-b-lg flex flex-col justify-around">
          <div className="w-full h-1/2 flex flex-col justify-around ml-7">
            <h1 className="text-offside-titles font-bold">Álbum</h1>
            <h2 className="text-offside-secondary-titles font-semibold">
              Colecciona todos los cromos
            </h2>
          </div>
          <footer className="w-full flex justify-end md:h-1/5 h-2/6 gap-2 px-5">
            <Link
              className="bg-gradient-offside text-white py-2 w-[40%] font-semibold rounded-full flex items-center justify-center mb-2 md:text-sm"
              to="/album"
            >
              Ver álbum
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Album;
