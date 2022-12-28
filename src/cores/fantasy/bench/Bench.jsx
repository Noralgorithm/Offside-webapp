import React, { useEffect, useState } from "react";
import PlayerList from "./PlayerList";
import Filters from "./Filters";
import * as benchServices from "../../../services/bench.services";
import { useDispatch, useSelector } from "react-redux";
import { storeBenchInfo } from "../../../features/fantasy/fantasySlice";

function Bench() {
  const eventId = 1;
  const token = useSelector((state) => state.user.token);
  const [ isLoading, setIsLoading ] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const data = await benchServices.fetchBench(token, eventId);
        dispatch(storeBenchInfo(data));
        setIsLoading(false);
      } catch (e) {
        alert(e.message);
      }
    })();
  }, [token, eventId, dispatch]);

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="w-5/12 h-[80%] bg-[#647B80] rounded-t">
      <header className="w-full bg-[#325D69] h-[15%] flex flex-col justify-center rounded-t">
        <h1 className="w-2/5 text-center text-[#EFEFEF] text-lg">
          Almacén de jugadores
        </h1>
        <Filters />
      </header>
      <PlayerList />
    </div>
  );
}

export default Bench;
