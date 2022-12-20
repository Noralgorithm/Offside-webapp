import React, { useEffect } from "react";
import { useState } from "react";
import Sticker from "../../../components/Sticker";

function Players(a) {
  a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [stickerSize, setStickerSize] = useState();
  useEffect(() => {
    if (a.length <= 4) {
      setStickerSize("33.3%");
    } else if (a.length <= 8) {
      setStickerSize("66.6%");
    } else if (a.length <= 12) {
      setStickerSize("100%");
    }
  }, a);

  return (
    <div className="w-11/12 h-full grid md:grid-cols-4 grid-cols-2 justify-items-center gap-y-3">
      {a.map(() => {
        return (
          <div
            className="lg:w-[64%] md:w-[84%] w-[90%]"
            style={{ height: stickerSize }}
          >
            <Sticker fontSize={["9px", "18px"]} />
          </div>
        );
      })}
    </div>
  );
}

export default Players;
