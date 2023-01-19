import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as inventoryServices from "../../services/inventory.services";
import { putSticker } from "../../features/album/albumSlice";
import { toast } from "react-toastify";

function EmptySlot({ stickerInfo }) {
  const album = useSelector((state) => state.album);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  const isSelectedStyles = album.selectedSticker
    ? "bg-[#3D405B] w-full h-full flex flex-col justify-center items-center cursor-pointer"
    : "bg-[#3D405B] w-full h-full flex flex-col justify-center items-center";

  const claimSticker = async (eventId, stickerId) => {
    try {
      if (album.selectedSticker === stickerInfo.id)
        await inventoryServices.claimSticker(token, eventId, stickerId);
      dispatch(putSticker());
    } catch (e) {
      toast.error(e.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  return (
    <div
      className={isSelectedStyles}
      onClick={() => claimSticker(album.eventId, stickerInfo.id)}
    >
      <p className="text-white font-semibold text-center">
        {stickerInfo.playerName}
      </p>
      <p className="text-white font-semibold">{stickerInfo.jerseyNumber}</p>
    </div>
  );
}

export default EmptySlot;
