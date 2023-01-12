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
  } = useGlobalOffers(setFilters, filters);

  if (loading) return <Loading />;

  return (
    <section className="w-5/6 h-full grid lg:grid-cols-2 grid-cols-1 gap-y-3 gap-x-10">
      {globalBuyModal && (
        <DirectBuyModal
          setDirectBuyModal={setGlobalBuyModal}
          auctionInfo={currentAuctionInfo}
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
      />
    </section>
  );
}

export default GlobalOffers;
