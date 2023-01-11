import React from "react";
import MainImageLanding from "../../Images/MainImageLanding.png";
import logoOffside from "../../Images/logo-offside.png";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="w-full h-[55%] bg-white flex justify-around items-center">
      <div className="md:w-1/2 w-full h-full flex flex-col items-center md:gap-5 gap-6">
        <header className="w-full md:h-2/6 h-1/4 flex items-center justify-center overflow-hidden">
          <img src={logoOffside} alt="" className="md:w-96 w-72" />
        </header>
        <h1 className="lg:text-5xl md:text-4xl text-[32px] w-full h-1/6 flex items-center justify-center font-semibold text-offside-titles">
          ¡Bienvenido a Offside!
        </h1>
        <p className="w-3/5 h-1/6 text-center font-semibold">
          Organiza, colecciona y compite en una liga llena de amigos con tu
          equipo de ensueño favorito
        </p>
        <div className="w-full flex justify-evenly md:justify-center">
          <Link
            className="md:hidden flex items-center bg-gradient-offside rounded-full text-center w-2/5 p-[1px]"
            to="login"
          >
            <span className="w-full py-2 rounded-full bg-white">
              <h1 className="text-offside-gradient font-semibold">
                Inicia sesión
              </h1>
            </span>
          </Link>
          <Link
            className="bg-gradient-offside text-white rounded-full py-2 w-2/5 text-center font-semibold"
            to="/signup"
          >
            Regístrate
          </Link>
        </div>
      </div>
      <img src={MainImageLanding} alt="" className="w-1/2 hidden md:block" />
    </div>
  );
}

export default Welcome;
