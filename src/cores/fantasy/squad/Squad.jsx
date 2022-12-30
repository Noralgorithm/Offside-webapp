import React, { useEffect } from "react";
import Defenders from "./Defenders";
import GoalKeeper from "./GoalKeeper";
import Midfielders from "./Midfielders";
import Strikers from "./Strikers";
import useSquad from "./useSquad";

function Squad() {

  const { players, fetchSquadInfo, insertPlayer } = useSquad();

  useEffect(() => {
    fetchSquadInfo();
  }, [fetchSquadInfo]);

  return (
    <div className="w-5/12 h-full">
      <div className="bg-[#325D69] h-[8%] flex items-center justify-around rounded-t">
        <h1 className="text-white text-xl">Plantilla de jugadores</h1>
        <h1 className="bg-red-offside text-white text-lg font-bold py-2 px-5 rounded">
          180 PTS
        </h1>
      </div>
      <div className="w-full h-[84%] bg-campo-plantilla bg-center bg-contain bg-no-repeat flex flex-col justify-around items-center">
        <GoalKeeper players={players.filter(p => p.position === 'Arquero')} insertPlayer={insertPlayer} />
        <Defenders players={players.filter(p => p.position === 'Defensa')} insertPlayer={insertPlayer} />
        <Midfielders players={players.filter(p => p.position === 'MedioCampo')} insertPlayer={insertPlayer} />
        <Strikers players={players.filter(p => p.position === 'Delantero')} insertPlayer={insertPlayer} />
      </div>
    </div>
  );
}

export default Squad;
