import React, { useEffect, useState } from "react";
import PlayerList from "./PlayerList";
import Filters from "./Filters";
import * as benchServices from "../../../services/squad.services";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPlayer,
  storeBenchInfo,
  storeTeamList,
} from "../../../features/fantasy/fantasySlice";
import * as teamServices from "../../../services/team.services";

function Bench() {
  const eventId = 1;
  const token = useSelector((state) => state.user.token);
  const [isLoading, setIsLoading] = useState(true);
  const fantasyState = useSelector((state) => state.fantasy);

  const dispatch = useDispatch();

  const handleSelectPlayer = (id, position) => {
    dispatch(selectPlayer({ id, position }));
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await benchServices.fetchBench(
          token,
          eventId,
          fantasyState.bench.teamFilter,
          fantasyState.bench.positionFilter,
          fantasyState.bench.playerNameSearch,
          fantasyState.bench.paginate.page
        );
        const teamList = await teamServices.fetchTeamsList(token, eventId);
        dispatch(storeTeamList(teamList));
        dispatch(storeBenchInfo(data));
        setIsLoading(false);
      } catch (e) {
        alert(e.message);
      }
    })();
  }, [
    token,
    eventId,
    dispatch,
    fantasyState.bench.teamFilter,
    fantasyState.bench.positionFilter,
    fantasyState.bench.playerNameSearch,
    fantasyState.bench.paginate.page,
    fantasyState.insertedPlayer,
    fantasyState.removedPlayer
  ]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="w-5/12 h-[80%] bg-[#647B80] rounded-t">
      <header className="w-full bg-[#325D69] h-[15%] flex flex-col justify-center rounded-t">
        <h1 className="w-2/5 text-center text-[#EFEFEF] text-lg">
          Almacén de jugadores
        </h1>
        <Filters dispatch={dispatch} />
      </header>
      <PlayerList handleSelectPlayer={handleSelectPlayer} />
    </div>
  );
}

export default Bench;
