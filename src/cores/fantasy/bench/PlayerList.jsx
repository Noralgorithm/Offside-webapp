import React, { useState, useEffect } from "react";
import PlayerCard from "../PlayerCard";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import * as benchServices from "../../../services/squad.services";
import { toast } from "react-toastify";

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
      toast.error(e.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  return (
    <section
      id="scrollableSection"
      className="bg-[#DBD0D0] bg-opacity-50 h-[85%] w-full grid grid-cols-1 overflow-y-scroll py-4 banca"
    >
      <InfiniteScroll
        className="h-full w-full grid grid-cols-1 justify-items-center gap-2 pt-1"
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
