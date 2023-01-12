import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as marketServices from "../../../services/market.services";

const useMySales = (setFilters, { teamId, position, playerName }) => {
  const { token, event } = useSelector((state) => state.user);
  const [myAuctions, setMyAuctions] = useState([]);
  const [currentAuctionInfo, setCurrentAuctionInfo] = useState();
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

  const createAuction = async (initialValue, directPurchase, playerId) => {
    try {
      setLoading(true);
      await marketServices.addAuction(token, {
        initialValue,
        directPurchase,
        event,
        playerId,
      });
      await fetchMyAuctions();
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyAuctions();
  }, [fetchMyAuctions]);

  return {
    myAuctions,
    loading,
    currentAuctionInfo,
    fetchAuctionInfo,
    createAuction,
  };
};

export default useMySales;
