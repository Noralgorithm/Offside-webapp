import React from "react";
import GetChromes from "../get-chromes/GetChromes";
import { useState } from "react";

function DailyPack() {
  const [showDailyPack, setShowDailyPack] = useState(false);
  const [avalaiblePack, setAvailablePack] = useState(true);
  return (
    <div className="h-[45%] w-full bg-skyblue-offside rounded-lg flex items-end bg-SobreOffside bg-no-repeat bg-[length:50%_110%] bg-[center_top_-2rem]">
      {showDailyPack && <GetChromes hideDailyPack={setShowDailyPack} />}
      <div className="h-[45%] w-full bg-white rounded-b-lg flex flex-col justify-around">
        <div className="w-full h-1/2 flex flex-col justify-around ml-7">
          <h1 className="text-offside-titles font-bold">Sobre diario</h1>
          <h2 className="text-offside-secondary-titles font-semibold">
            Desbloqueable en 00:00:00
          </h2>
        </div>
        <footer className="w-full flex justify-end h-2/5">
          <button
            className="bg-gradient-offside text-white py-2 w-4/12 font-semibold rounded-full flex items-center justify-center mr-7 mb-2"
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
