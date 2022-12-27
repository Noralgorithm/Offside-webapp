import React from "react";
import HalfPage from "./HalfPage";
import { useSelector } from "react-redux";

function Page({ stickers }) {

  const album = useSelector(state => state.album);

  const baseStickerIndex = album.stickersPerPage * (album.currentTeam.currentPage - 1);
  const halfStickerIndex = baseStickerIndex + 6;

  return (
    <div className="w-full h-full bg-gray-300 flex">
      <HalfPage stickers={stickers.slice(baseStickerIndex, halfStickerIndex)} />
      <div className="bg-black w-0.5 h-full"></div>
      <HalfPage stickers={stickers.slice(halfStickerIndex, halfStickerIndex + 6)} />
    </div>
  );
}

export default Page;
