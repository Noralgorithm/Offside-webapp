import React from "react";
import ConfirmPasword from "./ConfirmPasword";
import { useState } from "react";

function RegisterForm() {
  const [isSamePassword, setIsSamePassword] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSamePassword) {
      alert("revisa ese beta");
    } else {
      alert("registrao :p");
    }
  };

  const confirmSamePassword = (e) => {
    if (e.target.value !== inputValues.password && e.target.value !== "") {
      setIsSamePassword(true);
    } else {
      setIsSamePassword(false);
    }
  };
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
