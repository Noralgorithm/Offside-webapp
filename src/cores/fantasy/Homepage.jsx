import React from "react";
import cancha from "../../Images/cancha-horizontal.png";
import { Link } from "react-router-dom";
import Ranking from "./ranking/Ranking";

function Homepage() {
  return (
    <div className="w-full h-[92%] flex justify-center items-center">
      <div className="w-11/12 h-[90%]">
        <h1 className="text-4xl text-gray-100 font-bold">Fantasy</h1>
        <div className="w-full h-5/6 mt-8 bg-bg-contenedor flex items-center justify-around rounded">
          <div className="w-5/12 h-[90%] flex flex-col items-center">
            <h2 className="text-3xl text-sticker-name font-bold">Mi Fantasy</h2>
            <div className="w-full h-5/6 bg-fondo-homepage-fantasy bg-no-repeat bg-contain flex flex-col items-center justify-center">
              <h3 className="text-sticker-name font-semibold bg-gray-100 p-2 rounded-full w-[35%] text-center">
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
          <div className="w-5/12 h-[90%] flex flex-col items-center">
            <h2 className="text-3xl text-sticker-name font-bold">
              Ranking global
            </h2>
            <div className="w-full h-5/6 flex flex-col items-center justify-center">
              <Ranking />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
