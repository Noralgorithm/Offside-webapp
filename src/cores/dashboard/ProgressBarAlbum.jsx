import React from "react";
import { useSelector } from "react-redux";

function ProgressBarAlbum() {
  const token = useSelector((state) => state.user.token);
  const percentage = useSelector((state) => state.album.percentage);
  const eventId = useSelector((state) => state.album.eventId);
  console.log(token);
  console.log(eventId);

  return (
    <div className="w-[45%] h-8 absolute top-1/4 left-[52%]">
      <div className="w-full bg-[#f2f6fe] rounded-3xl h-full overflow-hidden">
        <div
          className="bg-offside-titles h-full rounded-3xl flex items-center text-lg text-white font-semibold"
          style={{
            width: `${percentage}%`,
          }}
        ></div>{" "}
      </div>
      <div className="flex font-semibold text-offside-titles gap-2 w-ful justify-center">
        <p>
          {Math.trunc(percentage)}%
        </p>
        <h1>Completado</h1>
      </div>
    </div>
  );
}

export default ProgressBarAlbum;
