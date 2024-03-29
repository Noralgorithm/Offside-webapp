import React from "react";
import FantasyPlayer from "../FantasyPlayer";
import useEmptyPositions from "./useEmptyPositions";

function Midfielders({ players, insertPlayer, removePlayer }) {
  const MAX_MIDFIELDERS_AMOUNT = 3;
  const { emptyPositions } = useEmptyPositions(
    players.length,
    MAX_MIDFIELDERS_AMOUNT,
    () => insertPlayer('midfielder'),
    "Medio Campo"
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

export default Midfielders;
