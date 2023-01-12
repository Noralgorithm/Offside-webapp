import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as marketServices from "../../../services/market.services";

const useGlobalOffers = (setFilters, { teamId, position, playerName }) => {
  const { token, event } = useSelector((state) => state.user);
  const [globalAuctions, setGlobalAuctions] = useState([]);
  const [currentAuctionInfo, setCurrentAuctionInfo] = useState()
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
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }, [token, event, teamId, position, playerName]);

  const fetchAuctionInfo = useCallback(async (auctionId) => {
    try {
      setLoading(true);
      const data = await marketServices.fetchAuctionInfo(token, event, auctionId);
      setCurrentAuctionInfo(data.item);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }, [token, event])

  const makeAnOffer = async (value, marketId) => {
    try {
      setLoading(true);
      await marketServices.addBid(token, event, { value, marketId, isDirectPurchase: false });
      await fetchGlobalAuctions();
      toast.success("¡Puja realizada con éxito!")
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }

  const makeDirectBuy = async (value, marketId) => {
    try {
      setLoading(true);
      await marketServices.addBid(token, event, { value, marketId, isDirectPurchase: true });
      await fetchGlobalAuctions();
      toast.success("¡Jugador comprado con éxito!");
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGlobalAuctions();
  }, [fetchGlobalAuctions]);

  return { globalAuctions, loading, currentAuctionInfo, fetchAuctionInfo, makeAnOffer, makeDirectBuy };
};

export default useGlobalOffers;