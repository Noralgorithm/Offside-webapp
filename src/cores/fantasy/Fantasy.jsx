import React, { useEffect } from "react";
import { useState } from "react";
import Bench from "./bench/Bench";
import Squad from "./squad/Squad";
import Ranking from "./ranking/Ranking";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../features/fantasy/fantasySlice";

export function Fantasy() {
  const [showSquad, setShowSquad] = useState(true);
  const dispatch = useDispatch();

  const FantasyStyles = showSquad ? "w-screen md:h-[900px] sm:h-[1580px] h-[1390px] flex flex-col" : "w-screen md:h-screen flex flex-col h-[900px]"; 

  useEffect(() => {
    return () => {
      dispatch(resetFilters());
    };
  }, [dispatch]);

  return (
    <div className={FantasyStyles}>
      <div className="w-full bg-bg-titles bg-opacity-60">
        <h1 className="text-offside-titles text-4xl w-1/4 text-center font-bold mt-4">
          Fantasy
        </h1>
        <div className="w-2/5 flex justify-evenly items-end h-1/2 mb-6 text-offside-titles">
          <button
            className={`font-semibold text-lg px-3 hover:border-b-red-offside hover:border-b-2 ${
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
            className={`font-semibold text-lg px-3 hover:border-b-red-offside hover:border-b-2 ${
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
      <div className={`w-full h-full ${showSquad ? "mt-10" : "mt-2"}`}>
        {showSquad ? (
          <div className="w-full h-[98%] flex md:flex-row flex-col md:h-full md:justify-around items-center justify-around md:items-start">
            <Squad />
            <Bench />
          </div>
        ) : (
          <Ranking />
        )}
      </div>
    </div>
  );
}
