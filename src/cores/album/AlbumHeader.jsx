import React, { useMemo } from "react";
import StickersCounter from "./StickersCounter";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  setNextPage,
  setNextTeam,
  setPrevPage,
  setPrevTeam,
} from "../../features/album/albumSlice";

function AlbumHeader() {
  const dispatch = useDispatch();
  const album = useSelector((state) => state.album);

  const isInLastPage =
    album.currentTeam.index === album.teamsList.length - 1 &&
    (album.currentTeam.currentPage === album.currentTeam.pages ||
      album.currentTeam.pages === 0);

  const isInFirstPage =
    album.currentTeam.index === 0 && album.currentTeam.currentPage === 1;

  return (
    <header className="h-full w-full flex items-center justify-around text-gray-100">
      <IoIosArrowBack
        size="1.7rem"
        color=""
        className={`cursor-pointer rounded-full bg-gradient-offside ${
          isInFirstPage ? "invisible" : "visible"
        }`}
        onClick={() => {
          if (
            album.currentTeam.currentPage === 1 ||
            album.currentTeam.currentPage === 0
          )
            dispatch(setPrevTeam());
          else dispatch(setPrevPage());
        }}
      />
      <p className="text-xl font-semibold text-offside-gradient">{album.currentTeam.name}</p>
      <StickersCounter />
      <IoIosArrowForward
        size="1.7rem"
        className={`cursor-pointer rounded-full bg-gradient-offside ${
          isInLastPage ? "invisible" : "visible"
        }`}
        onClick={() => {
          if (
            album.currentTeam.currentPage === album.currentTeam.pages ||
            album.currentTeam.pages === 0
          )
            dispatch(setNextTeam());
          else dispatch(setNextPage());
        }}
      />
    </header>
  );
}

export default AlbumHeader;
