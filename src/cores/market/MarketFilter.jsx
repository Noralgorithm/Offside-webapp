import React from "react";

function MarketFilter({ children, options, value, setFilter }) {
  return (
    <div className="px-[1px] py-[1px] bg-gradient-offside rounded">
      <select
        name=""
        id=""
        onChange={(e) => setFilter(e.target.value)}
        value={value}
        className="appearance-none bg-[#EAEAEA] text-black font-normal rounded md:text-start text-center px-1 outline-none banca"
      >
        <option value="" className="bg-[#EAEAEA] opacity-50">
          {children} ▼
        </option>
        {options?.map((option) => (
          <option value={option.value} key={option?.value} className="bg-[#EAEAEA] opacity-50">
            {option?.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MarketFilter;