import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import FantasyPlayer from "../FantasyPlayer";

function Almacen() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="flex h-full w-full justify-between items-center p-1">
      <IoIosArrowBack
        size="1.5rem"
        className="bg-red-offside rounded-full text-gray-100 cursor-pointer hover:bg-red-800"
      />
      <div className="grid grid-cols-4 h-full w-4/5 gap-2">
        {a.map((a) => {
          return (
            <div className="">
              <FantasyPlayer />
            </div>
          );
        })}
      </div>
      <IoIosArrowForward
        size="1.5rem"
        className="bg-red-offside rounded-full text-gray-100 cursor-pointer hover:bg-red-800"
      />
    </div>
  );
}

export default Almacen;
