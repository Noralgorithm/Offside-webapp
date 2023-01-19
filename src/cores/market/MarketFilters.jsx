import React, { useCallback, useEffect, useMemo, useState } from "react";
import MarketFilter from "./MarketFilter";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as teamServices from "../../services/team.services";

function MarketFilters({ filters, setTeamId, setPosition, setPlayerName }) {
  const { token, event } = useSelector((state) => state.user);
  const [teamsList, setTeamsList] = useState([]);

  const positionOptions = [
    { label: "Delantero", value: "forward" },
    { label: "Medio Campo", value: "midfielder" },
    { label: "Defensa", value: "defender" },
    { label: "Arquero", value: "goalkeeper" },
  ];

  const teamsListOptions = useMemo(() => {
    return teamsList.map((team) => {
      return { label: team.name, value: team.id };
    });
  }, [teamsList]);

  const fetchTeamsList = useCallback(async () => {
    try {
      const data = await teamServices.fetchTeamsList(token, event);
      setTeamsList(data);
    } catch (e) {
      toast.error(e.message);
    }
  }, [token, event]);

  useEffect(() => {
    fetchTeamsList();
  }, [fetchTeamsList]);

  return (
    <div className="w-11/12 h-full flex justify-start flex-col md:flex-row gap-2 items-center md:mb-5 md:mt-0 mt-5 mb-3">
      <label
        htmlFor=""
        className="flex bg-bg-contenedor drop-shadow-xl rounded-full md:p-2 p-1 gap-1"
      >
        <input
          type="text"
          value={filters.playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Buscar... "
          className="rounded-full bg-black bg-opacity-0 text-offside-titles text-center font-semibold outline-none"
        />
        <BiSearch size="1.5rem" color="black" />
      </label>{" "}
      <div className="flex gap-2">
        <MarketFilter
          value={filters.teamId}
          options={teamsListOptions}
          setFilter={setTeamId}
        >
          Equipo
        </MarketFilter>
        <MarketFilter
          value={filters.position}
          options={positionOptions}
          setFilter={setPosition}
        >
          Posición
        </MarketFilter>
      </div>
    </div>
  );
}

export default MarketFilters;
