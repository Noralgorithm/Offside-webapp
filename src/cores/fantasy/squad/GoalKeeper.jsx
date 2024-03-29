import React from "react";
import FantasyPlayer from "../FantasyPlayer";
import useEmptyPositions from "./useEmptyPositions";

function GoalKeeper({ players, insertPlayer, removePlayer }) {
  const MAX_GOALKEEPER_AMOUNT = 1;
  const { emptyPositions } = useEmptyPositions(
    players.length,
    MAX_GOALKEEPER_AMOUNT,
    () => insertPlayer('goalkeeper'),
    "Portero"
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

export default GoalKeeper;
