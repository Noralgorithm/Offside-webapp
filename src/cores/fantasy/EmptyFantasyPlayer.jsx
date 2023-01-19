import React from "react";
import EmptyPlayer from "../../Images/EmptyPlayer.png";

function EmptyFantasyPlayer({ handleClick, position }) {
  return (
    <div className="w-1/5" onClick={handleClick}>
      <img src={EmptyPlayer} alt="" className="" />
      <div className="rounded-b-lg bg-gradient-offside w-full h-6 flex items-center justify-center">
        <p className="text-white font-semibold md:text-[1vw] sm:text-sm text-[10px] overflow-hidden">
          {position}
        </p>
      </div>
    </div>
  );
}

export default EmptyFantasyPlayer;
