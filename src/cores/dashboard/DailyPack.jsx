import React from "react";
import AvailableText from "./AvailableText";

function DailyPack({ setShowDailyPack, isAvailable, setIsAvailable }) {
  return (
    <div
      className={`h-full md:w-[32%] w-full ${
        isAvailable ? "bg-skyblue-offside bg-SobreOffside" : "bg-[#808080] bg-SobreOffsideDeshabilitado"
      } rounded-lg flex items-end bg-no-repeat bg-[length:100%_100%] bg-[center_top_-2rem] drop-shadow-xl`}
    >
      <div className="h-[45%] w-full bg-white rounded-b-lg flex flex-col justify-around">
        <div className="w-full h-1/2 flex flex-col justify-around ml-7">
          <h1 className="text-offside-titles font-bold">Sobre diario</h1>
          <h2 className="text-offside-secondary-titles font-semibold">
            <AvailableText
              isAvailable={isAvailable}
              setIsAvailable={setIsAvailable}
            />
          </h2>
        </div>
        <footer className="w-full flex justify-end md:h-1/5 h-2/6">
          <button
            className={`py-2 w-4/12 font-semibold rounded-full flex items-center justify-center mr-7 mb-2 md:text-sm ${
              isAvailable
                ? "bg-gradient-offside text-white "
                : "bg-[#3D405B] bg-opacity-40 text-offside-titles opacity-60"
            }`}
            onClick={() => setShowDailyPack(true)}
            disabled={!isAvailable}
          >
            Reclamar
          </button>
        </footer>
      </div>
    </div>
  );
}

export default DailyPack;
