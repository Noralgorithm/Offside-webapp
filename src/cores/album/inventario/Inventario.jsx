import React from "react";
import Navbar from "../../../components/Navbar";
import Page from "./Page";

function Inventario() {
  return (
    <div className="w-screen h-screen flex flex-col">
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

export default Inventario;
