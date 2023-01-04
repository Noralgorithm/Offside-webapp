import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTeam } from "../../features/album/albumSlice";
import Select from "react-select";
import BallTeams from "../../Images/EquiposBall.png";

function AlbumIndex() {
  const album = useSelector((state) => state.album);
  const dispatch = useDispatch();
  const windowSize = window.innerWidth;
  const menuOpen = { ...(windowSize > 768 && { menuIsOpen: true }) };

  const handleChange = async (e) => {
    if (e.value !== "") {
      dispatch(filterTeam(e.value));
      e.value = "";
    }
  };

  const renderCustomItem = (item) => {
    return (
      <div className="w-full h-full flex gap-3">
        <img
          src={item.image}
          alt=""
          className={`${
            item.label === "Equipos" ? "h-7 w-8" : "h-6 w-6"
          } rounded-full`}
        />{" "}
        <h1
          className={`${
            item.label === "Equipos" ? "text-white" : "text-black"
          } font-semibold`}
        >
          {item.label}
        </h1>
      </div>
    );
  };

  return (
    <div className={`w-full md:h-4/5 h-full bg-[#EFEFEF] rounded p-2`}>
      <Select
        value={{
          value: album.currentTeam ? album.currentTeam.id : "",
          label: "Equipos",
          image: BallTeams,
        }}
        options={album.teamsList.map((team) => {
          return { value: team.id, label: team.name, image: team.badge };
        })}
        formatOptionLabel={renderCustomItem}
        className="z-0"
        onChange={handleChange}
        {...menuOpen}
        placeholder="Equipos"
        styles={{
          control: (baseStyles, props) => ({
            ...baseStyles,
            backgroundColor: "#7CABAC",
          }),
          placeholder: (baseStyles, props) => ({
            ...baseStyles,
            color: "white",
            fontWeight: 600,
          }),
          dropdownIndicator: (baseStyles, props) => ({
            ...baseStyles,

            display: windowSize < 768 ? "block" : "none",
          }),
          indicatorSeparator: (baseStyles, props) => ({
            ...baseStyles,
            display: windowSize < 768 ? "block" : "none",
          }),
        }}
      />
    </div>
  );
}

export default AlbumIndex;
