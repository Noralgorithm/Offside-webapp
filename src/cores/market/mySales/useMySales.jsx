import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as marketServices from "../../../services/market.services";

const useMySales = (setFilters, { teamId, position, playerName }) => {
  const { token, event } = useSelector((state) => state.user);
  const [myAuctions, setMyAuctions] = useState([]);
  const [currentAuctionInfo, setCurrentAuctionInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const fetchMyAuctions = useCallback(async () => {
    try {
      setLoading(true);
      const data = await marketServices.fetchMyAuctions(token, event, {
        teamId,
        position,
        playerName,
      },
      0);
      if (data.paginate.pages > 1) setHasMore(true)
      setMyAuctions(data.items);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }, [token, event, playerName, position, teamId]);

  const handleFetchNextPage = async () => {
    try {
      const data = await marketServices.fetchAuctionsList(
        token,
        event,
        {
          teamId,
          position,
          playerName,
        },
        page
      )
      if (data.paginate.pages <= page) setHasMore(false);
      setPage(page + 1)
      setMyAuctions(myAuctions.concat(data.items));
    } catch (e) {
      toast.error(e.message);
    }
  }

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
    setFilters();
  }, []);

  useEffect(() => {
    fetchMyAuctions();
  }, [fetchMyAuctions]);

  return {
    myAuctions,
    loading,
    currentAuctionInfo,
    fetchAuctionInfo,
    createAuction,
    handleFetchNextPage,
    hasMore
  };
};

export default useMySales;
