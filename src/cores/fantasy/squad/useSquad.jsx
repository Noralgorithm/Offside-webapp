import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSquadPlayers } from "../../../services/squad.services";
import * as squadServices from "../../../services/squad.services";
import {
  insertPlayer as reduxInsertPlayer,
  removePlayer as reduxRemovePlayer
} from "../../../features/fantasy/fantasySlice";

const useSquad = () => {
  const [players, setPlayers] = useState([]);

  const token = useSelector((state) => state.user.token);
  const fantasy = useSelector((state) => state.fantasy);
  const eventId = 1;
  const dispatch = useDispatch();

  const fetchSquadInfo = useCallback(async () => {
    const data = await fetchSquadPlayers(token, eventId);
    setPlayers(data.item);
  }, [token, eventId]);

  const insertPlayer = async (position) => {
    if (!fantasy.selectedPlayer.position) return;
    if (!(position === fantasy.selectedPlayer.position))
      return alert(
        "NO VA ALLIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII"
      );
    try {
      await squadServices.insertPlayer(
        token,
        eventId,
        fantasy.selectedPlayer.id
      );
      dispatch(reduxInsertPlayer());
      fetchSquadInfo();
      console.log("insertaoo")
    } catch (e) {
      alert(e.message);
    }
  };

  const removePlayer = async (id) => {
    try {
      await squadServices.removePlayer(token, eventId, id);
      fetchSquadInfo();
      console.log("borraooo")
      dispatch(reduxRemovePlayer())
    } catch (e) {
      alert(e.message);
    }
  };

  return { players, fetchSquadInfo, insertPlayer, removePlayer };
};

export default useSquad;
