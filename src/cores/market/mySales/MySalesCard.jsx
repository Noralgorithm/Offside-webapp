import React from "react";
import MarketCard from "../MarketCard";
import { TbCurrencyDollar } from "react-icons/tb";
import { FiClock } from "react-icons/fi";
import { convertTime } from "../../../utils/convertTime";

function MySalesCard({ auctions, setSalesModal }) {
  return (
    <>
      {auctions.map((auction) => (
        <MarketCard key={auction.id} stickerInfo={auction.sticker}>
          <section className="w-full h-4/6 flex items-center">
            <div className="h-full w-1/2 flex flex-col justify-around">
              <div className="flex gap-1 items-center">
                <TbCurrencyDollar
                  size="1.4rem"
                  color="white"
                  className="bg-gradient-offside rounded-full p-[1px]"
                />
                <h1 className="text-offside-titles font-bold text-lg">
                  {auction.initialPurchaseValue}
                </h1>
              </div>
              <div className="flex gap-1 items-center">
                <FiClock size="1.4rem" />
                <h1 className="text-offside-titles font-bold text-lg">
                  {convertTime(auction.finishDate)}
                </h1>
              </div>
            </div>
            <div className="h-3/4 w-1/2 flex justify-center items-center">
              <button
                className="bg-gradient-offside text-white px-2 py-1 rounded-full"
                onClick={() => {
                  setSalesModal(true);
                }}
              >
                Ver información
              </button>
            </div>
          </section>
        </MarketCard>
      ))}
    </>
  );
}

export default MySalesCard;
