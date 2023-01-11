import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSquadPlayers } from "../../../services/squad.services";
import * as squadServices from "../../../services/squad.services";
import {
  insertPlayer as reduxInsertPlayer,
  removePlayer as reduxRemovePlayer
} from "../../../features/fantasy/fantasySlice";
import { toast } from "react-toastify";

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
      return toast.error('El jugador no va en esa posición.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    try {
      await squadServices.insertPlayer(
        token,
        eventId,
        fantasy.selectedPlayer.id
      );
      dispatch(reduxInsertPlayer());
      fetchSquadInfo();
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

  const removePlayer = async (id) => {
    try {
      await squadServices.removePlayer(token, eventId, id);
      fetchSquadInfo();
      dispatch(reduxRemovePlayer())
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

  return { players, fetchSquadInfo, insertPlayer, removePlayer };
};

export default useSquad;
