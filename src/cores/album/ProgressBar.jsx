import React from "react";

function ProgressBar({ percentage }) {
  return (
    <div className="w-full flex justify-center h-full gap-8">
      <p className="font-bold md:text-xl text-2xl">{Math.trunc(percentage)}%</p>
      <div className="md:w-2/6 w-4/6 bg-[#f2f6fe] rounded-full h-full">
        <div
          className="bg-offsideColorWineDark h-full rounded-full flex items-center text-lg text-white font-semibold"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
