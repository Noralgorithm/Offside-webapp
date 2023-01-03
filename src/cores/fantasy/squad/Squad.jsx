import React, { useEffect } from "react";
import Defenders from "./Defenders";
import GoalKeeper from "./GoalKeeper";
import Midfielders from "./Midfielders";
import Strikers from "./Strikers";
import useSquad from "./useSquad";

function Squad() {
  const { players, fetchSquadInfo, insertPlayer, removePlayer } = useSquad();

  useEffect(() => {
    console.log('equisde')
    fetchSquadInfo();
  }, [fetchSquadInfo]);

  return (
    <div className="w-5/12 h-full">
      {console.log('holaD')}
      <div className="bg-[#325D69] h-[8%] flex items-center justify-around rounded-t">
        <h1 className="text-white text-xl">Plantilla de jugadores</h1>
        <h1 className="bg-red-offside text-white text-lg font-bold py-2 px-5 rounded">
          180 PTS
        </h1>
      </div>
      <div className="w-full xl:h-[84%] lg:h-[70%] md:h-[62%] bg-campo-plantilla bg-center bg-contain bg-no-repeat flex flex-col justify-around items-center">
        <GoalKeeper
          players={players.filter((p) => p.position === "Arquero")}
          insertPlayer={insertPlayer}
          removePlayer={removePlayer}
        />
        <Defenders
          players={players.filter((p) => p.position === "Defensa")}
          insertPlayer={insertPlayer}
          removePlayer={removePlayer}
        />
        <Midfielders
          players={players.filter((p) => p.position === "MedioCampo")}
          insertPlayer={insertPlayer}
          removePlayer={removePlayer}
        />
        <Strikers
          players={players.filter((p) => p.position === "Delantero")}
          insertPlayer={insertPlayer}
          removePlayer={removePlayer}
        />
      </div>
    </div>
  );
}

export default Squad;
