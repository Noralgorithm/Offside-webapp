import React from "react";

function Filter({ children, handleFilter, options }) {
  return (
    <div className="px-[1px] py-[1px] bg-gradient-offside rounded font-semibold">
      <select
        onChange={(e) => handleFilter(e)}
        name=""
        id=""
        className="appearance-none bg-offside-white text-black rounded md:text-start text-center px-1 flex outline-none"
      >
        <option value="" className="bg-offside-white opacity-50 text-center">
          {children} ▼
        </option>
        {options?.map((option) => (
          <option
            value={option.id}
            key={option?.id}
            className="bg-offside-white opacity-50"
          >
            {option?.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
