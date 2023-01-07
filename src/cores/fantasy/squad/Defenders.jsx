import React from "react";
import FantasyPlayer from "../FantasyPlayer";
import useEmptyPositions from "./useEmptyPositions";

function Defenders({ players, insertPlayer, removePlayer }) {
  const MAX_DEFENDERS_AMOUNT = 4;
  const { emptyPositions } = useEmptyPositions(
    players.length,
    MAX_DEFENDERS_AMOUNT,
    () => insertPlayer('defender')
  );

  return (
    <div className="w-full h-1/5 flex justify-center items-end gap-2">
      {players.map((player) => (
        <FantasyPlayer playerInfo={player} key={player.id} handleClick={() => removePlayer(player.id)} />
      ))}
      {emptyPositions}
    </div>
  );
}

export default Defenders;
