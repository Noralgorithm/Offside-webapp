import React from "react";
import Album from "./Album";
import DailyPack from "./DailyPack";
import Fantasy from "./Fantasy";
import SelectEvent from "./SelectEvent";

function HomePage() {
  return (
    <main className="w-full h-full flex md:flex-row flex-col items-center justify-around mb-[3%] md:gap-0 gap-5">
      <section className="md:w-5/12 w-11/12 h-full flex flex-col justify-between">
        <SelectEvent />
        <Fantasy />
      </section>
      <section className="md:w-5/12 w-11/12 h-full flex flex-col justify-between">
        <DailyPack />
        <Album />
      </section>
    </main>
  );
}

export default HomePage;
