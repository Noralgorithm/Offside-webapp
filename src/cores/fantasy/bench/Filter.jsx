import React from "react";

function Filter({ children, handleFilter, options }) {
  return (
    <div className="md:px-2 py-1 bg-black bg-opacity-30 rounded">
      <select
        onChange={(e) => handleFilter(e)}
        name=""
        id=""
        className="appearance-none bg-transparent text-white font-normal opacity-50 rounded md:text-start text-center"
      >
        <option value="" className="bg-[#325D69] opacity-50">
          {children} 🔻
        </option>
        {options?.map((option) => (
          <option value={option.id} key={option?.id} className="bg-[#325D69] opacity-50">
            {option?.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
