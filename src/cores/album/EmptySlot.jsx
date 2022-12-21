import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as inventoryServices from "../../services/inventory.services";
import { putSticker } from "../../features/album/albumSlice";

function EmptySlot({ stickerInfo }) {
  const album = useSelector((state) => state.album);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  const isSelectedStyles = album.selectedSticker
    ? "bg-gray-400 w-full h-full flex flex-col justify-center items-center cursor-pointer"
    : "bg-gray-400 w-full h-full flex flex-col justify-center items-center";

  const claimSticker = async (eventId, stickerId) => {
    try {
      if (album.selectedSticker !== stickerInfo.id)
        throw new Error("Ese sticker no va en esa posición");
      await inventoryServices.claimSticker(token, eventId, stickerId);
      dispatch(putSticker());
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div
      className={isSelectedStyles}
      onClick={() => claimSticker(album.eventId, stickerInfo.id)}
    >
      <p className="text-gray-100 font-semibold text-center">
        {stickerInfo.playerName}
      </p>
      <p className="text-gray-100 font-semibold">{stickerInfo.id}</p>
    </div>
  );
}

export default EmptySlot;
