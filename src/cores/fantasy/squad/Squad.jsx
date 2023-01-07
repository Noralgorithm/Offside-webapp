import React, { useEffect } from "react";
import Defenders from "./Defenders";
import GoalKeeper from "./GoalKeeper";
import Midfielders from "./Midfielders";
import Strikers from "./Strikers";
import useSquad from "./useSquad";
import { BiQuestionMark } from "react-icons/bi";

function Squad() {
  const { players, fetchSquadInfo, insertPlayer, removePlayer } = useSquad();

  useEffect(() => {
    fetchSquadInfo();
  }, [fetchSquadInfo]);

  return (
    <div className="lg:w-5/12 md:w-[45%] sm:w-[60%] w-11/12 h-full">
      <header className="bg-bg-titles h-[8%] flex items-center justify-around rounded-t text-offside-titles">
        <h1 className="text-xl font-semibold">Alineación</h1>
        <div className="flex h-1/2 items-center">
          <h1 className="text-lg font-bold py-2 px-5 rounded">180 PTS</h1>
          <button className="rounded-full bg-gradient-offside p-[2px] h-6">
            <BiQuestionMark size="1.3rem" color="white" />
          </button>
        </div>
      </header>
      <div className="w-full xl:h-[84%] lg:h-[70%] md:h-[62%] h-[85%] bg-campo-plantilla bg-center bg-contain bg-no-repeat flex flex-col justify-around items-center">
        <GoalKeeper
          players={players.filter((p) => p.position === "goalkeeper")}
          insertPlayer={insertPlayer}
          removePlayer={removePlayer}
        />
        <Defenders
          players={players.filter((p) => p.position === "defender")}
          insertPlayer={insertPlayer}
          removePlayer={removePlayer}
        />
        <Midfielders
          players={players.filter((p) => p.position === "midfielder")}
          insertPlayer={insertPlayer}
          removePlayer={removePlayer}
        />
        <Strikers
          players={players.filter((p) => p.position === "forward")}
          insertPlayer={insertPlayer}
          removePlayer={removePlayer}
        />
      </div>
    </div>
  );
}

export default Squad;
