import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useLoginForm from "./useLoginForm";
import { useNavigate } from "react-router-dom";

function LoginForm() {

  const navigate = useNavigate();
  const state = useSelector(state => state.user);
  const { handleChange, handleSubmit, isError } = useLoginForm();

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="">
      <label>
        <input
          type="email"
          required
          placeholder="Ingrese su email"
          name="email"
          onChange={handleChange}
          className="w-full p-2 rounded mb-5 border-none"
        />
      </label>

      <label>
        <input
          type="password"
          required
          placeholder="Contraseña"
          name="password"
          onChange={handleChange}
          className="w-full p-2 rounded mb-5 border-none"
        />
      </label>
      <button
        type="submit"
        className="w-full bg-green-700 border-none p-3 text-white text-base
      hover:bg-green-900 hover:cursor-pointer"
      >
        Iniciar Sesión
      </button>
    </form>
  );
}

export default LoginForm;
