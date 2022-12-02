import React from "react";
import AlbumHeader from "./AlbumHeader";
import AlbumIndex from "./AlbumIndex";
import Carousel from "./Carousel";
import Page from "./Page";
import ProgressBar from "./ProgressBar";
import AlbumOffside from "../../Images/AlbumOffside.png";
import { useState } from "react";

function Album() {
  const [showAlbum, setShowAlbum] = useState(false);

  return (
    <div className="w-screen flex justify-around h-full">
      <div className="w-3/12 h-full flex items-center">
        <AlbumIndex />
      </div>
      <div className="w-7/12 flex flex-col justify-evenly h-full">
        <div className="w-full h-[5%]">
          <ProgressBar />
        </div>

        {showAlbum ? (
          <div className="w-full h-[70%] bg-blue-900">
            <header className="h-[10%]">
              <AlbumHeader />
            </header>
            <div className="w-full h-[90%]">
              <Page />
            </div>
          </div>
        ) : (
          <div className="w-full h-4/6 flex justify-center">
            <img
              src={AlbumOffside}
              alt=""
              className="h-full w-1/2 hover:cursor-pointer"
              onClick={() => {
                setShowAlbum(true);
              }}
            />
          </div>
        )}
        <div className="w-full h-1/6">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Album;
