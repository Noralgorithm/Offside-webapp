import React from "react";
import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Bench from "../bench/Bench";
import Squad from "./Squad";

export function Fantasy() {
  const [showSquad, setShowSquad] = useState(true);
  return (
    <div className="w-screen h-[970px] flex flex-col">
      <Navbar />
      <div className="w-full bg-black bg-opacity-40">
        <h1 className="text-white text-4xl w-1/4 text-center font-bold mt-4">
          Fantasy
        </h1>
        <div className="w-2/5 flex justify-evenly items-end h-1/2 mb-6">
          <button
            className={`text-white font-semibold text-lg px-3 hover:border-b-red-offside hover:border-b-2 ${
              showSquad
                ? "border-b-red-offside border-b-2"
                : "border-b-transparent border-b-0"
            }`}
            onClick={() => {
              setShowSquad(true);
            }}
          >
            Equipo
          </button>
          <button
            className={`text-white font-semibold text-lg px-3 hover:border-b-red-offside hover:border-b-2 ${
              !showSquad
                ? "border-b-red-offside border-b-2"
                : "border-b-transparent border-b-0"
            }`}
            onClick={() => {
              setShowSquad(false);
            }}
          >
            Ranking
          </button>
        </div>
      </div>
      <div className="w-full h-full mt-10">
        {showSquad ? (
          <div className="w-full flex h-full justify-around">
            <Squad />
            <Bench />
          </div>
        ) : (
          <h1>Ranking</h1>
        )}
      </div>
    </div>
  );
}
