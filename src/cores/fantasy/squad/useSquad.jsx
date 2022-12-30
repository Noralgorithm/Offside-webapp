import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { fetchSquadPlayers } from "../../../services/squad.services";
import * as squadServices from "../../../services/squad.services";

const useSquad = () => {
  const [players, setPlayers] = useState([]);

  const token = useSelector((state) => state.user.token);
  const selectedPlayer = useSelector((state) => state.fantasy.selectedPlayer);
  const eventId = 1;

  const fetchSquadInfo = useCallback(async () => {
    const data = await fetchSquadPlayers(token, eventId);
    setPlayers(data.item);
  }, [token, eventId]);

  const insertPlayer = async (position) => {
    if (position === selectedPlayer.position)
      try {
        await squadServices.insertPlayer(token, eventId, selectedPlayer.id);
      } catch (e) {
        alert(e.message);
      }
    else alert("no se pega papa");
  };

  return { players, fetchSquadInfo, insertPlayer };
};

export default useSquad;
