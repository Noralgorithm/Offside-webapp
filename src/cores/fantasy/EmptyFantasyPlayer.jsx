import React from "react";
import EmptyPlayer from "../../Images/EmptyPlayer.png";

function EmptyFantasyPlayer({ handleClick }) {
  return (
    <div className="w-1/5" onClick={handleClick}>
      <img src={EmptyPlayer} alt="" className="" />
      <div className="rounded-full bg-sticker-name w-full h-6 flex items-center justify-center">
        <p className="text-white text-[1vw] overflow-hidden"></p>
      </div>
    </div>
  );
}

export default EmptyFantasyPlayer;
