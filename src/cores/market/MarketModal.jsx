import React from "react";
import { BsQuestionCircle } from "react-icons/bs";
import PlayerCircle from "./PlayerCircle";
import HelpModal from "../../components/HelpModal";

function MarketModal({ player, children, helpModal, setHelpModal, helps }) {
  return (
    <div className="w-screen h-screen absolute bg-black bg-opacity-80 left-0 top-0 z-30 flex items-center justify-center">
      {helpModal && (
        <HelpModal
          setHelpModal={setHelpModal}
          screenStyles="md:h-screen h-[944px]"
          helps={helps}
        />
      )}
      <div className="h-4/5 w-1/2 bg-gradient-offside rounded-lg flex flex-col justify-between relative">
        <header className="w-full h-[10%] flex items-center justify-end px-4">
          <BsQuestionCircle
            size="1.5rem"
            className="hover:cursor-pointer"
            onClick={() => {
              setHelpModal(true);
            }}
          />
        </header>
        <div className="absolute w-full top-16 flex flex-col items-center">
          <PlayerCircle playerImg={player.img} />
          <h1 className="text-offside-titles text-xl font-bold">
            {player.playerName}
          </h1>
        </div>
        <section className="w-full h-2/3 bg-white rounded-b-lg">
          {children}
        </section>
      </div>
    </div>
  );
}

export default MarketModal;
