import { useCallback, useState } from "react";
import * as fantasyServices from "./services/event.services";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentEvent,
  setEventsList,
  setMoney,
} from "./features/user/userSlice";
import { setPoints } from "./features/fantasy/fantasySlice";

const useEventFetcher = () => {
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user);
  const [ visibleModal, setVisibleModal ] = useState(false); 
  const [ eventList, setEventList ] = useState([]);

  const dispatch = useDispatch();

  const fetchEventsList = useCallback(async () => {
    try {
      const data = await fantasyServices.fetchEventsInfo(token);
      dispatch(setEventsList(data));
      dispatch(setCurrentEvent(data[0].id));
    } catch (e) {
      alert(e);
    }
  }, [token, dispatch]);

  const joinEvent = useCallback(async () => {
    try {
      await fantasyServices.joinEvent(token, user.event);
    } catch (e) {
      alert(e);
    }
  }, [token, user.event]);

  const fetchEventInfo = useCallback(async () => {
    if (user.eventsList.length === 0) return;
    if (
      !user?.eventsList?.filter((event) => event.id === user.event)[0]
        ?.imAlreadyPlayingIn
    ) {
      console.log(user?.eventsList?.filter((event) => event.id === user.event)[0])
      await joinEvent();
      setVisibleModal(true)

      //TODO: reemplazar este alert por un modal, utilizando el valor de "visibleModal" en un componente externo
      alert(
        "felicidades, ahora estas participando en el evento " +
          user.eventsList.filter((event) => event.id === user.event)[0]
            .eventName
      );
    }
    try {
      const data = await fantasyServices.fetchMoney(token, user.event);
      dispatch(setMoney(data.money));
      dispatch(setPoints(data.points));
    } catch (e) {
      alert(e);
    }
  }, [token, user.event, user.eventsList, joinEvent, dispatch]);

  return { fetchEventsList, fetchEventInfo, visibleModal, setVisibleModal };
};

export default useEventFetcher;
