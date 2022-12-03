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
          <div className="w-full h-[70%]">
            <header className="h-[10%] w-full bg-sticker-name">
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
              className="h-full w-1/2 hover:cursor-pointer bg-gray-100 rounded-xl"
              onClick={() => {
                setShowAlbum(true);
              }}
            />
          </div>
        )}
        <div className="w-full h-[18%]">
          {showAlbum ? (
            <Carousel />
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <h1 className="h-full w-1/2 bg-gray-100 rounded-xl text-sticker-name flex justify-center items-center text-3xl font-semibold">
                ¡Pega tus cromos!
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Album;
