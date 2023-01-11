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
import { BiQuestionMark } from "react-icons/bi";
import Loading from "../../../components/Loading"
import { toast } from "react-toastify";

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
    fantasyState.removedPlayer,
  ]);

  if (isLoading) return <div className="lg:w-5/12 md:w-[45%] sm:w-[60%] w-11/12 md:h-[80%] h-1/2 relative"><Loading /></div>;

  return (
    <div className="lg:w-5/12 md:w-[45%] sm:w-9/12 w-11/12 md:h-[91.5%] h-1/2 bg-[#DBD0D0] rounded-t-lg overflow-y-hidden">
      <header className="w-full bg-[#CAC4D0] bg-opacity-60 sm:h-[15%] h-1/5 flex justify-center rounded-lg">
        <h1 className="w-1/5 h-1/2 flex justify-center items-center text-offside-titles text-xl font-semibold">
          Plantilla
        </h1>
        <Filters dispatch={dispatch} />
        <div className="w-1/5 h-1/2 flex items-center justify-center">
          <button className="rounded-full bg-gradient-offside p-[2px] h-6">
            <BiQuestionMark size="1.3rem" color="white" />
          </button>
        </div>
      </header>
      <PlayerList handleSelectPlayer={handleSelectPlayer} />
    </div>
  );
}

export default Bench;
