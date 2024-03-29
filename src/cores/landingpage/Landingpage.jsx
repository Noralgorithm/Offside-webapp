import React from "react";
import AboutOffside from "./AboutOffside";
import Welcome from "./Welcome";

const Landingpage = () => {
  return (
    <main className="w-screen md:h-[850px] h-[900px] flex flex-col items-center">
      <Welcome />
      <AboutOffside />
    </main>
  );
};

export default Landingpage;
