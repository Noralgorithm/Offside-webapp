import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../common/form.module.css";

const RegistrationForm = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues);
    //TODO: Confirmaciones de los inputs
    if (isError) {
      alert("revisa ese beta");
    } else {
      alert("registrao :p");
    }
  };

  //To Do: Hacer que muestre un mensaje debajo de confirmar contraseña que diga
  //que las dos contraseñas deben ser iguales
  const confirmPassword = (e) => {
    if (e.target.value !== inputValues.password && e.target.value !== "") {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <div className={styles.formContainer}>
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
        {isError && <span>Las dos contraseñas deben ser iguales</span>}

        <br />
        <button type="submit">Registrate</button>
      </form>
      <div>
        <p>
          ¿Ya tienes tienes cuenta?
          <Link to="/signin" className="linked">
            Inicia Sesion
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
