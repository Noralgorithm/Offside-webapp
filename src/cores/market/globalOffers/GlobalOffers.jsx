import React from "react";
import { useState } from "react";
import GlobalOffersCard from "./GlobalOffersCard";
import GlobalOffersModal from "./GlobalOffersModal";
import DirectBuyModal from "../DirectBuyModal";

function GlobalOffers({ auctions }) {
  const [globalOffersModal, setGlobalOffersModal] = useState(false);
  const [globalBuyModal, setGlobalBuyModal] = useState(false);
  return (
    <section className="w-5/6 h-full grid lg:grid-cols-2 grid-cols-1 gap-y-3 gap-x-10">
      {globalBuyModal && (
        <DirectBuyModal setDirectBuyModal={setGlobalBuyModal} />
      )}
      {globalOffersModal && (
        <GlobalOffersModal setGlobalOffersModal={setGlobalOffersModal} />
      )}
      <GlobalOffersCard
        setGlobalOffersModal={setGlobalOffersModal}
        setGlobalBuyModal={setGlobalBuyModal}
      />
    </section>
  );
}

export default GlobalOffers;
