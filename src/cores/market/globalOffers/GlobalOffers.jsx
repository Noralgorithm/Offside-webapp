import React from "react";
import { useState, useEffect } from "react";
import GlobalOffersCard from "./GlobalOffersCard";
import GlobalOffersModal from "./GlobalOffersModal";
import DirectBuyModal from "../DirectBuyModal";
import useGlobalOffers from "./useGlobalOffers";
import Loading from "../../../components/Loading";

function GlobalOffers({ filters, setFilters }) {
  const [globalOffersModal, setGlobalOffersModal] = useState(false);
  const [globalBuyModal, setGlobalBuyModal] = useState(false);

  const {
    globalAuctions,
    loading,
    currentAuctionInfo,
    fetchAuctionInfo,
    makeAnOffer,
    makeDirectBuy,
    handleFetchNextPage,
    hasMore
  } = useGlobalOffers(setFilters, filters);

  if (loading) return <Loading />;

  return (
    <div className="h-full w-full flex justify-center">
      {globalBuyModal && (
        <DirectBuyModal
          setDirectBuyModal={setGlobalBuyModal}
          auctionInfo={currentAuctionInfo}
          makeDirectBuy={makeDirectBuy}
        />
      )}
      {globalOffersModal && (
        <GlobalOffersModal
          setGlobalOffersModal={setGlobalOffersModal}
          auctionInfo={currentAuctionInfo}
          makeAnOffer={makeAnOffer}
        />
      )}
      <GlobalOffersCard
        setGlobalOffersModal={setGlobalOffersModal}
        setGlobalBuyModal={setGlobalBuyModal}
        fetchAuctionInfo={fetchAuctionInfo}
        auctions={globalAuctions}
        handleFetchNextPage={handleFetchNextPage}
        hasMore={hasMore}
      />
    </div>
  );
}

export default GlobalOffers;
