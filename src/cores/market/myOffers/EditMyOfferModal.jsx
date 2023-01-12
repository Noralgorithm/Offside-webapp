import React, { useState } from "react";
import MarketModal from "../MarketModal";
import { TbCurrencyDollar } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useSelector } from "react-redux";

function EditMyOfferModal({ setEditMyOfferModal, auctionInfo }) {
  const money = useSelector(state => state.user.money);

  const [myOffer, setMyOffer] = useState(0);

  return (
    <MarketModal player={auctionInfo.market.sticker}>
      <div className="flex flex-col justify-evenly w-full h-full pt-5">
        <div className="w-full flex justify-evenly text-offside-titles">
          <div className="flex flex-col items-center">
            <span className="font-semibold">Mi anterior oferta</span>
            <h1 className="flex text-xl font-bold items-center gap-1">
              <TbCurrencyDollar
                size="1.4rem"
                color="white"
                className="bg-gradient-offside rounded-full p-[1px]"
              />
              {auctionInfo.myLastBid.value}
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Oferta ganadora actual</span>
            <h1 className="flex text-xl font-bold items-center gap-1">
              <TbCurrencyDollar
                size="1.4rem"
                color="white"
                className="bg-gradient-offside rounded-full p-[1px]"
              />
              {auctionInfo.highestBid.value}
            </h1>
          </div>
        </div>
        <div className="w-full flex justify-around text-offside-titles">
          <div className="flex items-end justify-end w-[40%]">
            <div className="flex flex-col items-center">
              <span className="font-semibold">Mi nueva oferta</span>
              <label
                htmlFor=""
                className="bg-gradient-offside p-[1px] rounded-full"
              >
                <input
                  type="number"
                  placeholder=""
                  value={myOffer === 0 ? '' : myOffer}
                  onChange={(e) => setMyOffer(e.target.value)}
                  className="appearance-none rounded-full text-center text-xl w-full p-1 text-offside-titles font-bold outline-none"
                />
              </label>
            </div>
            <h1 className="h-4/6 flex items-center text-[#00DB71] text-xl font-bold">
              (+
              <RiMoneyDollarCircleFill />
              {myOffer})
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Saldo luego de la operación</span>
            <h1 className="flex text-xl font-bold items-center gap-1">
              <TbCurrencyDollar
                size="1.4rem"
                color="white"
                className="bg-gradient-offside rounded-full p-[1px]"
              />
              {money - myOffer - auctionInfo.highestBid.value}
            </h1>
          </div>
        </div>
        <div className="w-full flex justify-evenly">
          <span className="bg-gradient-offside p-[1px] rounded-full">
            <button
              className="bg-white rounded-full py-1 px-14"
              onClick={() => {
                setEditMyOfferModal(false);
              }}
            >
              <h1 className="text-offside-gradient font-semibold ">Cancelar</h1>
            </button>
          </span>
          <button className="bg-gradient-offside rounded-full text-white font-semibold py-1 px-14">
            Aceptar
          </button>
        </div>
      </div>
    </MarketModal>
  );
}

export default EditMyOfferModal;
