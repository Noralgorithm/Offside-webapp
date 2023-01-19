import React from "react";
import { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import LogoOffside from "../../../Images/logo-offside-vertical.png";
import ChangePassword from "./ChangePassword";
import CodeForm from "./CodeForm";
import RecoverForm from "./RecoverForm";

function RecoverPassword() {
  const [emailAdress, setEmailAdress] = useState(true);
  const [recoverCode, setRecoverCode] = useState(false);
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row-reverse items-center justify-evenly">
      <div className="h-1/6 lg:w-5/12 md:w-6/12 w-9/12 flex items-center justify-center">
        <img src={LogoOffside} alt="" className="lg:w-3/4" />
      </div>
      <div className="lg:w-7/12 md:w-6/12 md:h-full h-3/5 bg-white p-7 text-black flex justify-center items-center w-11/12">
        <div className="w-full md:h-3/4 h-5/6 flex flex-col items-center">
          <h1 className="text-2xl md:w-3/4 w-5/6 h-[15%] text-[#2A555E] font-bold">
            Recuperar contraseña
          </h1>
          <h1 className="md:w-3/4 w-full h-[15%] font-bold">
            {emailAdress
              ? "Ingrese su correo para enviar un código para recuperar su contraseña"
              : recoverCode
              ? "Se le envió un código de 5 dígitos al correo para poder recuperar su contraseña"
              : "Ingrese la nueva contraseña que desea utilizar"}
          </h1>
          {emailAdress ? (
            <RecoverForm
              setEmailAdress={setEmailAdress}
              setRecoverCode={setRecoverCode}
            />
          ) : recoverCode ? (
            <CodeForm setRecoverCode={setRecoverCode} />
          ) : (
            <ChangePassword />
          )}
        </div>
      </div>
    </div>
  );
}

export default RecoverPassword;
