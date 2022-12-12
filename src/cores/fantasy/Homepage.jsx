import React from "react";
import Ranking from "./ranking/Ranking";
import Navbar from "../../components/Navbar";
import Fantasy from "./Fantasy";

export function Homepage() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="w-full h-[92%] flex justify-center items-center">
        <div className="w-11/12 h-[90%] bg-bg-contenedor flex items-center justify-around rounded border-sticker-name border-2">
          <Fantasy />
          <Ranking />
        </div>
      </div>
    </div>
  );
}
