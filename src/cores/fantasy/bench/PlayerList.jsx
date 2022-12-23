import React from "react";
import PlayerCard from "../PlayerCard";
import { useSelector } from "react-redux";

function PlayerList() {


  const players = useSelector(state => state.fantasy.bench.players);

  return (
    <section className="bg-[#68878D] h-full w-full grid grid-cols-1 justify-items-center overflow-y-scroll py-4 gap-2 banca">
      {players.map(player => {
        return (
          <div className="w-[90%] h-28" key={player.id}>
            <PlayerCard playerInfo={player} />
          </div>
        );
      })}
    </section>
  );
}

export default PlayerList;