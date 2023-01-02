import React from "react";
import FantasyPlayer from "../FantasyPlayer";
import useEmptyPositions from "./useEmptyPositions";

function GoalKeeper({ players, insertPlayer, removePlayer }) {
  const MAX_GOALKEEPER_AMOUNT = 1;
  const { emptyPositions } = useEmptyPositions(
    players.length,
    MAX_GOALKEEPER_AMOUNT,
    () => insertPlayer('Arquero')
  );

  return (
    <div className="w-full flex justify-evenly items-end">
      {players.map((player) => (
        <FantasyPlayer playerInfo={player} key={player.id} handleClick={() => removePlayer(player.id)}/>
      ))}
      {emptyPositions}
    </div>
  );
}

export default GoalKeeper;
