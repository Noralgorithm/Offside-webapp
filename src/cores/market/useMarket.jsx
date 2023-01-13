import { useState } from "react";

const useMarket = () => {
  //filters and search
  const [teamId, setTeamId] = useState('');
  const [position, setPosition] = useState('');
  const [playerName, setPlayerName] = useState('');

  const setFilters = () => {
    setTeamId('');
    setPosition('');
    setPlayerName('');
  };

  return { setFilters, teamId, position, playerName, setTeamId, setPosition, setPlayerName };
};

export default useMarket;
