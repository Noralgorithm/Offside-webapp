import React, { useMemo } from "react";
import Sticker from "../../components/Sticker";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect } from "react";
import { useState } from "react";
import * as inventoryServices from "../../services/inventory.services";
import { useDispatch, useSelector } from "react-redux";
import { putSticker } from "../../features/album/albumSlice";
import CarouselSticker from "./CarouselSticker";

function Carousel() {
  const stickersPerView = 4;
  const [isLoading, setIsLoading] = useState(true);
  const [stickers, setStickers] = useState([]);
  const [stickersView, setStickersView] = useState([]);
  const [currentBaseStickerIndex, setCurrentBaseStickerIndex] = useState(0);

  const maxStickerIndex = useMemo(() => stickers.length - 1, [stickers]);

  const token = useSelector((state) => state.user.token);
  const album = useSelector((state) => state.album);

  useEffect(() => {
    (async () => {
      try {
        const data = await inventoryServices.fetchCarousel(token, album.eventId);
        setStickers(data.items);
      } catch (e) {
        alert(e.message);
      }
    })();
  }, [token, album.eventId, album.claimedSticker]);

  useEffect(() => {
    setIsLoading(false);
    if (stickers.length !== 0) {
      let stickersToShow = stickers.slice(
        currentBaseStickerIndex,
        currentBaseStickerIndex + stickersPerView
      );
      let i = 0;
      stickersToShow = stickersToShow.filter(
        (sticker) => sticker !== undefined
      );
      while (stickersToShow.length < stickersPerView) {
        console.log(i);
        stickersToShow.push(stickers[i]);
        i === maxStickerIndex ? (i = 0) : i++;
      }
      setStickersView(stickersToShow);

    }
  }, [currentBaseStickerIndex, stickers]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="h-full w-full flex justify-center">
      <div className="h-full w-7/12 bg-gray-300 rounded flex justify-around">
        <div className="h-full flex items-center">
          <IoIosArrowBack
            size="1.5rem"
            className="bg-offsideColorWine rounded-full text-gray-100 cursor-pointer hover:bg-red-800"
            onClick={() => {
              if (currentBaseStickerIndex === 0)
                setCurrentBaseStickerIndex(maxStickerIndex);
              else setCurrentBaseStickerIndex(currentBaseStickerIndex - 1);
            }}
          />
        </div>
        {stickersView.map((sticker, index) => {
          return (
            <CarouselSticker
              eventId={album.eventId}
              sticker={sticker}
              index={index}
              key={sticker.sticker.id}
            />
          );
        })}
        <div className="h-full flex items-center">
          <IoIosArrowForward
            size="1.5rem"
            className="bg-offsideColorWine rounded-full text-gray-100 cursor-pointer hover:bg-red-800"
            onClick={() => {
              if (currentBaseStickerIndex === maxStickerIndex)
                setCurrentBaseStickerIndex(0);
              else setCurrentBaseStickerIndex(currentBaseStickerIndex + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
