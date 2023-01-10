import React, { useEffect } from "react";
import AlbumIndex from "./AlbumIndex";
import Carousel from "./Carousel";
import ProgressBar from "./ProgressBar";
import AlbumOffside from "../../Images/AlbumOffside.png";
import { useState } from "react";
import * as inventoryServices from "../../services/inventory.services";
import { useDispatch, useSelector } from "react-redux";
import Album from "./Album";
import { setTeamsList } from "../../features/album/albumSlice";
import Loading from "../../components/Loading";

function PreAlbum() {
  const [showAlbum, setShowAlbum] = useState(false);
  const [loading, setLoading] = useState(true);
  const [albumInfo, setAlbumInfo] = useState({});

  const token = useSelector((state) => state.user.token);
  const eventId = useSelector((state) => state.album.eventId);
  const album = useSelector((state) => state.album);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const fetchedTeams = await inventoryServices.fetchTeamsList(
        token,
        album.eventId
      );
      dispatch(setTeamsList(fetchedTeams));
      const data = await inventoryServices.fetchAlbumInfo(token, eventId);
      setAlbumInfo(data);
      setLoading(false);
    })();
  }, [token, eventId, album.claimedSticker, album.eventId, dispatch]);
  if (loading) return <Loading />;
  return (
    <div className="w-screen flex md:justify-around md:flex-row flex-col h-full md:items-start items-center">
      <div className="xl:w-[calc(1280px_*_3/12)] lg:w-[calc(1024px_*_3/12)] md:w-[calc(1024px_*_2/12)] md:h-[627px] md:flex items-center hidden w-2/12">
        <AlbumIndex currentTeam={album.currentTeam} />
      </div>
      <div className="xl:w-[calc(1280px_*_0.65)] lg:w-[calc(1024px_*_0.70)] min-[1152px]:w-[calc(1024px_*_0.82)] md:w-[80%] w-[calc(414px_*_11/12)] flex flex-col md:justify-evenly justify-start gap-5 md:gap-0 md:mt-0 mt-5 h-full items-center md:items-start">
        <div className="w-full md:h-[5%] h-[3%]">
          <ProgressBar percentage={albumInfo.actualProgressPercentage} />
        </div>

        <div className="w-11/12 h-[6%] flex items-center md:hidden">
          <AlbumIndex />
        </div>

        {showAlbum ? (
          <Album />
        ) : (
          <div className="w-full md:h-4/6 h-2/5 flex justify-center">
            <img
              src={AlbumOffside}
              alt=""
              className="h-full md:w-1/2 w-full hover:cursor-pointer rounded-xl bg-white"
              onClick={() => {
                setShowAlbum(true);
              }}
            />
          </div>
        )}
        <div className="w-full h-[20%]">
          {showAlbum ? (
            <Carousel />
          ) : (
            <div
              className="w-full md:h-full h-1/2 flex justify-center items-center cursor-pointer"
              onClick={() => {
                setShowAlbum(true);
              }}
            >
              <h1 className="h-full md:w-1/2 w-11/12 bg-bg-empty rounded-xl text-white flex justify-center items-center text-3xl font-semibold">
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
