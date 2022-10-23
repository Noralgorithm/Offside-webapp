import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  var confirmarPass='invisible';

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
    console.log(inputValues);
    alert("registrao :p");
  };

  //To Do: Hacer que muestre un mensaje debajo de confirmar contraseña que diga
  //que las dos contraseñas deben ser iguales 
  const confirmPassword = (e) => {
    const { value } = e.target;
    if (value !== inputValues.password) {
      confirmarPass = "visible";
    } else {
      confirmarPass = "invisible";
    }
  };

  return (
    <div className="form-container">
      <h1>Registrate</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            required
            placeholder="Ingrese su nombre"
            id="formName"
            name="name"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="email"
            required
            placeholder="Ingrese su email"
            id="formEmail"
            name="email"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="password"
            required
            placeholder="Contraseña"
            id="formPassword"
            name="password"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            type="password"
            required
            placeholder="Confirmar contraseña"
            id="formPassword"
            name="confirmPassword"
            onChange={confirmPassword}
          />
        </label>
        <p className={confirmarPass}>Las dos contraseñas deben ser iguales</p>

        <br />
        <button type="submit">Registrate</button>
      </form>
      <div>
        <p>
          ¿Ya tienes tienes cuenta?{" "}
          <Link to="/signin" className="linked">
            Inicia Sesion
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
