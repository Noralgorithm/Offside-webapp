import React from "react";
import FantasyPlayer from "./FantasyPlayer";

function Fantasy() {
  return (
    <div className="w-screen h-full flex justify-center items-center">
      <div className="w-1/6 h-3/6">
        <FantasyPlayer />
      </div>
    </div>
  );
}

export default Fantasy;
