import React from "react";
import ChromesScreen from "./ChromesScreen";
import { useState } from "react";
import WatchAds from "./WatchAds";

function GetChromes({ hideDailyPack, setIsAvailable }) {
  const [watchAd, setWatchAd] = useState(true);
  const [useChromeScreen, setUseChromeScreen] = useState(false);
  //eslint-disable-next-line
  const [availablePack, setAvailablePack] = useState(true);

  return (
    <div className="w-screen md:h-[calc(100vh+48px)] h-[1048px] absolute z-50 top-0 left-0 bg-black bg-opacity-80">
      <div
        className={`w-full h-full flex justify-center items-center ${
          watchAd || useChromeScreen ? "hidden" : ""
        }`}
      ></div>
      {watchAd && (
        <WatchAds
          adScreen={setWatchAd}
          showChromesScreen={setUseChromeScreen}
        />
      )}
      {useChromeScreen && (
        <ChromesScreen
          hideDailyPack={hideDailyPack}
          setIsAvailable={setIsAvailable}
        />
      )}
    </div>
  );
}

export default GetChromes;
