import React from "react";
import Select from "react-select";
import { RiArrowDownSFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentEvent } from "../../features/user/userSlice";

function SelectEvent() {
  const DropdownIndicator = () => {
    return <RiArrowDownSFill size="2rem" color="#3D405B" />;
  };

  const dispatch = useDispatch();
  const eventsList = useSelector((state) => state.user.eventsList);

  const eventsOptions = eventsList.map((event) => {
    return { label: event.eventName, value: event.id };
  });

  const handleChange = (e) => {
    dispatch(setCurrentEvent(e.value));
  }

  return (
    <Select
      className=""
      unstyled
      placeholder="Evento..."
      onChange={handleChange}
      options={eventsOptions}
      components={{ DropdownIndicator }}
      styles={{
        control: (baseStyles, props) => ({
          ...baseStyles,
          backgroundColor: "transparent",
          border: "2px solid #3D405B",
          borderRadius: "0.5rem",
          paddingLeft: "8px",
        }),
        placeholder: (baseStyles, props) => ({
          ...baseStyles,
          color: "#3D405B",
          fontWeight: 500,
        }),
      }}
    ></Select>
  );
}

export default SelectEvent;
