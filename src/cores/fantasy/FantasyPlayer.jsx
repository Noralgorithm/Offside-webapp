import React from "react";

function FantasyPlayer({ playerInfo, handleClick }) {
  return (
    <div className="w-1/5" onClick={handleClick}>
      <img
        src={playerInfo.img}
        alt=""
        className=""
      />
      <div className="rounded-full bg-sticker-name w-full h-6 flex items-center justify-center">
        <p className="text-white md:text-[1vw] text-[10px] overflow-hidden">{playerInfo.playerName}</p>
      </div>
    </div>
  );
}

export default FantasyPlayer;
