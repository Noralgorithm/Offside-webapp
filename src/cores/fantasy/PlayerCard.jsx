import React from "react";
import { BsCheck } from "react-icons/bs";

function PlayerCard({ playerInfo }) {
  return (
    <div className="w-full h-full flex items-center bg-gradient-to-r from-[#92C8C9] to-[#254E5A] relative rounded">
      <h1 className="-rotate-90 text-white text-lg font-semibold absolute left-[-32px] bottom-8">
        {playerInfo.playerName}
      </h1>
      <img src={playerInfo.img} alt="" className="h-full ml-3" />
      <div className="h-full w-full flex flex-col justify-around">
        <header className="w-full h-1/6 flex items-center gap-3">
          <img src={playerInfo.team.badge} alt="" className="h-[14%] rounded absolute left-20" />
          <h1 className="bg-gradient-to-b from-[#B02419] to-[#FE4648] text-white p-0.5 text-xs rounded ml-2">
            {playerInfo.position}
          </h1>
        </header>
        <section className="w-full h-4/6 flex relative">
          <div className="w-4/6 h-full flex text-white font-semibold gap-2">
            <BsCheck
              size="1.3rem"
              color="#FFFFFF"
              className="bg-[#50DE2C] rounded-full"
            />
            En alineación
          </div>
          <h1 className="text-white w-2/6 flex gap-2 font-semibold absolute right-0 top-[-8px]">
            <span className="opacity-70 mt-2">PTS</span>{" "}
            <span className="text-2xl">49</span>
          </h1>
        </section>
      </div>
    </div>
  );
}

export default PlayerCard;
