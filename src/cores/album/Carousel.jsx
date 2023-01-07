import React, { useMemo } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useEffect } from "react";
import { useState } from "react";
import * as inventoryServices from "../../services/inventory.services";
import { useSelector } from "react-redux";
import CarouselSticker from "./CarouselSticker";
import Loading from "../../components/Loading";

function Carousel() {
  const STICKERS_PER_VIEW = 4;
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
        const data = await inventoryServices.fetchCarousel(
          token,
          album.eventId
        );
        setStickers(data.items);
      } catch (e) {
        alert(e.message);
      }
    })();
  }, [token, album.eventId, album.claimedSticker]);

  useEffect(() => {
    setIsLoading(false);
    if (stickers.length !== 0 && stickers.length > STICKERS_PER_VIEW) {
      let stickersToShow = stickers.slice(
        currentBaseStickerIndex,
        currentBaseStickerIndex + STICKERS_PER_VIEW
      );
      let i = 0;
      stickersToShow = stickersToShow.filter(
        (sticker) => sticker !== undefined
      );
      while (stickersToShow.length < STICKERS_PER_VIEW) {
        stickersToShow.push(stickers[i]);
        i === maxStickerIndex ? (i = 0) : i++;
      }
      setStickersView(stickersToShow);
    } else setStickersView(stickers);
  }, [currentBaseStickerIndex, stickers, maxStickerIndex]);

  if (isLoading)
    return (
      <div className="w-full h-1/2 relative">
        <Loading />
      </div>
    );

  return (
    <div className="h-full w-full flex justify-center md:items-start items-center">
      <div className="md:h-full h-1/2 md:w-7/12 w-full bg-gradient-offside rounded flex justify-around">
        <div className="h-full flex items-center">
          <IoIosArrowDropleftCircle
            size="2rem"
            className="rounded-full text-gray-100 cursor-pointer"
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
          <IoIosArrowDroprightCircle
            size="2rem"
            className="rounded-full text-gray-100 cursor-pointer"
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
