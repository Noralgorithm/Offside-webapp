import React from "react";
import Sticker from "../../components/Sticker";

const ObtainedSticker = ({ sticker, fontSize }) => {
  return (
    <div className="md:h-full h-[90%] md:w-[18%] w-[92%]">
      <Sticker stickerInfo={sticker} fontSize={fontSize} />
    </div>
  );
};

export default ObtainedSticker;
