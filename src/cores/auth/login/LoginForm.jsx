import React from "react";
import useLoginForm from "./useLoginForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function LoginForm() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.user);
  const { handleChange, handleSubmit } = useLoginForm();

  useEffect(() => {
    if (state.success) navigate("/dashboard");
  }, [state.success, navigate]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="h-[65%] w-7/12 flex flex-col justify-around"
    >
      <label className="border-b-2 border-black border-opacity-20">
        <input
          type="email"
          required
          placeholder="Ingrese su email"
          name="email"
          onChange={handleChange}
          className="w-full p-2 rounded border-none font-semibold focus:outline-none"
        />
      </label>

      <label className="border-b-2 border-black border-opacity-20">
        <input
          type="password"
          required
          placeholder="Contraseña"
          name="password"
          onChange={handleChange}
          className="w-full p-2 rounded border-none font-semibold focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="w-full bg-offsideColorWine border-none p-3 text-white text-lg
        hover:bg-red-800 hover:cursor-pointer font-semibold rounded-lg"
      >
        Iniciar Sesión
      </button>
    </form>
  );
}

export default LoginForm;
