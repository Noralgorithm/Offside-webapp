import React from "react";
import ChromesScreen from "./ChromesScreen";
import SobreOffside from "../../Images/SobreOffside.png";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import WatchAds from "./WatchAds";

function GetChromes({ hideDailyPack }) {
  const [watchAd, setWatchAd] = useState(false);
  const [useChromeScreen, setUseChromeScreen] = useState(false);
  //eslint-disable-next-line
  const [availablePack, setAvailablePack] = useState(true);

  return (
    <div className="w-screen h-screen absolute z-50 top-0 left-0 bg-black bg-opacity-80">
      <div
        className={`w-full h-full flex justify-center items-center ${
          watchAd || useChromeScreen ? "hidden" : ""
        }`}
      >
        <div className="w-1/2 h-2/3 bg-white rounded">
          <header className="w-full flex justify-end">
            <button
              className="py-1 px-2"
              onClick={() => {
                hideDailyPack(false);
              }}
            >
              <AiOutlineClose size="2rem" />
            </button>
          </header>
          <div className="w-full h-1/2 flex justify-center items-center">
            <div className="md:w-1/2 md:h-2/5 w-full relative flex items-center">
              <img
                src={SobreOffside}
                alt="Sobre Offside"
                className={`hover:cursor-pointer object-contain ${
                  availablePack ? "opacity-100" : "opacity-70"
                }`}
                onClick={() => {
                  setWatchAd(!watchAd);
                }}
              />
            </div>
          </div>
          <div className="h-2/6 flex justify-center pt-8">
            <div className="text-xl font-bold">
              <h1>Disponible en:</h1>
              <h1 className="text-red-600 w-full flex justify-center">
                12:32:15
              </h1>
            </div>
          </div>
        </div>
      </div>
      {watchAd && (
        <WatchAds
          adScreen={setWatchAd}
          showChromesScreen={setUseChromeScreen}
        />
      )}
      {useChromeScreen && (
        <ChromesScreen hideChromesScreen={setUseChromeScreen} />
      )}
    </div>
  );
}

export default GetChromes;
