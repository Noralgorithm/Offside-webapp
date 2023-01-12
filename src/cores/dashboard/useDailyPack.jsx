import { useState, useCallback, useEffect } from "react";
import * as stickerServices from "../../services/sticker.services";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const useDailyPack = () => {
  const { token, event } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [isAvailable, setIsAvailable] = useState(false);

  const checkStatus = useCallback(async () => {
    try {
      setLoading(true);
      const data = await stickerServices.checkStatus(token, event);
      setIsAvailable(data.success);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }, [token, event]);

  useEffect(() => {
    checkStatus();
  }, [checkStatus])

  return { isAvailable, setIsAvailable, loading, checkStatus };
};

export default useDailyPack;
