import React, { useEffect } from "react";
import { useState } from "react";
import Sticker from "../../../components/Sticker";

function StickerList({ stickers }) {
  const [stickerSize, setStickerSize] = useState();
  useEffect(() => {
    if (stickers.length <= 4) {
      setStickerSize("33.3%");
    } else if (stickers.length <= 8) {
      setStickerSize("66.6%");
    } else if (stickers.length <= 12) {
      setStickerSize("100%");
    }
  }, [stickers]);

  return (
    <div className="w-11/12 h-full grid md:grid-cols-4 grid-cols-2 justify-items-center gap-y-3">
      {stickers.map((sticker) => {
        return (
          <div
            className="lg:w-[64%] md:w-[84%] w-[90%] relative"
            style={{ height: stickerSize }}
            key={sticker.id}
          >
            <span className="absolute w-6 h-6 rounded-full bg-offsideColorWine right-0 flex items-center justify-center text-white font-bold text-lg">
              {sticker.Quantity}
            </span>
            <Sticker
              stickerInfo={sticker.sticker}
              fontSize={["11px", "18px"]}
            />
          </div>
        );
      })}
    </div>
  );
}

export default StickerList;
