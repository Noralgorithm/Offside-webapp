import React from "react";
import Select from "react-select";
import { RiArrowDownSFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setEvent } from "../../features/user/userSlice";

function SelectEvent() {
  const DropdownIndicator = () => {
    return <RiArrowDownSFill size="2rem" color="#3D405B" />;
  };

  const dispatch = useDispatch();
  const {event,eventsList} = useSelector((state) => state.user);

  const eventsOptions = eventsList?.map((event) => {
    return { label: event.eventName, value: event.id };
  });

  const handleChange = (e) => {
    dispatch(setEvent(e.value));
  };

  return (
    <Select
      className="md:w-1/2 w-full"
      unstyled
      placeholder="Evento..."
      onChange={handleChange}
      options={eventsOptions}
      value={event}
      components={{ DropdownIndicator }}
      styles={{
        control: (baseStyles, props) => ({
          ...baseStyles,
          backgroundColor: "transparent",
          border: "2px solid #3D405B",
          borderRadius: "0.5rem",
          paddingLeft: "8px",
          fontWeight: 500,
          color: "#3D405B",
        }),
        placeholder: (baseStyles, props) => ({
          ...baseStyles,
          color: "#3D405B",
          fontWeight: 500,
        }),
        option: (baseStyles, props) => ({
          ...baseStyles,
          backgroundColor: "#ffffff",
          fontWeight: 500,
          color: "#3D405B",
          padding: "8px",
          borderRadius: "0.5rem"
        }),
      }}
    ></Select>
  );
}

export default SelectEvent;
