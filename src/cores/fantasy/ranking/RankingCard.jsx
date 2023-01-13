import React from "react";
import { RiMedalLine } from "react-icons/ri";

function RankingCard() {
  const position = 2;
  const positionColor = (position) => {
    switch (position) {
      case 1:
        return "bg-[#FFE9BE] text-[#D8B74B]";
      case 2:
        return "bg-[#D9D9D9] text-[#9E9E9E]";
      case 3:
        return "bg-[#DCD3BD] text-[#9F7E2C]";
      default:
        return "bg-[#CAC4D0] text-[#3D405B]";
    }
  };
  const medal = (position) => {
    switch (position) {
      case 1:
        return "#D4AF37";
      case 2:
        return "#C0C0C0";
      case 3:
        return "#947014";
      default:
        return "";
    }
  };
  return (
    <div className="w-full h-20 flex justify-center">
      <div className="w-[90%] h-full flex justify-between items-center bg-white rounded-tl-xl rounded-br-xl">
        <div className="h-full w-32 rounded-tl-xl flex justify-center items-center">
          <RiMedalLine
            className={`${position > 3 ? "hidden" : ""}`}
            size="3rem"
            color={medal(position)}
          />
        </div>
        <div className="h-full w-full flex flex-col justify-center pl-[5%] font-semibold">
          <h1>ChocoPaula</h1>
          <p>1400 pts</p>
        </div>
        <h1
          className={`font-semibold h-full w-32 rounded-br-xl flex justify-center items-center text-3xl ${positionColor(
            position
          )}`}
        >
          {position}
        </h1>
      </div>
    </div>
  );
}

export default RankingCard;
