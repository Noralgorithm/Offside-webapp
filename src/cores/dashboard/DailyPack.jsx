import React from "react";
import GetChromes from "../get-chromes/GetChromes";
import { useState } from "react";
import useDailyPack from "./useDailyPack";
import Loading from "../../components/Loading";
import useTimer from "./useTimer";
import AvailableText from "./AvailableText";

function DailyPack({ setShowDailyPack }) {
  
  const { isAvailable, setIsAvailable, loading } = useDailyPack();

  return (
    <div className="h-full md:w-[32%] w-full bg-skyblue-offside rounded-lg flex items-end bg-SobreOffside bg-no-repeat bg-[length:100%_100%] bg-[center_top_-2rem] drop-shadow-xl">
      <div className="h-[45%] w-full bg-white rounded-b-lg flex flex-col justify-around">
        <div className="w-full h-1/2 flex flex-col justify-around ml-7">
          {console.log('renderizado el papa')}
          <h1 className="text-offside-titles font-bold">Sobre diario</h1>
          <h2 className="text-offside-secondary-titles font-semibold">
            <AvailableText isAvailable={isAvailable} setIsAvailable={setIsAvailable} />
          </h2>
        </div>
        <footer className="w-full flex justify-end md:h-1/5 h-2/6">
          <button
            className="bg-gradient-offside text-white py-2 w-4/12 font-semibold rounded-full flex items-center justify-center mr-7 mb-2 md:text-sm"
            onClick={() => setShowDailyPack(true)}
          >
            Reclamar
          </button>
        </footer>
      </div>
    </div>
  );
}

export default DailyPack;
