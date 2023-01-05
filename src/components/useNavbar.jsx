import { useCallback, useState } from "react";
import * as fantasyServices from "../services/fantasy.services";
import { useDispatch, useSelector } from "react-redux";
import { setFantasyInfo } from "../features/fantasy/fantasySlice";

const useNavbar = () => {
  const eventId = 1;
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const [money, setMoney] = useState();

  const fetchMoney = useCallback(async () => {
    const data = await fantasyServices.fetchMoney(token, eventId);
    setMoney(data.money);
    dispatch(setFantasyInfo(data));
  }, [token, eventId, dispatch]);

  return { money, fetchMoney };
};

export default useNavbar;
