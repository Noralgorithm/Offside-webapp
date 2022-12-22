import React from "react";
import PlayerCard from "../PlayerCard";

function Banking() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section className="bg-[#68878D] h-full w-full grid grid-cols-1 justify-items-center overflow-y-scroll py-4 gap-2 banca">
      {a.map(() => {
        return (
          <div className="w-[90%] h-28">
            <PlayerCard />
          </div>
        );
      })}
    </section>
  );
}

export default Banking;
