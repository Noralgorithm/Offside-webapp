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
    <div
      className={`w-full md:h-4/5 h-full bg-white rounded-lg md:p-2 px-2 py-3`}
    >
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
        className=""
        unstyled
        onChange={handleChange}
        {...menuOpen}
        placeholder="Equipos"
        styles={{
          control: (baseStyles, props) => ({
            ...baseStyles,
            backgroundImage: "linear-gradient(to bottom, #D13256, #FE5F42)",
            borderTopRightRadius: "0.5rem",
            borderTopLeftRadius: "0.5rem",
            borderBottomRightRadius: windowSize < 768 ? "0.5rem" : "0",
            borderBottomLeftRadius: windowSize < 768 ? "0.5rem" : "0",
            cursor: "text",
            paddingLeft: "4px",
          }),
          option: (baseStyles, props) => ({
            ...baseStyles,
            backgroundColor: "#E3E2E6",
            borderBottom: "1px solid",
            borderColor: "#BBB9B9",
            padding: "7px 7px",
            backgroundColor: props.isSelected
              ? "#DDB6B6"
              : props.isFocused
              ? "#D4D4D4"
              : "#E3E2E6",
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
          menuList: (baseStyles, props) => ({
            ...baseStyles,
            "::-webkit-scrollbar": {
              width: "20px",
            },

            "::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },

            "::-webkit-scrollbar-thumb": {
              backgroundColor: "#BBB9B9",
              borderRadius: "20px",
              border: "6px solid transparent",
              backgroundClip: "content-box",
            },

            "::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#939191",
            },
          }),
        }}
      />
    </div>
  );
}

export default AlbumIndex;
