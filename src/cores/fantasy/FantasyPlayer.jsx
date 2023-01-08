import React from "react";

function FantasyPlayer({ playerInfo, handleClick }) {
  return (
    <div
      className="w-1/4 h-full flex items-end"
      style={{
        backgroundImage: `url(${playerInfo.img.replace(
          String.fromCharCode(92),
          "/"
        )})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
      }}
      onClick={handleClick}
    >
      <div className="rounded-b-lg bg-gradient-offside w-full h-6 flex items-center justify-center">
        <p className="text-white font-semibold md:text-[1vw] text-[10px] overflow-hidden">
          {playerInfo.playerName}
        </p>
      </div>
    </div>
  );
}

export default FantasyPlayer;
