import { useCallback, useState, useEffect } from "react";
import * as marketServices from "../../services/market.services";
import { useSelector } from "react-redux";

const useMarket = () => {
  const { token, event } = useSelector((state) => state.user);
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(false);

  //filters and search
  const [teamId, setTeamId] = useState(null);
  const [position, setPosition] = useState(null);
  const [playerName, setPlayerName] = useState(null);

  const setFilters = ({ teamId, position, playerName }) => {
    setTeamId(teamId || null);
    setPosition(position || null);
    setPlayerName(playerName || null);
  };

  const fetchAuctionsInfo = useCallback(async () => {
    try {
      setLoading(true);
      const data = await marketServices.fetchAuctionsList(token, event, {
        teamId,
        position,
        playerName,
      });
      setAuctions(data.items);
      console.log(data.items)
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }, [token, event, teamId, position, playerName]);

  useEffect(() => {
    fetchAuctionsInfo();
  }, [fetchAuctionsInfo]);

  return { auctions, setFilters, teamId, position, playerName, loading };
};

export default useMarket;
