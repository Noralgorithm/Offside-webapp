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

  const { myOffers, loading } = useMyOffers(setFilters, filters);

  if (loading) return <Loading />;

  return (
    <section className="w-5/6 h-full grid lg:grid-cols-2 grid-cols-1 gap-y-3 gap-x-10">
      {myOffersBuyModal && (
        <DirectBuyModal setDirectBuyModal={setMyOffersBuyModal} />
      )}
      {editMyOfferModal && (
        <EditMyOfferModal setEditMyOfferModal={setEditMyOfferModal} />
      )}
      <MyOffersCard
        auctions={myOffers}
        setEditMyOfferModal={setEditMyOfferModal}
        setMyOffersBuyModal={setMyOffersBuyModal}
      />
    </section>
  );
}

export default MyOffers;
