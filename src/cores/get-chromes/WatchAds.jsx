import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import Ad from "./Ad";
import * as adServices from "../../services/ad.services";
import { useSelector } from "react-redux";

function WatchAds({ adScreen, showChromesScreen }) {
  const [closeAd, setCloseAd] = useState(false);
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = useSelector(state => state.user.token);

  useEffect(() => {
    (async () => {
      try {
      const data = await adServices.watch(token);
      setAd(data.ad);
      setLoading(false);
      setTimeout(setCloseAd, 2000, true);
    } catch(e) {
      alert(e.message);
      setCloseAd(true);
    }
  })();
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="absolute h-2/3 w-2/6 bg-white">
        <header className="w-full flex justify-end">
          <button className={`py-1 px-2 ${closeAd ? "visible" : "invisible"}`}>
            <AiOutlineClose
              size="2rem"
              onClick={() => {
                adScreen(false);
                showChromesScreen(true);
              }}
            />
          </button>
        </header>
        <div className="w-full h-4/5 flex justify-center items-center">
          <div className="h-full w-7/12">
            {loading ? <h2>loading...</h2>  : <Ad imgSource={ad.img} id={ad.id} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchAds;
