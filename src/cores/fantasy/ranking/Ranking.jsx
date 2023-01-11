import React from "react";
import RankingList from "./RankingList";
import RankingPlayer from "../../../Images/RankingPlayer.png";

function Ranking() {
  return (
    <div className="w-full h-full flex items-center justify-around">
      <div className="md:w-5/12 w-11/12 h-[90%] flex flex-col justify-between items-center">
        <div className="w-full md:h-[18%] h-[12%] bg-gradient-offside rounded-xl flex md:justify-around justify-evenly items-center text-white">
          <h1 className="text-5xl font-bold">2</h1>
          <h1 className="text-3xl font-normal">Chocopaula</h1>
          <h1 className="text-3xl font-normal">45 pts</h1>
        </div>
        <RankingList />
      </div>

      <img
        src={RankingPlayer}
        alt=""
        className="lg:w-5/12 md:w-6/12 md:block hidden h-[90%]"
      />
    </div>
  );
}

export default Ranking;
