import { useCallback, useState, useEffect } from "react";
import * as marketServices from "../../services/market.services";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const useMarket = () => {
  const { token, event } = useSelector((state) => state.user);
  const [globalAuctions, setGlobalAuctions] = useState([]);
  const [myAuctions, setMyAuctions] = useState([]);
  const [loading, setLoading] = useState(true);

  //filters and search
  const [teamId, setTeamId] = useState(null);
  const [position, setPosition] = useState(null);
  const [playerName, setPlayerName] = useState(null);

  const setFilters = ({ teamId, position, playerName }) => {
    setTeamId(teamId || null);
    setPosition(position || null);
    setPlayerName(playerName || null);
  };

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
      alert(e);
    } finally {
      setLoading(false);
    }
  }, [token, event, teamId, position, playerName]);

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
    }
  }, [token, event, playerName, position, teamId]);

  useEffect(() => {
    fetchGlobalAuctions();
    fetchMyAuctions();
  }, [fetchGlobalAuctions, fetchMyAuctions]);

  return { globalAuctions, setFilters, teamId, position, playerName, loading };
};

export default useMarket;
