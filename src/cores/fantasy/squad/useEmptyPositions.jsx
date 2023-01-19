import React, { useMemo } from "react";
import EmptyFantasyPlayer from "../EmptyFantasyPlayer";

const useEmptyPositions = (
  obtainedPlayersAmount,
  maxAmount,
  handleClick,
  position
) => {
  const emptyPositions = useMemo(() => {
    let emptyPositionsArray = [];
    for (let i = obtainedPlayersAmount; i < maxAmount; i++)
      emptyPositionsArray.push(
        <EmptyFantasyPlayer
          handleClick={handleClick}
          key={i}
          position={position}
        />
      );
    return emptyPositionsArray;
  }, [obtainedPlayersAmount, maxAmount, handleClick]);

  return { emptyPositions };
};

export default useEmptyPositions;
