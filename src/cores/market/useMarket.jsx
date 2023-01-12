import { useCallback, useState, useEffect } from "react";
import * as marketServices from "../../services/market.services";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const useMarket = () => {
  //filters and search
  const [teamId, setTeamId] = useState(null);
  const [position, setPosition] = useState(null);
  const [playerName, setPlayerName] = useState(null);

  const setFilters = ({ teamId, position, playerName }) => {
    setTeamId(teamId || null);
    setPosition(position || null);
    setPlayerName(playerName || null);
  };

  return { setFilters, teamId, position, playerName };
};

export default useMarket;
