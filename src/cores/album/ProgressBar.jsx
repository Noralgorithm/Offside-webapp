import React from "react";

function ProgressBar({ percentage }) {
  return (
    <div className="w-full flex justify-center h-full">
      <p className="mr-8 font-bold text-xl">{percentage}%</p>
      <div className="w-2/6 bg-stone-400 rounded-full h-full">
        <div
          className="bg-offsideColorWine h-full rounded-full flex items-center text-lg text-white font-semibold"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
