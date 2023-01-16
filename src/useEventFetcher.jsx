import { useCallback, useEffect, useState, useLayoutEffect } from "react";
import * as fantasyServices from "./services/event.services";
import { useDispatch, useSelector } from "react-redux";
import {
  setEvent,
  setEventsList,
  setMoney,
} from "./features/user/userSlice";
import { setPoints } from "./features/fantasy/fantasySlice";
import { toast } from "react-toastify";

const useEventFetcher = () => {
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user);
  const [events, setEvents] = useState([]);

  const dispatch = useDispatch();

  const fetchEventsList = useCallback(async () => {
    if (!user.success) return;
    try {
      const data = await fantasyServices.fetchEventsInfo(token);
      dispatch(setEventsList(data.items));
      dispatch(setEvent(data.items[0].id));
      setEvents(data.items);
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
  }, [token, dispatch, user.success]);

  const joinEvent = useCallback(async () => {
    try {
      await fantasyServices.joinEvent(token, user.event);
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
  }, [token, user.event]);

  const fetchEventInfo = useCallback(async () => {
    if (events.length === 0) return;
    setLoading(true);
    if (
      !events?.filter((event) => event.id === user.event)[0]
        ?.imAlreadyPlayingIn
    ) {
      await joinEvent();
      await fetchEventsList();
      toast.success(
        "Felicidades, ahora estas participando en el evento " +
          events.filter((event) => event.id === user.event)[0].eventName,
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
    try {
      const data = await fantasyServices.fetchMoney(token, user.event);
      dispatch(setMoney(data.money));
      dispatch(setPoints(data.points));
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
    setLoading(false);
  }, [token, user.event, events, fetchEventsList, joinEvent, dispatch]);

  useEffect(() => {
    fetchEventsList();
  }, [fetchEventsList]);

  useEffect(() => {
    fetchEventInfo();
  }, [fetchEventInfo]);

  return { loading, setLoading };
};

export default useEventFetcher;
