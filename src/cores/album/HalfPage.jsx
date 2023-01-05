import React from "react";
import EmptySlot from "./EmptySlot";
import Sticker from "../../components/Sticker";

const HalfPage = ({ stickers }) => {
  return (
    <div className="md:w-1/2 w-full h-full grid grid-cols-3 grid-rows-2 justify-items-center content-around mt-[1%]">
      {stickers.map((sticker) => (
        <div className="w-11/12 h-[90%]" key={sticker.id}>
          {!sticker.isAttached ? (
            <EmptySlot stickerInfo={sticker} />
          ) : (
            <Sticker stickerInfo={sticker} fontSize={["8px", "14px"]} />
          )}
        </div>
      ))}
    </div>
  );
};

export default HalfPage;
