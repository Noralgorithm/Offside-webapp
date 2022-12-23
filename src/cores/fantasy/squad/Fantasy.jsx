import React from "react";
import Navbar from "../../../components/Navbar";
import Bench from "../bench/Bench";
import Squad from "./Squad";

export function Fantasy() {
  return (
    <div className="w-screen h-[800px] flex flex-col">
      <Navbar />
      <div className="w-full h-full mt-10">
        <h1 className="text-white text-3xl w-1/4 text-center font-bold">Fantasy</h1>
        <div className="w-full flex h-full mt-10 justify-around">
          <Squad />
          <Bench />
        </div>
      </div>
    </div>
  );
}
