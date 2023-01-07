import React from "react";
import ConfirmPasword from "./ConfirmPasword";
import useRegisterForm from "./useRegisterForm";

function RegisterForm() {
  const { handleChange, handleSubmit, isSamePassword, confirmSamePassword } =
    useRegisterForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[70%] w-7/12 flex flex-col gap-2"
    >
      <label className="border-b-2 border-black border-opacity-20">
        <input
          type="text"
          required
          placeholder="Nombre de usuario"
          name="name"
          onChange={handleChange}
          className="w-full p-2 rounded border-none font-semibold focus:outline-none"
        />
      </label>
      <label className="border-b-2 border-black border-opacity-20">
        <input
          type="email"
          required
          placeholder="Correo electrónico"
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

      <label className="border-b-2 border-black border-opacity-20">
        <input
          type="password"
          required
          placeholder="Confirmar contraseña"
          name="confirmPassword"
          onChange={confirmSamePassword}
          className="w-full p-2 rounded border-none font-semibold focus:outline-none"
        />
      </label>
      <ConfirmPasword samePassword={isSamePassword} />
      <button
        type="submit"
        className="w-full bg-offsideColorWine border-none p-3 text-white text-lg
          hover:bg-red-800 hover:cursor-pointer font-semibold rounded-lg"
      >
        Crear cuenta
      </button>
    </form>
  );
}

export default RegisterForm;
