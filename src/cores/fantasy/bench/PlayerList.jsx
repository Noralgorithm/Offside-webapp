import React, { useState, useEffect } from "react";
import PlayerCard from "../PlayerCard";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import * as benchServices from "../../../services/squad.services";

function PlayerList({ handleSelectPlayer }) {
  const eventId = 1;
  const token = useSelector((state) => state.user.token);
  const fantasy = useSelector((state) => state.fantasy);
  const [players, setPlayers] = useState(fantasy.bench.players);

  const [nextPage, setNextPage] = useState(1);

  useEffect(() => {
    setNextPage(1);
    setPlayers(fantasy.bench.players);
  }, [fantasy.bench.players]);

  const fetchNextPage = async () => {
    try {
      const data = await benchServices.fetchBench(
        token,
        eventId,
        fantasy.bench.teamFilter,
        fantasy.bench.positionFilter,
        fantasy.bench.playerNameSearch,
        nextPage
      );
      setNextPage(nextPage + 1);
      setPlayers(players.concat(data.items));
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <section
      id="scrollableSection"
      className="bg-[#68878D] h-full w-full justify-items-center overflow-y-scroll py-4 banca"
    >
      <InfiniteScroll
        className="bg-[#68878D] h-full w-full grid grid-cols-1 justify-items-center gap-2"
        scrollableTarget="scrollableSection"
        hasMore={nextPage < fantasy.bench.paginate.pages}
        dataLength={players.length}
        next={fetchNextPage}
        endMessage={<h1 className="text-white font-bold">No hay más</h1>}
        loader={<h1 className="text-white font-bold">Loading...</h1>}
      >
        {players.map((player) => {
          return (
            <div className="w-[90%] h-28" key={player.id}>
              <PlayerCard
                playerInfo={player}
                isInLineup={player.isInLineup}
                handleClick={() => {
                  if (!player.isInLineup)
                    handleSelectPlayer(player.id, player.position);
                }}
                selected={fantasy.selectedPlayer.id === player.id}
              />
            </div>
          );
        })}
      </InfiniteScroll>
    </section>
  );
}

export default PlayerList;
