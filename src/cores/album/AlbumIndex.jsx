import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTeam } from "../../features/album/albumSlice";
import Select from "react-select";
import { RiArrowDownSFill } from "react-icons/ri";

function AlbumIndex() {
  const teamsList = useSelector((state) => state.album.teamsList);
  const dispatch = useDispatch();
  console.log(teamsList);

  const handleChange = async (e) => {
    console.log(e.value);
    if (e.value !== "") {
      dispatch(filterTeam(e.value));
      e.value = "";
    }
  };
  const renderCustomItem = (item) => {
    return (
      <div className="w-full h-full flex gap-3">
        <img src={item.image} alt="" className="h-5 w-7 rounded-full" />{" "}
        <h1 className="text-black font-semibold">{item.label}</h1>
      </div>
    );
  };
  const DropdownIndicator = () => {
    return <RiArrowDownSFill size="2rem" />;
  };

  return (
    <div className="w-full h-4/5 bg-[#EFEFEF] rounded p-2">
      <Select
        value=""
        options={teamsList.map((team) => {
          console.log(team);
          return { value: team.id, label: team.name, image: team.badge };
        })}
        formatOptionLabel={renderCustomItem}
        className=""
        onChange={handleChange}
        menuIsOpen={true}
        components={{ DropdownIndicator }}
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
        }}
      />
    </div>
  );
}

export default AlbumIndex;
