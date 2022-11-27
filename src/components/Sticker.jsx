import React from "react";
import { useState } from "react";
import bandera from "../Images/Bandera-circular-de-Espana.png";
import central from "../Images/central.png";

function Sticker() {
  const [jugador, setJugador] = useState(
    "src/Images/Captura_de_Pantalla_2022_11_13_a_la_s_8_05_41_a_m_removebg_preview.png"
  );
  const a = false;
  return (
    <div className="h-full w-full flex justify-center items-center bg-fondo-barajita bg-cover bg-center bg-no-repeat">
      <div
        className={`${
          a
            ? "bg-[url(" + jugador + ")]"
            : "bg-jugador"
        } bg-[length:90%] w-full h-full bg-no-repeat bg-bottom`}
      >
        <div className="bg-marco-barajita bg-cover w-full h-full bg-no-repeat bg-center">
          <div className="w-full h-1/2 flex justify-center">
            <div className="w-full h-full gap-y-[4%] grid grid-cols-1 content-center">
              <h1 className="ml-[19%] text-xs font-bold w-full">1.65</h1>
              <h1 className="ml-[21%] text-xs font-bold w-full">60</h1>
            </div>
            <div className="grid grid-cols-1 w-1/2 h-full justify-items-center gap-0">
              <img
                src={bandera}
                alt=""
                className="justify-self-end w-auto h-2/5 mt-[28%]"
              />
              <img src={central} alt="" className="h-1/2 w-auto ml-[18%]" />
            </div>
          </div>
          <h1 className="flex h-1/2 items-end pb-[3%] justify-center w-full text-2xl font-semibold text-sticker-name">
            Pedri
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Sticker;
