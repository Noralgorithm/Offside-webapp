import React from "react";
import StickersCounter from "./StickersCounter";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function AlbumHeader() {
  return (
    <header className="h-full w-full flex items-center justify-around text-gray-100">
      <IoIosArrowBack
        size="2rem"
        className="cursor-pointer rounded-full hover:bg-black hover:bg-opacity-40"
      />
      <p className="text-xl font-semibold">España</p>
      <StickersCounter />
      <IoIosArrowForward
        size="2rem"
        className="cursor-pointer rounded-full hover:bg-black hover:bg-opacity-40"
      />
    </header>
  );
}

export default AlbumHeader;
