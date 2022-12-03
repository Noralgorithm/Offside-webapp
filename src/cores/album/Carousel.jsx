import React from "react";
import Sticker from "../../components/Sticker";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Carousel() {
  const jugadores = [1, 2, 3, 4, 5];
  return (
    <div className="h-full w-full flex justify-center">
      <div className="h-full w-7/12 bg-gray-200 rounded flex justify-around">
        <div className="h-full flex items-center">
          <IoIosArrowBack
            size="1.5rem"
            className="bg-offsideColorWine rounded-full text-gray-100 cursor-pointer hover:bg-red-800"
          />
        </div>
        {jugadores.map(() => (
          <div className="w-1/6 cursor-pointer" onClick={() => {}}>
            <Sticker fontSize={["4px", "10px"]} />
          </div>
        ))}
        <div className="h-full flex items-center">
          <IoIosArrowForward
            size="1.5rem"
            className="bg-offsideColorWine rounded-full text-gray-100 cursor-pointer hover:bg-red-800"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
