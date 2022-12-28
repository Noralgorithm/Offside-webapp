import React from "react";
import Defenders from "./Defenders";
import GoalKeeper from "./GoalKeeper";
import Midfielders from "./Midfielders";
import Strikers from "./Strikers";

function Squad() {
  return (
    <div className="w-5/12 h-full">
      <div className="bg-[#325D69] h-[8%] flex items-center justify-around rounded-t">
        <h1 className="text-white text-xl">Plantilla de jugadores</h1>
        <h1 className="bg-red-offside text-white text-lg font-bold py-2 px-5 rounded">
          180 PTS
        </h1>
      </div>
      <div className="w-full h-[84%] bg-campo-plantilla bg-center bg-contain bg-no-repeat flex flex-col justify-around items-center">
        <GoalKeeper />
        <Defenders />
        <Midfielders />
        <Strikers />
      </div>
    </div>
  );
}

export default Squad;
