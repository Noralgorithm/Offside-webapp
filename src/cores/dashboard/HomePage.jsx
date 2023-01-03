import React from "react";
import Fantasy from "./Fantasy";
import SelectEvent from "./SelectEvent";

function HomePage() {
  return (
    <main className="w-full h-full flex items-center justify-around mb-[3%]">
      <section className="w-5/12 h-full flex flex-col justify-around">
        <SelectEvent />
        <Fantasy />
      </section>
      <section className="w-5/12 h-full"></section>
    </main>
  );
}

export default HomePage;
