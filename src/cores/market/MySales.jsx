import React from "react";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import MarketBench from "./marketBench/MarketBench";
import MySalesCard from "./MySalesCard";

function MySales() {
  const [marketBench, setMarketBench] = useState(false);
  return (
    <section className="w-11/12 h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {marketBench && <MarketBench setMarketBench={setMarketBench} />}
      <MySalesCard />
      <MySalesCard />
      <button
        className="flex h-28 items-center justify-center gap-4 bg-[#EFEFEF] text-offside-titles font-semibold rounded-lg"
        onClick={() => {
          setMarketBench(true);
        }}
      >
        <AiOutlinePlusCircle size="1.5rem" color="#3D405B" />
        Añade tus jugadores al mercado
      </button>
    </section>
  );
}

export default MySales;
