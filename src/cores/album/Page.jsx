import React from "react";
import Sticker from "../../components/Sticker";
import NoStickerSlot from "./NoStickerSlot";

function Page() {
  const array = [true, true, true, true, false, true];
  return (
    <div className="w-full h-full bg-gray-100 flex">
      <div className="w-1/2 h-full grid grid-cols-3 grid-rows-2 justify-items-center content-evenly mt-[1%]">
        {/* {array.map((a) => (
          <div className="w-11/12 h-[90%]">
            {a ? <NoStickerSlot /> : <Sticker fontSize={["8px", "16px"]}/>}
          </div>
        ))} */}
      </div>
      <div className="bg-black w-0.5 h-full"></div>
      <div className="w-1/2 h-full grid grid-cols-3 grid-rows-2 justify-items-center content-around mt-[1%]">
        {/* {array.map(a => (
          <div className="w-11/12 h-[90%]">
            {a ? <NoStickerSlot /> : <Sticker fontSize={["8px", "16px"]}/>}
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Page;
