import React from "react";
import MarketCard from "../MarketCard";
import { TbCurrencyDollar } from "react-icons/tb";
import { FiClock } from "react-icons/fi";
import { convertTime } from "../../../utils/convertTime";
import InfiniteScroll from "react-infinite-scroll-component";

function MyOffersCard({
  auctions,
  fetchAuctionInfo,
  setEditMyOfferModal,
  setMyOffersBuyModal,
  handleFetchNextPage,
  hasMore
}) {
  return (
    <div className="w-[95%]">
      <InfiniteScroll
        dataLength={auctions.length}
        next={handleFetchNextPage}
        hasMore={hasMore}
        loader={<h2>Cargando...</h2>}
        endMessage={<h2>No hay más.</h2>}
        className="w-full h-full grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-3 gap-x-7 overflow-hidden content-start justify-items-center"
      >
        {auctions.map((auction) => (
          <MarketCard key={auction.id} stickerInfo={auction.market.sticker}>
            <section className="w-full h-4/6 flex items-center">
              <div className="h-full w-1/2 flex flex-col justify-around">
                <div className="flex gap-1 items-center">
                  <TbCurrencyDollar
                    size="1.4rem"
                    color="white"
                    className="bg-gradient-offside rounded-full p-[1px]"
                  />
                  <h1 className="text-offside-titles font-bold text-lg">
                    {auction.market.initialPurchaseValue}
                  </h1>
                </div>
                <div className="flex gap-1 items-center">
                  <FiClock size="1.4rem" />
                  <h1 className="text-offside-titles font-bold md:text-lg text-base">
                    {convertTime(auction.market.finishDate)}
                  </h1>
                </div>
              </div>
              <div className="h-full w-1/2 flex flex-col md:justify-between justify-around items-center">
                <button
                  className="bg-gradient-offside text-white md:px-11 px-9 py-1 rounded-full md:text-base text-xs"
                  onClick={() => {
                    fetchAuctionInfo(auction.market.id);
                    setEditMyOfferModal(true);
                  }}
                >
                  Editar
                </button>
                <button
                  className="bg-gradient-offside text-white px-2 py-1 rounded-full md:text-base text-xs"
                  onClick={() => {
                    fetchAuctionInfo(auction.market.id);
                    setMyOffersBuyModal(true);
                  }}
                >
                  Compra directa
                </button>
              </div>
            </section>
          </MarketCard>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default MyOffersCard;
