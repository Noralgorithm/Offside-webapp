import React from "react";
import FantasyPlayer from "../FantasyPlayer";
import useEmptyPositions from "./useEmptyPositions";

function Midfielders({ players, insertPlayer }) {
  const MAX_MIDFIELDERS_AMOUNT = 3;
  const { emptyPositions } = useEmptyPositions(
    players.length,
    MAX_MIDFIELDERS_AMOUNT,
    () => insertPlayer('MedioCentro')
  );

  return (
    <div className="w-full flex justify-evenly items-end">
      {players.map((player) => (
        <FantasyPlayer playerInfo={player} key={player.id} />
      ))}
      {emptyPositions}
    </div>
  );
}

export default Midfielders;
