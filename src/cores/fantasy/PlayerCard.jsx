import React from "react";
import { BsCheck } from "react-icons/bs";

function PlayerCard({ playerInfo, isInLineup, handleClick, selected }) {
  const selectedStyle = selected ? "ring-4 ring-red-600" : "";

  const positions = {
    forward: "Delantero",
    defender: "Defensa",
    midfielder: "Medio Campo",
    goalkeeper: "Arquero",
  };

  return (
    <div
      onClick={handleClick}
      className={
        "w-full h-full flex items-center bg-white relative rounded-lg " +
        selectedStyle
      }
    >
      <aside className="relative h-full xl:w-[35%] lg:w-[40%] md:w-[45%] sm:w-[35%] w-[60%] flex justify-center rounded-lg bg-gradient-offside">
        <h1 className="-rotate-90 text-white text-[13px] font-semibold absolute md:right-[25%] right-[25%] w-32 h-10 bottom-[39%] pl-1">
          {playerInfo.playerName}
        </h1>
        <img src={playerInfo.img} alt="" className="h-full xl:ml-6" />
        <img
          src={playerInfo.team.badge}
          alt=""
          className="h-1/6 rounded absolute top-2 right-2"
        />
      </aside>
      <div className="h-full w-full flex flex-col justify-around pl-5">
        <header className="w-full sm:h-1/6 h-[40%] flex items-center gap-3">
          <h1 className="bg-gradient-to-b from-[#B02419] to-[#FE4648] text-white p-0.5 text-xs rounded ml-2">
            {positions[playerInfo.position]}
          </h1>
        </header>
        <section className="w-full sm:h-4/6 h-[60%] flex relative">
          {isInLineup && (
            <div className="md:w-4/6 md:h-full text-lg flex text-offside-titles font-semibold gap-2">
              <BsCheck
                size="1.5rem"
                color="black"
                className="bg-transparent rounded-full border-2 border-black"
              />
              En alineación
            </div>
          )}
          <h1 className="text-white w-2/6 flex gap-2 font-semibold absolute md:right-0 right-3 md:top-[-8px] bottom-2">
            <span className="opacity-70 mt-2 text-black">PTS</span>{" "}
            <span className="text-2xl text-offside-titles">{playerInfo.latestPoints}</span>
          </h1>
        </section>
      </div>
    </div>
  );
}

export default PlayerCard;
