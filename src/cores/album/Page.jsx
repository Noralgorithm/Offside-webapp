import React from "react";
import HalfPage from "./HalfPage";
import { useSelector } from "react-redux";

function Page({ stickers }) {

  const album = useSelector(state => state.album);

  const baseStickerIndex = album.stickersPerPage * (album.currentTeam.currentPage - 1);
  const halfStickerIndex = baseStickerIndex + 6;

  return (
    <div className="w-full h-full bg-[#E3E2E6] flex md:flex-row flex-col border border-[#CAC4D0] rounded-b">
      <HalfPage stickers={stickers.slice(baseStickerIndex, halfStickerIndex)} />
      <div className="bg-[#CAC4D0] w-0.5 h-full md:block hidden"></div>
      <HalfPage stickers={stickers.slice(halfStickerIndex, halfStickerIndex + 6)} />
    </div>
  );
}

export default Page;
