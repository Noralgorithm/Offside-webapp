import React from "react";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

function ChangePassword({ password, setPassword, resetPassword }) {
  const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <form
      onSubmit={resetPassword}
      className="h-[65%] w-10/12 flex flex-col justify-around items-center"
    >
      <label className="w-full border-b-2 border-black border-opacity-20 flex items-center justify-between">
        <div className="w-full flex items-center">
          <BiLockAlt size="1.5rem" color="#808080" />
          <input
            type={visiblePassword ? "text" : "password"}
            required
            placeholder="Nueva contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="email"
            className="w-full p-2 rounded border-none font-semibold focus:outline-none"
          />
        </div>
        {visiblePassword ? (
          <AiOutlineEye
            size="1.5rem"
            color="#808080"
            className="hover:cursor-pointer"
            onClick={() => {
              setVisiblePassword(false);
            }}
          />
        ) : (
          <AiOutlineEyeInvisible
            size="1.5rem"
            color="#808080"
            className="hover:cursor-pointer"
            onClick={() => {
              setVisiblePassword(true);
            }}
          />
        )}
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

export default ChangePassword;
