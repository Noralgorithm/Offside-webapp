import React from "react";
import { positions } from "../../utils/positions";

function MarketCard({ children, stickerInfo }) {
  return (
    <div className="w-full h-28 flex items-center bg-gradient-to-r rounded-l-lg bg-white relative rounded">
      <aside className="relative h-full w-[30%] flex justify-center rounded-lg bg-gradient-offside">
        <h1 className="-rotate-90 text-white text-sm font-semibold absolute right-[35%] w-28 bottom-[39.5%] pl-1">
          {stickerInfo?.playerName}
        </h1>
        <img src={stickerInfo?.img} alt="" className="h-full ml-7" />
        <img
          src={stickerInfo?.team.badge}
          alt=""
          className="h-1/6 rounded absolute top-2 right-2"
        />
      </aside>
      <div className="h-full w-full flex flex-col justify-around pl-5">
        <header className="w-full h-1/6 flex items-center gap-3">
          <h1 className="bg-gradient-to-b from-[#B02419] to-[#FE4648] text-white p-0.5 text-xs rounded ml-2">
            {positions[stickerInfo?.position]}
          </h1>
        </header>
        {children}
      </div>
    </div>
  );
}

export default MarketCard;
