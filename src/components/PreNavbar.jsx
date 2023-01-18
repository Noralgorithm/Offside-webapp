import React from "react";
import { Link } from "react-router-dom";
import logoOffside from "../Images/logo-offside.png";

function PreNavbar() {
  return (
    <div className="w-screen md:block hidden sticky top-0 z-10">
      <nav className="w-full bg-white h-12 flex justify-between overflow-hidden border-b-[1px] border-[#CECECE]">
        <Link className="h-full flex items-center" to="/">
          <img src={logoOffside} alt="" className="md:h-36 h-28" />
        </Link>
        <div className="h-full flex lg:w-4/12 md:w-6/12 w-7/12 items-center justify-center gap-2">
          <span className="bg-gradient-offside p-[1px] rounded-full h-[80%] flex items-center">
            <Link className="bg-white rounded-full h-full px-8 flex items-center" to="/login">
              <h1 className="text-offside-gradient font-semibold ">Inicia sesión</h1>
            </Link>
          </span>
          <Link className="bg-gradient-offside rounded-full text-white font-semibold h-[80%] px-10 flex items-center" to="/signup">
            Regístrate
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default PreNavbar;
