import React from "react";

function MarketFilter({ children, options }) {
  return (
    <div className="px-[1px] py-[1px] bg-gradient-offside rounded">
      <select
        name=""
        id=""
        className="appearance-none bg-[#EAEAEA] text-black font-normal rounded md:text-start text-center px-1"
      >
        <option value="" className="bg-[#325D69] opacity-50">
          {children} ▼
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

export default MarketFilter;