import React from "react";
import Sticker from "../../components/Sticker";

const ObtainedSticker = ({ sticker, fontSize }) => {
  return (
    <div className="h-full w-[18%]">
      <Sticker stickerInfo={sticker} fontSize={fontSize} />
    </div>
  );
};

export default ObtainedSticker;
