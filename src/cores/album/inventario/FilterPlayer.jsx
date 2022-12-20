import React from "react";

function FilterPlayer() {
  const a = ["pais", "posicion", "messi"];
  return (
    <select className="bg-bg-offside text-white font-semibold rounded-full py-2 px-6 text-xl appearance-none my-4 md:my-0">
      <option value="">Ordenar por ▼</option>
      {a.map((a) => {
        return <option value={a}>{a}</option>;
      })}
    </select>
  );
}

export default FilterPlayer;
