import React from "react";
import MarketFilter from "./MarketFilter";
import { BiSearch } from "react-icons/bi";

function MarketFilters() {
  return (
    <div className="w-11/12 h-full flex justify-start gap-2 items-center mb-5">
      <label
        htmlFor=""
        className="flex bg-bg-contenedor drop-shadow-xl rounded-full md:p-2 p-1 gap-1"
      >
        <input
          type="text"
          placeholder="Buscar... "
          className="rounded-full bg-black bg-opacity-0 text-offside-titles text-center font-semibold"
        />
        <BiSearch size="1.5rem" color="black" />
      </label>
      <MarketFilter>Equipo</MarketFilter>
      <MarketFilter>Posición</MarketFilter>
    </div>
  );
}

export default MarketFilters;
