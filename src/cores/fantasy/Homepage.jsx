import React from "react";
import cancha from "../../Images/cancha-horizontal.png";
import { Link } from "react-router-dom";
import Ranking from "./ranking/Ranking";
import Navbar from "../../components/Navbar";

export function Homepage() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="w-full h-[92%] flex justify-center items-center">
        <div className="w-11/12 h-[90%] bg-bg-contenedor flex items-center justify-around rounded border-sticker-name border-2">
          <div className="w-5/12 h-[90%] flex flex-col items-center">
            <h2 className="text-3xl text-sticker-name font-bold">Fantasy</h2>
            <div className="w-full h-5/6 bg-fondo-homepage-fantasy bg-no-repeat bg-contain flex flex-col items-center justify-center">
              <h3 className="text-sticker-name font-semibold bg-gray-100 p-2 rounded-full w-[35%] text-center border-sticker-name border-2">
                Mi puntaje: 45pts
              </h3>
              <Link className="w-[45%] h-[20%] flex bg-gray-100 items-center justify-around rounded border-2 border-sticker-name mt-4">
                <img src={cancha} alt="" className="h-full" />
                <h3 className="text-center text-sticker-name font-semibold">
                  Ver alineación de <br /> tu equipo
                </h3>
              </Link>
            </div>
          </div>
          <Ranking />
        </div>
      </div>
    </div>
  );
}
