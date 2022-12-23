import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTeam } from "../../features/album/albumSlice";

function AlbumIndex() {
  const teamsList = useSelector((state) => state.album.teamsList);
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    if (e.target.value !== "") {
        dispatch(filterTeam(e.target.value));
        e.target.value = '';
      }
    }

  return (
    <div className="w-full h-4/5">
      <select
        name=""
        id=""
        onChange={handleChange}
        className="appearance-none w-full text-center rounded h-[8%] bg-sticker-name text-gray-100 border-none block font-semibold text-lg"
      >
        <option value="">Filtrar por equipos</option>
        {teamsList.map((team) => (
          <option value={team.id} key={team.id}>
            {team.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AlbumIndex;
