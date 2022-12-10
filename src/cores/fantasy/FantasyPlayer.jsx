import React from "react";

function FantasyPlayer() {
  return (
    <div className="w-full h-full">
      {/*<div
        className="w-full h-full shadow shadow-white"
        style={{
          backgroundImage:
            "url(https://assets.laliga.com/squad/2022/t178/p490541/2048x2225/p490541_t178_2022_0_001_000.png)",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          backgroundSize: "90%",
          backgroundPosition: "bottom",
        }}
      ></div>*/}
      <img
        src="https://assets.laliga.com/squad/2022/t178/p490541/2048x2225/p490541_t178_2022_0_001_000.png"
        alt=""
        className="filter drop-shadow-lg"
      />
      <div className="rounded-full bg-sticker-name w-full h-12 flex items-center justify-center">
        <p className="text-white">Pedri</p>
      </div>
    </div>
  );
}

export default FantasyPlayer;
