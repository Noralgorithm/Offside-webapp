import React from "react";
import Filter from "./Filter";
import { BiSearch } from "react-icons/bi";
import {
  setBenchTeamFilter,
  setBenchPositionFilter,
  setBenchPlayerNameSearch,
} from "../../../features/fantasy/fantasySlice";
import { useSelector } from "react-redux";

function FilterPlayer({ dispatch }) {
  const fantasyState = useSelector((state) => state.fantasy);

  const handleTeamFilter = (e) => {
    dispatch(setBenchTeamFilter(e.target.value));
  };

  const handlePositionFilter = (e) => {
    dispatch(setBenchPositionFilter(e.target.value));
  };

  const handlePlayerNameSearch = (e) => {
    dispatch(setBenchPlayerNameSearch(e.target.value));
  };

  const positions = [
    { id: "forward", name: "Delantero" },
    { id: "defender", name: "Defensa" },
    { id: "midfielder", name: "Medio Campo" },
    { id: "goalkeeper", name: "Arquero" },
  ];

  const teams = fantasyState.teamList.map((team) => {
    return { id: team.name, name: team.name };
  });

  return (
    <div className="w-full h-full flex justify-evenly gap-2 items-center">
      <label
        htmlFor=""
        className="flex bg-bg-contenedor drop-shadow-xl rounded-full md:p-2 p-1 gap-1"
      >
        <input
          type="text"
          onChange={handlePlayerNameSearch}
          placeholder="Buscar... "
          className="rounded-full bg-black bg-opacity-0 text-offside-titles text-center font-semibold"
        />
        <BiSearch size="1.5rem" color="black" />
      </label>
      <Filter handleFilter={handleTeamFilter} options={teams}>
        Equipo
      </Filter>
      <Filter handleFilter={handlePositionFilter} options={positions}>
        Posición
      </Filter>
    </div>
  );
}

export default FilterPlayer;
