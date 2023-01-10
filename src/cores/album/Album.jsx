import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AlbumHeader from "./AlbumHeader";
import Page from "./Page";
import * as inventoryServices from "../../services/inventory.services";
import {
  setCurrentTeam,
  setPage,
  setTeamsList,
} from "../../features/album/albumSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";

const Album = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const album = useSelector((state) => state.album);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    (async () => {
      const teamInfo = await inventoryServices.fetchTeam(
        token,
        album.eventId,
        album.currentTeam.id || album.teamsList[0].id
      );
      dispatch(setCurrentTeam(teamInfo));
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (album?.teamsList[album.currentTeam.index]?.id) {
          const teamInfo = await inventoryServices.fetchTeam(
            token,
            album.eventId,
            album?.teamsList[album.currentTeam.index]?.id
          );
          dispatch(setCurrentTeam(teamInfo));
        }
      } catch (e) {
        toast.error(e.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    })();
  }, [album.currentTeam.index, album.claimedSticker]);

  if (isLoading)
    return (
      <div className="w-full h-[70%] relative">
        <Loading />
      </div>
    );
  return (
    <div className="w-full xl:h-[70%] min-[1152px]:h-[65%] lg:h-[55%] h-[70%]">
      <header className="md:h-[10%] h-[7%] w-full bg-[#FAF7F7] border border-[#CAC4D0] rounded-t">
        <AlbumHeader />
      </header>
      <div className="w-full md:h-[90%] h-full">
        <Page stickers={album.currentTeam.stickers} />
      </div>
    </div>
  );
};

export default Album;
