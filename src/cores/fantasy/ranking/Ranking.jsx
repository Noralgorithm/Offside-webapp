import React from "react";
import RankingList from "./RankingList";

function Ranking() {
  return (
    <div className="md:w-5/12 w-full h-[90%] flex flex-col items-center">
      <h2 className="text-3xl text-sticker-name font-bold">Ranking global</h2>
      <div className="w-full h-5/6 flex flex-col items-center justify-center">
        <RankingList />
      </div>
    </div>
  );
}

export default Ranking;
