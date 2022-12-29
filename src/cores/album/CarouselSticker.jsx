import React, { useEffect, useState } from "react";
import Sticker from "../../components/Sticker";
import { useDispatch, useSelector } from "react-redux";
import { selectSticker } from "../../features/album/albumSlice";

const CarouselSticker = ({ eventId, sticker, index }) => {

  const album = useSelector(state => state.album);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectSticker(sticker.sticker.id));
  }

  const isSelectedStyles = album.selectedSticker === sticker.sticker.id ? "w-1/6 cursor-pointer ring-4 ring-red-800 rounded-md" : "w-1/6 cursor-pointer";

  return (
    <div
      className={isSelectedStyles}
      onClick={handleClick}
      key={sticker.sticker.id + "" + index}
    >
      <Sticker fontSize={["6px", "9px"]} stickerInfo={sticker.sticker} />
    </div>
  );
};

export default CarouselSticker;
