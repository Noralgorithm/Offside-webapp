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
import { BiQuestionMark } from "react-icons/bi";
import HelpModal from "../../components/HelpModal";
import { helps } from "./helpModal/Helps";

function PreAlbum() {
  const [showAlbum, setShowAlbum] = useState(false);
  const [loading, setLoading] = useState(true);
  const [albumInfo, setAlbumInfo] = useState({});
  const [helpModal, setHelpModal] = useState(false);

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
      {helpModal && (
        <HelpModal
          setHelpModal={setHelpModal}
          screenStyles={
            "md:h-[calc(100%+48px)] h-[calc(1050px+48px)] md:items-center md:pt-0"
          }
          helps={helps}
        />
      )}
      <div className="xl:w-3/12 md:w-2/12 h-full md:flex items-center hidden">
        <AlbumIndex currentTeam={album.currentTeam} />
      </div>
      <div className="xl:w-[65%] md:w-[80%] w-11/12 flex flex-col md:justify-evenly justify-start gap-5 md:gap-0 md:mt-0 mt-5 h-full items-center md:items-start">
        <div className="w-full md:h-[5%] h-[3%] relative">
          <ProgressBar percentage={albumInfo.actualProgressPercentage} />
          <button
            className="rounded-full bg-gradient-offside p-[2px] h-6 absolute top-0 xl:right-0 right-[2%]"
            onClick={() => {
              setHelpModal(true);
            }}
          >
            <BiQuestionMark size="1.3rem" color="white" />
          </button>
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
        <div className="w-full h-[18%]">
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
