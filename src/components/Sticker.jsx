import React from "react";

function Sticker() {
  return (
    <div className="h-full w-full flex justify-center items-center bg-fondo-barajita bg-contain">
      <div className="bg-marco-barajita bg-contain w-full h-full">
        <div className="w-full h-1/2 gap-y-[5%] grid grid-cols-1 content-center">
          <h1 className="ml-[13%] text-xs font-bold w-full">1.47</h1>
          <h1 className="ml-[14%] text-xs font-bold w-full">70</h1>
        </div>
        <h1 className="flex h-1/2 items-end pb-[4%] justify-center w-full text-2xl font-semibold text-sticker-name">
          Leo Messi
        </h1>
      </div>
    </div>
  );
}

export default Sticker;
