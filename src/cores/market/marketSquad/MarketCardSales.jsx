import React from "react";
import { BsCheck } from "react-icons/bs";

function MarketCardSales({ playerInfo, isInLineup, handleClick }) {
  const positions = {
    forward: "Delantero",
    defender: "Defensa",
    midfielder: "Medio Campo",
    goalkeeper: "Arquero",
  };

  return (
    <div
      onClick={handleClick}
      className="w-full h-[120px] flex items-center rounded-l-lg bg-white relative rounded md:hover:bg-bg-contenedor hover:cursor-pointer"
    >
      <aside className="relative h-full md:w-40 w-44 flex justify-center rounded-lg bg-gradient-offside">
        <h1 className="-rotate-90 text-white text-sm font-semibold absolute left-[-40px] w-[110px] bottom-[38%] pl-1">
          {playerInfo.playerName}
        </h1>
        <img src={playerInfo.img} alt="" className="h-full ml-7" />
        <img
          src={playerInfo.team.badge}
          alt=""
          className="h-[14%] rounded absolute top-1 right-1"
        />
      </aside>
      <div className="h-full w-full flex flex-col justify-around pl-5">
        <header className="w-full h-1/6 flex items-center gap-3">
          <h1 className="bg-gradient-to-b from-[#B02419] to-[#FE4648] text-white p-0.5 text-xs rounded ml-2">
            {positions[playerInfo.position]}
          </h1>
        </header>
        <section className="w-full h-4/6 flex relative">
          {isInLineup && (
            <div className="md:w-4/6 w-full h-full text-lg flex text-offside-titles font-semibold gap-2 md:items-start items-center">
              <BsCheck
                size="1.5rem"
                color="black"
                className="bg-transparent rounded-full border-2 border-black"
              />
              En alineación
            </div>
          )}
          <h1 className="text-white w-2/6 flex gap-2 font-semibold absolute right-0 top-[-8px]">
            <span className="opacity-70 mt-2 text-black">PTS</span>{" "}
            <span className="text-2xl text-offside-titles">49</span>
          </h1>
        </section>
      </div>
    </div>
  );
}

export default MarketCardSales;
