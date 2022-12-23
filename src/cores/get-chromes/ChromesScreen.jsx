import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import * as stickerServices from "../../services/sticker.services";
import ObtainedSticker from "./ObtainedSticker";

function ChromesScreen({ hideChromesScreen }) {
  const token = useSelector(state => state.user.token)
  const [stickers, setStickers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fontSize = ['12px', '18px'];

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

  if (loading) return <h2>Loading...</h2>;
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="absolute h-5/6 w-10/12">
        <div className="h-1/2 flex w-full justify-around items-center my-20">
          {stickers.map(sticker => <ObtainedSticker sticker={sticker} fontSize={fontSize} />)}
        </div>
        <div className="w-full flex justify-center">
          <button
            className="bg-green-700 text-white text-2xl w-2/12 rounded-full p-4 flex justify-around hover:bg-green-800"
            onClick={() => {
              hideChromesScreen(false);
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
