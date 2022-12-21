import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AlbumHeader from "./AlbumHeader";
import Page from "./Page";
import * as inventoryServices from "../../services/inventory.services";
import { setCurrentTeam, setTeamsList } from "../../features/album/albumSlice";
import { useDispatch, useSelector } from "react-redux";

const Album = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const album = useSelector((state) => state.album);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    (async () => {
      const fetchedTeams = await inventoryServices.fetchTeamsList(
        token,
        album.eventId
      );
      dispatch(setTeamsList(fetchedTeams));
      const teamInfo = await inventoryServices.fetchTeam(
        token,
        album.eventId,
        album.currentTeam.id || fetchedTeams[0].id
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
        alert(e.message);
      }
    })();
  }, [album.currentTeam.index, album.claimedSticker]);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="w-full h-[70%]">
      <header className="h-[10%] w-full bg-sticker-name">
        <AlbumHeader teamName={album.teamsList[album.currentTeam.index].name} />
      </header>
      <div className="w-full h-[90%]">
        <Page stickers={album.currentTeam.stickers} />
      </div>
    </div>
  );
};

export default Album;
