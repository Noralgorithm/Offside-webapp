import React, { useEffect } from "react";
import AlbumIndex from "./AlbumIndex";
import Carousel from "./Carousel";
import ProgressBar from "./ProgressBar";
import AlbumOffside from "../../Images/AlbumOffside.png";
import { useState } from "react";
import * as inventoryServices from "../../services/inventory.services";
import { useSelector } from "react-redux";
import Album from "./Album";

function PreAlbum() {
  const [showAlbum, setShowAlbum] = useState(false);
  const [loading, setLoading] = useState(true);
  const [albumInfo, setAlbumInfo] = useState({});

  const token = useSelector((state) => state.user.token);
  const eventId = useSelector((state) => state.album.eventId);
  const album = useSelector((state) => state.album);

  useEffect(() => {
    (async () => {
      const data = await inventoryServices.fetchAlbumInfo(token, eventId);
      setAlbumInfo(data);
      setLoading(false);
    })();
  }, [token, eventId, album.claimedSticker]);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="w-screen flex justify-around h-full">
      <div className="w-3/12 h-full flex items-center">
        <AlbumIndex />
      </div>
      <div className="w-7/12 flex flex-col justify-evenly h-full">
        <div className="w-full h-[5%]">
          <ProgressBar percentage={albumInfo.actualProgressPercentage} />
        </div>

        {showAlbum ? (
          <Album />
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
            <div
              className="w-full h-full flex justify-center items-center cursor-pointer"
              onClick={() => {
                setShowAlbum(true);
              }}
            >
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

export default PreAlbum;
