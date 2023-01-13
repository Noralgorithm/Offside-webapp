import React from "react";
import { useState } from "react";
import EditMyOfferModal from "./EditMyOfferModal";
import DirectBuyModal from "../DirectBuyModal";
import MyOffersCard from "./MyOffersCard";
import useMyOffers from "./useMyOffers";
import Loading from "../../../components/Loading";

function MyOffers({ setFilters, filters }) {
  const [editMyOfferModal, setEditMyOfferModal] = useState(false);
  const [myOffersBuyModal, setMyOffersBuyModal] = useState(false);

  const {
    myOffers,
    loading,
    currentAuctionInfo,
    fetchAuctionInfo,
    updateAnOffer,
    handleFetchNextPage,
    hasMore
  } = useMyOffers(setFilters, filters);

  if (loading) return <Loading />;

  return (
    <div className="w-full h-full">
      {myOffersBuyModal && (
        <DirectBuyModal
          setDirectBuyModal={setMyOffersBuyModal}
          auctionInfo={currentAuctionInfo}
          makeDirectBuy={updateAnOffer}
        />
      )}
      {editMyOfferModal && (
        <EditMyOfferModal
          setEditMyOfferModal={setEditMyOfferModal}
          auctionInfo={currentAuctionInfo}
          updateAnOffer={updateAnOffer}
        />
      )}
      <MyOffersCard
        auctions={myOffers}
        fetchAuctionInfo={fetchAuctionInfo}
        setEditMyOfferModal={setEditMyOfferModal}
        setMyOffersBuyModal={setMyOffersBuyModal}
        handleFetchNextPage={handleFetchNextPage}
        hasMore={hasMore}
      />
    </div>
  );
}

export default MyOffers;
