import React from "react";
import FilterPlayer from "./FilterPlayer";
import StickerList from "./StickerList";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setPrevPage, setNextPage } from "../../../features/inventory/inventorySlice";

function Page() {

  const inventory = useSelector(state => state.inventory);

  const dispatch = useDispatch();


  return (
    <div className="bg-white w-11/12 h-[90%] flex flex-col items-center md:justify-around justify-start">
      <FilterPlayer />
      <div className="w-full flex justify-around md:h-5/6 h-[95%] items-center">
        <IoIosArrowBack
          size="2rem"
          className="bg-offsideColorWine rounded-full text-gray-100 cursor-pointer hover:bg-red-800"
          onClick={() => dispatch(setPrevPage())}
        />
        <StickerList stickers={inventory.stickers} />
        <IoIosArrowForward
          size="2rem"
          className="bg-offsideColorWine rounded-full text-gray-100 cursor-pointer hover:bg-red-800"
          onClick={() => dispatch(setNextPage())}
        />
      </div>
    </div>
  );
}

export default Page;
