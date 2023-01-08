import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import * as stickerServices from "../../services/sticker.services";
import ObtainedSticker from "./ObtainedSticker";

function ChromesScreen({ hideDailyPack }) {
  const token = useSelector(state => state.user.token)
  const [stickers, setStickers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fontSize = ['12px', '20px'];

  useEffect(() => {
    (async () => {
      try {
        const data = await stickerServices.obtain(token);
        setStickers(data.stickers);
        setLoading(false);
      } catch(e) {
        alert(e.message);
      }

    })();
  }, [token])

  if (loading) return <div className="w-full h-full relative"><Loading /></div>;
  return (
    <div className="w-full h-full flex justify-center md:items-center">
      <div className="absolute md:h-[75%] h-[90%] md:w-10/12 w-11/12 md:mt-0 mt-4">
        <div className="md:h-1/2 h-[80%] md:flex w-full md:justify-around md:items-center md:my-20 grid grid-cols-2 gap-2">
          {stickers.map(sticker => <ObtainedSticker sticker={sticker} fontSize={fontSize} />)}
        </div>
        <div className="w-full flex justify-center">
          <button
            className="bg-green-700 text-white text-2xl md:w-2/12 w-1/2 rounded-full p-4 flex justify-around hover:bg-green-800"
            onClick={() => {
              hideDailyPack(false); 
            }}
          >
            {" "}
            <BsCheckCircle size="2rem" />
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChromesScreen;
