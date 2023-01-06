import React from "react";
import { IoExitOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import PlayerCircle from "./PlayerCircle";

function SelectedPlayerModal({ player, setSelectedPlayer, setMarketSquad }) {
  return (
    <div className="h-4/5 w-1/2 bg-gradient-offside rounded-lg flex flex-col justify-between relative">
      <header className="w-full h-[10%] flex items-center justify-between px-4">
        <IoExitOutline
          className="rotate-180 hover:cursor-pointer"
          size="2rem"
          onClick={() => {
            setSelectedPlayer();
          }}
        />
        <BsQuestionCircle size="1.5rem" />
      </header>
      <div className="absolute w-full top-16 flex flex-col items-center">
        <PlayerCircle playerImg={player.img} />
        <h1 className="text-offside-titles text-xl font-bold">
          {player.playerName}
        </h1>
      </div>
      <section className="w-full h-2/3 bg-white rounded-b-lg flex flex-col justify-evenly">
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
          <span className="bg-gradient-offside p-[1px] rounded-full">
            <button
              className="bg-white rounded-full py-1 px-14"
              onClick={() => {
                setMarketSquad(false);
              }}
            >
              <h1 className="text-offside-gradient font-semibold ">Cancelar</h1>
            </button>
          </span>

          <button className="bg-gradient-offside rounded-full text-white font-semibold py-1 px-14">
            Aceptar
          </button>
        </div>
      </section>
    </div>
  );
}

export default SelectedPlayerModal;
