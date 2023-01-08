import { useCallback, useState } from "react";
import * as fantasyServices from "./services/event.services";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentEvent,
  setEventsList,
  setMoney,
} from "./features/user/userSlice";
import { setPoints } from "./features/fantasy/fantasySlice";
import { toast } from "react-toastify";

const useEventFetcher = () => {
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user);
  const [visibleModal, setVisibleModal] = useState(false);

  const dispatch = useDispatch();

  const fetchEventsList = useCallback(async () => {
    try {
      const data = await fantasyServices.fetchEventsInfo(token);
      dispatch(setEventsList(data));
      dispatch(setCurrentEvent(data[0].id));
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
  }, [token, dispatch]);

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
    if (user.eventsList.length === 0) return;
    if (
      !user?.eventsList?.filter((event) => event.id === user.event)[0]
        ?.imAlreadyPlayingIn
    ) {
      await joinEvent();
      await fetchEventsList();
      setVisibleModal(true);

      toast.success(
        "Felicidades, ahora estas participando en el evento " +
          user.eventsList.filter((event) => event.id === user.event)[0]
            .eventName,
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
      if (
        !user?.eventsList?.filter((event) => event.id === user.event)[0]
          ?.imAlreadyPlayingIn
      )
        return;
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
  }, [token, user.event, user.eventsList, joinEvent, dispatch]);

  return { fetchEventsList, fetchEventInfo, visibleModal, setVisibleModal };
};

export default useEventFetcher;
