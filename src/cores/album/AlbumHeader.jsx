import React from "react";
import StickersCounter from "./StickersCounter";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setNextPage, setNextTeam, setPrevPage, setPrevTeam } from "../../features/album/albumSlice";

function AlbumHeader({ teamName }) {

  const dispatch = useDispatch();
  const album = useSelector(state => state.album)

  return (
    <header className="h-full w-full flex items-center justify-around text-gray-100">
      <IoIosArrowBack
        size="2rem"
        className="cursor-pointer rounded-full hover:bg-black hover:bg-opacity-40"
        onClick={() => {
          if (album.currentTeam.currentPage === 1)
            dispatch(setPrevTeam());
          else dispatch(setPrevPage());
        }}
      />
      <p className="text-xl font-semibold">{album.currentTeam.name}</p>
      <StickersCounter />
      <IoIosArrowForward
        size="2rem"
        className="cursor-pointer rounded-full hover:bg-black hover:bg-opacity-40"
        onClick={() => {
          if (album.currentTeam.currentPage === album.currentTeam.pages)
            dispatch(setNextTeam());
          else dispatch(setNextPage());
        }}
      />
    </header>
  );
}

export default AlbumHeader;
