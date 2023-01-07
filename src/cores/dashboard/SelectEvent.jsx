import React from "react";
import Select from "react-select";
import { RiArrowDownSFill } from "react-icons/ri";

function SelectEvent() {
  const DropdownIndicator = () => {
    return <RiArrowDownSFill size="2rem" color="#3D405B"/>;
  };
  return (
    <Select
      className="md:w-1/2 w-full"
      unstyled
      placeholder="Evento..."
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
