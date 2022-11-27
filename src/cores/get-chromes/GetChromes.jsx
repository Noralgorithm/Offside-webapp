import React from "react";
import ChromesScreen from "./ChromesScreen";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import WatchAds from "./WatchAds";

function GetChromes({ hideDailyPack }) {
  const [watchAd, setWatchAd] = useState(false);
  const [useChromeScreen, setUseChromeScreen] = useState(false);
  //eslint-disable-next-line
  const [availablePack, setAvailablePack] = useState(true);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-80">
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
            <div className="w-1/3 h-2/5 relative flex items-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/bc17/b2b5/5a233898015fdba1d2a19b413de2daa7?Expires=1669593600&Signature=Z~GLoX20C6n~QfoJblqSieQZ1Jm06DFPzoajlsFQiL1lG1lyc0ZrzKfg0q5q4Pt0~NG1FR-mqj5AUJBHobT2twIZWsPFeHkJju6T8~R8YRHxuceHDoHsPuNTQf38SGqreNfCQ-O86yfqVWVWKYJYJIuhYEVY353YI5F7eoFTtk~e8tx9NUwSxflMvUsKLubflrTAEh0KCFOwHnXhe-YlAe0vyqz7Ir2MyoGEIQiCyEWMo1IcVvbsqKDls8n4GgZnctYUe446Rxy0MbBcvI1~NlZZNJv-1V-5SdroOSNl~q-5vxRoU0lBpjHkPRT6jACKqxGHMCQrijLyNfGftyQh4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
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
