import React from "react";
import Navbar from "../../components/Navbar";
import MarketPlayerCard from "./MarketPlayerCard";

function Market() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="w-full h-[80%] flex items-center justify-center">
        <div className="w-1/2 h-28">
          <MarketPlayerCard />
        </div>
      </div>
    </div>
  );
}

export default Market;
