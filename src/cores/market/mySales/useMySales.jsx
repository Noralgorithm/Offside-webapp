import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as marketServices from "../../../services/market.services";

const useMySales = (setFilters, { teamId, position, playerName }) => {
  const { token, event } = useSelector((state) => state.user);
  const [myAuctions, setMyAuctions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMyAuctions = useCallback(async () => {
    try {
      setLoading(true);
      const data = await marketServices.fetchMyAuctions(token, event, {
        teamId,
        position,
        playerName,
      });
      setMyAuctions(data.items);
      console.log(data)
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false)
    }
  }, [token, event, playerName, position, teamId]);


  useEffect(() => {
    fetchMyAuctions();
  }, [fetchMyAuctions]);

  return { myAuctions, loading };
};

export default useMySales;