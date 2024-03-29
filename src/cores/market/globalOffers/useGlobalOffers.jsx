import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as marketServices from "../../../services/market.services";

const useGlobalOffers = (setFilters, { teamId, position, playerName }) => {
  const { token, event } = useSelector((state) => state.user);
  const [globalAuctions, setGlobalAuctions] = useState([]);
  const [currentAuctionInfo, setCurrentAuctionInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const fetchGlobalAuctions = useCallback(async () => {
    try {
      setLoading(true);
      const data = await marketServices.fetchAuctionsList(
        token,
        event,
        {
          teamId,
          position,
          playerName,
        },
        0
      );
      if (data.paginate.pages > 1) setHasMore(true);
      setGlobalAuctions(data.items);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }, [token, event, teamId, position, playerName]);

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
      setGlobalAuctions(globalAuctions.concat(data.items));
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

  const makeAnOffer = async (value, marketId) => {
    try {
      setLoading(true);
      await marketServices.addBid(token, event, {
        value,
        marketId,
        isDirectPurchase: false,
      });
      await fetchGlobalAuctions();
      toast.success("¡Puja realizada con éxito!");
      return true;
    } catch (e) {
      toast.error(e.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const makeDirectBuy = async (value, marketId) => {
    try {
      setLoading(true);
      await marketServices.addBid(token, event, {
        value,
        marketId,
        isDirectPurchase: true,
      });
      await fetchGlobalAuctions();
      toast.success("¡Jugador comprado con éxito!");
      return true;
    } catch (e) {
      toast.error(e.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setFilters();
  }, []);

  useEffect(() => {
    fetchGlobalAuctions();
  }, [fetchGlobalAuctions]);

  return {
    globalAuctions,
    loading,
    currentAuctionInfo,
    fetchAuctionInfo,
    makeAnOffer,
    makeDirectBuy,
    handleFetchNextPage,
    hasMore
  };
};

export default useGlobalOffers;
