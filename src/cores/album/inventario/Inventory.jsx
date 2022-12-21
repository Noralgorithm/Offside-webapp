import React from "react";
import Navbar from "../../../components/Navbar";
import Page from "./Page";

function Inventory() {
  return (
    <div className="w-screen md:h-[1000px] h-[1750px] flex flex-col overflow-x-hidden">
      <Navbar />
      <div className="h-full w-full flex flex-col items-center justify-around">
        <h1 className="w-full text-center text-white font-bold text-4xl">
          Inventario
        </h1>
        <Page />
      </div>
    </div>
  );
}

export default Inventory;
