import React from "react";
import MarketModal from "./MarketModal";

function MySalesModalCard({ setSalesModal }) {
  return (
    <MarketModal>
      <div className="flex flex-col justify-evenly w-full h-full">
        <div className="w-full flex justify-evenly">
          <div htmlFor="" className="flex flex-col items-center">
            <h1 className="font-semibold text-offside-titles">
              Precio inicial
            </h1>
            <label
              htmlFor=""
              className="bg-gradient-offside p-[1px] rounded-full w-4/6"
            >
              <input
                type="number"
                placeholder=""
                className="appearance-none rounded-full text-center text-xl w-full p-1 text-offside-titles font-bold outline-none"
              />
            </label>
          </div>
          <div htmlFor="" className="flex flex-col items-center">
            <h1 className="font-semibold text-offside-titles">
              Compra directa
            </h1>
            <label
              htmlFor=""
              className="bg-gradient-offside p-[1px] rounded-full w-4/6"
            >
              <input
                type="number"
                placeholder=""
                className="appearance-none rounded-full text-center text-xl w-full p-1 text-offside-titles font-bold outline-none"
              />
            </label>
          </div>
        </div>
        <div className="w-full flex justify-evenly">
          <button
            className="bg-gradient-offside rounded-full text-white font-semibold py-1 px-14"
            onClick={() => {
              setSalesModal(false);
            }}
          >
            Volver
          </button>
        </div>
      </div>
    </MarketModal>
  );
}

export default MySalesModalCard;
