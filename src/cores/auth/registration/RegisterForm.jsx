import React from "react";
import ConfirmPasword from "./ConfirmPasword";
import useRegisterForm from "./useRegisterForm";

function RegisterForm() {
  
  const { handleChange, handleSubmit, isSamePassword, confirmSamePassword } = useRegisterForm();
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          required
          placeholder="Ingrese su nombre"
          name="name"
          onChange={handleChange}
          className="w-full p-2 rounded mb-5 border-none"
        />
      </label>
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

      <label>
        <input
          type="password"
          required
          placeholder="Confirmar contraseña"
          name="confirmPassword"
          onChange={confirmSamePassword}
          className="w-full p-2 rounded border-none"
        />
      </label>
      <ConfirmPasword samePassword={isSamePassword} />
      <br />
      <button
        type="submit"
        className="w-full bg-green-700 border-none p-3 text-white text-base
          hover:bg-green-900 hover:cursor-pointer mt-5"
      >
        Registrate
      </button>
    </form>
  );
}

export default RegisterForm;
