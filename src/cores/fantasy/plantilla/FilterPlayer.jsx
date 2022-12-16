import React from "react";
import { IoSearchCircle, IoOptionsOutline } from "react-icons/io5";

function FilterPlayer() {
  return (
    <label className="rounded-full bg-stone-300 w-1/2 h-6 flex items-center justify-between text-xl">
      <IoSearchCircle
        size="2rem"
        color="#63130B"
        onClick=""
        className="cursor-pointer"
      />
      <input
        type="text"
        className="rounded-full h-full bg-stone-300 text-center text-base"
      />
      <IoOptionsOutline size="26px" color="black" />
    </label>
  );
}

export default FilterPlayer;
