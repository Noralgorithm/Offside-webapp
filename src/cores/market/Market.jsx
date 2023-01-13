import React, { useState } from "react";
import GlobalOffers from "./globalOffers/GlobalOffers";
import MarketFilters from "./MarketFilters";
import MyOffers from "./myOffers/MyOffers";
import MySales from "./mySales/MySales";
import { BiQuestionMark } from "react-icons/bi";
import useMarket from "./useMarket";

function Market() {
  const [mySales, setMySales] = useState(false);
  const [myOffers, setMyOffers] = useState(false);

  const { setFilters, teamId, position, playerName, setTeamId, setPosition, setPlayerName } = useMarket();

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full bg-black bg-opacity-40">
        <h1 className="text-white text-4xl w-1/4 text-center font-bold mt-4">
          Mercado
        </h1>
        <div className="w-1/2 flex justify-around items-end h-1/2 mb-6">
          <button
            className={`text-white font-semibold text-lg px-3 hover:border-b-red-offside hover:border-b-2 ${
              !mySales && !myOffers
                ? "border-b-red-offside border-b-2"
                : "border-b-transparent border-b-0"
            }`}
            onClick={() => {
              setMyOffers(false);
              setMySales(false);
            }}
          >
            Ofertas globales
          </button>
          <button
            className={`text-white font-semibold text-lg px-3 hover:border-b-red-offside hover:border-b-2 ${
              myOffers
                ? "border-b-red-offside border-b-2"
                : "border-b-transparent border-b-0"
            }`}
            onClick={() => {
              setMyOffers(true);
              setMySales(false);
            }}
          >
            Mis ofertas
          </button>
          <button
            className={`text-white font-semibold text-lg px-3 hover:border-b-red-offside hover:border-b-2 ${
              mySales
                ? "border-b-red-offside border-b-2"
                : "border-b-transparent border-b-0"
            }`}
            onClick={() => {
              setMyOffers(false);
              setMySales(true);
            }}
          >
            Mis subastas
          </button>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center overflow-y-scroll banca">
        <div className="mt-5 w-11/12 flex justify-between items-center">
          <MarketFilters
            filters={{ teamId, position, playerName }}
            setTeamId={setTeamId}
            setPosition={setPosition}
            setPlayerName={setPlayerName}
          />
          <button className="rounded-full bg-gradient-offside p-[2px] h-6">
            <BiQuestionMark size="1.3rem" color="white" />
          </button>
        </div>
        {!myOffers && !mySales && (
          <GlobalOffers
            setFilters={setFilters}
            filters={{ teamId, position, playerName }}
          />
        )}
        {myOffers && (
          <MyOffers
            setFilters={setFilters}
            filters={{ teamId, position, playerName }}
          />
        )}
        {mySales && (
          <MySales
            setFilters={setFilters}
            filters={{ teamId, position, playerName }}
          />
        )}
      </div>
    </div>
  );
}

export default Market;
