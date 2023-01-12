import React from "react";
import MarketModal from "./MarketModal";
import { TbCurrencyDollar } from "react-icons/tb";

function DirectBuyModal({ setDirectBuyModal, /*auctionInfo*/ }) {
  return (
    <MarketModal>
      <div className="flex flex-col justify-evenly w-full h-full pt-5">
        <div className="w-full flex justify-evenly text-offside-titles">
          <div className="flex flex-col items-center">
            <span className="font-semibold">Compra directa</span>
            <h1 className="flex text-xl font-bold items-center gap-1">
              <TbCurrencyDollar
                size="1.4rem"
                color="white"
                className="bg-gradient-offside rounded-full p-[1px]"
              />
              {/*auctionInfo.initialPurchaseValue*/ 35}
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
              750
            </h1>
          </div>
        </div>
        <div className="w-full flex justify-evenly">
          <span className="bg-gradient-offside p-[1px] rounded-full">
            <button
              className="bg-white rounded-full py-1 px-14"
              onClick={() => {
                setDirectBuyModal(false);
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

export default DirectBuyModal;
