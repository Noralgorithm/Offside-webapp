import React from "react";

function ProgressBar() {
  return (
    <div className="w-full flex justify-center h-full">
      <div className="w-2/6 bg-gray-200 rounded-full h-full">
        <div
          className="bg-offsideColorWine h-full rounded-full flex items-center text-lg text-white font-semibold"
          style={{
            width: "45%",
          }}
        ><p className="m-3">45%</p></div>
      </div>
    </div>
  );
}

export default ProgressBar;
