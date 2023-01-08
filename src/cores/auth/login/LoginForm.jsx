import React from "react";
import useLoginForm from "./useLoginForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

function LoginForm() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.user);
  const { handleChange, handleSubmit } = useLoginForm();
  const [visiblePassword, setVisiblePassword] = useState(false);

  useEffect(() => {
    if (state.success) navigate("/dashboard");
  }, [state.success, navigate]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="h-[65%] w-10/12 flex flex-col justify-around items-center"
    >
      <label className="w-full border-b-2 border-black border-opacity-20 flex items-center">
        <FiMail size="1.5rem" color="#808080" />
        <input
          type="email"
          required
          placeholder="Correo electrónico"
          name="email"
          onChange={handleChange}
          className="w-full p-2 rounded border-none font-semibold focus:outline-none"
        />
      </label>

      <label className="w-full border-b-2 border-black border-opacity-20 flex items-center justify-between">
        <div className="w-full flex items-center">
          <BiLockAlt size="1.5rem" color="#808080" />
          <input
            type={visiblePassword ? "text" : "password"}
            required
            placeholder="Contraseña"
            name="password"
            onChange={handleChange}
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
        Iniciar Sesión
      </button>
    </form>
  );
}

export default LoginForm;
