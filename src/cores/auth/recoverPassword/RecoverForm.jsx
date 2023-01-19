import React from "react";
import { FiMail } from "react-icons/fi";

function RecoverForm({ setEmailAdress, setRecoverCode }) {
  return (
    <form
      onSubmit={(e) => {
        setEmailAdress(false);
        setRecoverCode(true);
      }}
      className="h-[65%] w-10/12 flex flex-col justify-around items-center"
    >
      <label className="w-full border-b-2 border-black border-opacity-20 flex items-center">
        <FiMail size="1.5rem" color="#808080" />
        <input
          type="email"
          required
          placeholder="Correo electrónico"
          name="email"
          className="w-full p-2 rounded border-none font-semibold focus:outline-none"
        />
      </label>

      <button
        type="submit"
        className="md:w-4/5 w-full bg-gradient-offside border-none p-3 text-white text-lg hover:cursor-pointer font-semibold rounded-full"
      >
        Enviar
      </button>
    </form>
  );
}

export default RecoverForm;
