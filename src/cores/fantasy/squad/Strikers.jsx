import React from "react";
import FantasyPlayer from "../FantasyPlayer";
import useEmptyPositions from "./useEmptyPositions";

function Strikers({ players, insertPlayer, removePlayer }) {
  const MAX_STRIKERS_AMOUNT = 3;
  const { emptyPositions } = useEmptyPositions(
    players.length,
    MAX_STRIKERS_AMOUNT,
    () => insertPlayer('forward'),
    "Delantero"
  );

  return (
    <div className="w-full h-1/5 flex justify-evenly items-end">
      {players.map((player) => (
        <FantasyPlayer playerInfo={player} key={player.id} handleClick={() => removePlayer(player.id)}/>
      ))}
      {emptyPositions}
    </div>
  );
}

export default Strikers;
