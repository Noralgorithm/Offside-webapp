import { useState, useCallback, useEffect } from "react";
import * as stickerServices from "../../services/sticker.services";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useTimer from "./useTimer";

const useDailyPack = () => {
  const { token, event } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [isAvailable, setIsAvailable] = useState(false);

  const checkStatus = useCallback(async () => {
    try {
      setLoading(true);
      const data = await stickerServices.checkStatus(token, event);
      //TODO
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }, [token, event]);


  return { isAvailable, setIsAvailable, loading };
};

export default useDailyPack;
