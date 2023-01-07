import React from "react";

function FantasyPlayer({ playerInfo, handleClick }) {
  return (
    <div className="w-1/5 relative" onClick={handleClick}>
      <img
        src={playerInfo.img}
        alt=""
        className=""
      />
      <div className="rounded-b-lg bg-gradient-offside w-full h-6 flex items-center justify-center absolute bottom-0">
        <p className="text-white font-semibold md:text-[1vw] text-[10px] overflow-hidden">{playerInfo.playerName}</p>
      </div>
    </div>
  );
}

export default FantasyPlayer;
