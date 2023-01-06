import React from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import MarketSquad from "../marketSquad/MarketSquad";
import MySalesCard from "./MySalesCard";
import MySalesModalCard from "./MySalesModalCard";

function MySales() {
  const [salesModal, setSalesModal] = useState(false);
  const [marketSquad, setMarketSquad] = useState(false);
  return (
    <section className="w-5/6 h-full grid lg:grid-cols-2 grid-cols-1 gap-y-3 gap-x-10">
      {marketSquad && <MarketSquad setMarketSquad={setMarketSquad} />}
      {salesModal && <MySalesModalCard setSalesModal={setSalesModal} />}
      <MySalesCard setSalesModal={setSalesModal} />
      <button
        className="flex h-16 w-16 items-center justify-center gap-4 bg-gradient-offside font-semibold rounded-2xl drop-shadow-xl absolute right-8 bottom-4"
        onClick={() => {
          setMarketSquad(true);
        }}
      >
        <AiOutlinePlus size="1.5rem" color="black" />
      </button>
    </section>
  );
}

export default MySales;
