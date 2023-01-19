import React from "react";
import RankingList from "./RankingList";
import RankingGame from "../../../Images/RankingGame.png";
import { GoStar } from "react-icons/go";
import Loading from "../../../components/Loading"
import useRanking from "./useRanking";

function Ranking() {

  const { loading, position, myPoints, rankingList, handleFetchNextPage, userInfo, hasMore } = useRanking();

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
  const star = (position) => {
    switch (position) {
      case 1:
        return "#D4AF37";
      case 2:
        return "#C0C0C0";
      case 3:
        return "#947014";
      default:
        return "#3D405B";
    }
  };

  if (loading) return <Loading />

  return (
    <div className="w-full h-full flex items-center justify-around">
      <div className="md:w-5/12 w-11/12 h-[90%] flex flex-col justify-between items-center">
        <div className="w-full h-20 flex justify-center">
          <div className="w-[90%] h-full flex justify-between items-center bg-white rounded-tl-xl rounded-br-xl">
            <div className="h-full w-32 rounded-tl-xl flex justify-center items-center">
              <GoStar size="3rem" color={star(position)} />
            </div>
            <div className="h-full w-full flex flex-col justify-center pl-[5%] font-semibold">
              <h1>{userInfo.name}</h1>
              <p>{myPoints}</p>
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
        <span className="w-full h-[2px] bg-[#3D405B]"></span>
        <RankingList rankingList={rankingList} hasMore={hasMore} handleFetchNextPage={handleFetchNextPage} />
      </div>

      <img
        src={RankingGame}
        alt=""
        className="lg:w-5/12 md:w-6/12 md:block hidden"
      />
    </div>
  );
}

export default Ranking;
