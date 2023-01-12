import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as marketServices from "../../../services/market.services";

const useMyOffers = (setFilters, { teamId, position, playerName }) => {
  const { token, event } = useSelector((state) => state.user);
  const [myOffers, setMyOffers] = useState([]);
  const [currentAuctionInfo, setCurrentAuctionInfo] = useState();
  const [loading, setLoading] = useState(true);

  const fetchMyOffers = useCallback(async () => {
    try {
      setLoading(true);
      const data = await marketServices.fetchMyBids(token, event, {
        teamId,
        position,
        playerName,
      });
      setMyOffers(data.items);
      console.log(data);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }, [token, event, playerName, position, teamId]);

  const fetchAuctionInfo = useCallback(
    async (auctionId) => {
      try {
        setLoading(true);
        const data = await marketServices.fetchAuctionInfo(
          token,
          event,
          auctionId
        );
        setCurrentAuctionInfo(data.item);
      } catch (e) {
        toast.error(e.message);
      } finally {
        setLoading(false);
      }
    },
    [token, event]
  );

  useEffect(() => {
    fetchMyOffers();
  }, [fetchMyOffers]);

  return { myOffers, loading, currentAuctionInfo, fetchAuctionInfo };
};

export default useMyOffers;
