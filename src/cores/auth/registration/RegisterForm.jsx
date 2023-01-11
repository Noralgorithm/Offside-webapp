import React from "react";
import ConfirmPasword from "./ConfirmPasword";
import useRegisterForm from "./useRegisterForm";
import { FiMail } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";

function RegisterForm() {
  const { handleChange, handleSubmit, isSamePassword, confirmSamePassword } =
    useRegisterForm();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  return (
    <form
      onSubmit={handleSubmit}
      className="md:h-[70%] h-[80%] w-10/12 flex flex-col justify-around items-center relative"
    >
      <label className="w-full border-b-2 border-black border-opacity-20 flex items-center">
        <HiOutlineUser size="1.5rem" color="#808080" />
        <input
          type="text"
          required
          placeholder="Nombre de usuario"
          name="name"
          onChange={handleChange}
          className="w-full p-2 rounded border-none font-semibold focus:outline-none"
        />
      </label>
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

      <label className="w-full border-b-2 border-black border-opacity-20 flex items-center justify-between">
        <div className="w-full flex items-center">
          <BiLockAlt size="1.5rem" color="#808080" />
          <input
            type={visibleConfirmPassword ? "text" : "password"}
            required
            placeholder="Confirmar contraseña"
            name="confirmPassword"
            onChange={confirmSamePassword}
            className="w-full p-2 rounded border-none font-semibold focus:outline-none"
          />
        </div>
        {visibleConfirmPassword ? (
          <AiOutlineEye
            size="1.5rem"
            color="#808080"
            className="hover:cursor-pointer"
            onClick={() => {
              setVisibleConfirmPassword(false);
            }}
          />
        ) : (
          <AiOutlineEyeInvisible
            size="1.5rem"
            color="#808080"
            className="hover:cursor-pointer"
            onClick={() => {
              setVisibleConfirmPassword(true);
            }}
          />
        )}
      </label>
      <ConfirmPasword samePassword={isSamePassword} />
      <button
        type="submit"
        className="md:w-4/5 w-full bg-gradient-offside border-none p-3 text-white text-lg hover:cursor-pointer font-semibold rounded-full md:mt-11 mt-4"
      >
        Registrarte
      </button>
    </form>
  );
}

export default RegisterForm;
