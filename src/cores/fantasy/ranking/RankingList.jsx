import React from "react";
import RankingCard from "./RankingCard";
import InfiniteScroll from "react-infinite-scroll-component";

function RankingList({ rankingList, hasMore, handleFetchNextPage }) {
  return (
    <div
      id="scrollableElement"
      className="w-full md:h-[75%] h-[82%] overflow-y-scroll banca"
    >
      <InfiniteScroll
        dataLength={rankingList.length}
        scrollableTarget="scrollableElement"
        loader={<h2>Loading...</h2>}
        next={handleFetchNextPage}
        hasMore={hasMore}
        className="grid grid-cols-1 content-start gap-3"
      >
        {rankingList.map((rankingPosition) => (
          <RankingCard
            key={rankingPosition.id}
            userName={rankingPosition.user.name}
            points={rankingPosition.points}
            position={rankingPosition.rank}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default RankingList;
