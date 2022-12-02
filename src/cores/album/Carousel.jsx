import React from "react";
import Sticker from "../../components/Sticker";

function Carousel() {
  return (
    <div className="h-full w-full flex justify-center">
      <div className="h-full w-1/2 bg-gray-200 rounde flex justify-around">
        <div className="w-1/6">
          <Sticker />
        </div>
        <div className="w-1/6">
          <Sticker />
        </div>
        <div className="w-1/6">
          <Sticker />
        </div>
        <div className="w-1/6">
          <Sticker />
        </div>
        <div className="w-1/6">
          <Sticker />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
