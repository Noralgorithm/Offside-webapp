import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as marketServices from "../../../services/market.services";

const useGlobalOffers = (setFilters, { teamId, position, playerName }) => {
  const { token, event } = useSelector((state) => state.user);
  const [globalAuctions, setGlobalAuctions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGlobalAuctions = useCallback(async () => {
    try {
      setLoading(true);
      const data = await marketServices.fetchAuctionsList(token, event, {
        teamId,
        position,
        playerName,
      });
      setGlobalAuctions(data.items);
      console.log(data.items);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }, [token, event, teamId, position, playerName]);


  useEffect(() => {
    fetchGlobalAuctions();
  }, [fetchGlobalAuctions]);

  return { globalAuctions, loading };
};

export default useGlobalOffers;