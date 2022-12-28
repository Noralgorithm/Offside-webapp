import React from "react";
import Navbar from "../../../components/Navbar";
import Bench from "../bench/Bench";
import Squad from "./Squad";

export function Fantasy() {
  return (
    <div className="w-screen h-[1172px] flex flex-col">
      <Navbar />
      <div className="w-full bg-black bg-opacity-40 h-[12%]">
        <h1 className="text-white text-4xl w-1/4 text-center font-bold mt-4">
          Fantasy
        </h1>
        <div className="w-2/5 flex justify-evenly items-end h-1/2">
          <button className="text-white font-semibold text-lg px-3 hover:border-b-red-offside hover:border-b-2">
            Equipo
          </button>
          <button className="text-white font-semibold text-lg px-3 hover:border-b-red-offside hover:border-b-2">
            Ranking
          </button>
        </div>
      </div>
      <div className="w-full flex h-full mt-10 justify-around">
        <Squad />
        <Bench />
      </div>
    </div>
  );
}
