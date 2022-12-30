import React from "react";

function FantasyPlayer({ playerInfo }) {
  return (
    <div className="w-1/5">
      <img
        src={playerInfo.img}
        alt=""
        className=""
      />
      <div className="rounded-full bg-sticker-name w-full h-6 flex items-center justify-center">
        <p className="text-white text-[1vw] overflow-hidden">{playerInfo.playerName}</p>
      </div>
    </div>
  );
}

export default FantasyPlayer;
