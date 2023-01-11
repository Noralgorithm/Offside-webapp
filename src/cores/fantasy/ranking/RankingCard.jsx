import React from "react";

function RankingCard() {
  return (
    <div className="w-full h-10 border-b border-black flex justify-center">
      <div className="w-[90%] h-full flex justify-between items-center text-offside-titles">
        <div className="flex items-center gap-5">
          <h1 className="text-3xl font-bold">1</h1>
          <h1 className="font-semibold md:text-lg text-2xl">Auri</h1>
        </div>
        <h1 className="font-semibold md:text-lg text-2xl">50 pts</h1>
      </div>
    </div>
  );
}

export default RankingCard;
