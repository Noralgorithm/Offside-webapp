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
    <div className="w-3/5 h-full flex flex-col sm:justify-center justify-end gap-2 items-center pb-2 sm:pb-0">
      <label
        htmlFor=""
        className="flex bg-bg-contenedor bg-opacity-80 rounded-full md:p-2 p-1 gap-1 drop-shadow-xl text-offside-titles"
      >
        <BiSearch size="1.5rem" color="#49454F" />
        <input
          type="text"
          onChange={handlePlayerNameSearch}
          placeholder="Buscar... "
          className="rounded bg-black bg-opacity-0 text-center font-semibold outline-none"
        />
      </label>
      <div className="flex w-full justify-evenly">
        <Filter handleFilter={handleTeamFilter} options={teams}>
          Equipo
        </Filter>
        <Filter handleFilter={handlePositionFilter} options={positions}>
          Posición
        </Filter>
      </div>
    </div>
  );
}

export default FilterPlayer;
