import { Link } from "react-router-dom";
import styles from "../common/form.module.css"

function LoginForm() {
  return (
    <div className={styles.formContainer}>
      <h1>Inicia Sesión</h1>

      <form className="">
        <label>
          <input
            type="email"
            required
            placeholder="Ingrese su email"
            id="formEmailLogin"
            name="email"
          />
        </label>

        <label>
          <input
            type="password"
            required
            placeholder="Contraseña"
            id="formPasswordLogin"
            name="password"
          />
        </label>
        <button type="submit" id="loginBtn">
          Iniciar Sesión
        </button>
      </form>
      <p>
        ¿No tienes cuenta? <Link to="/signup" className="linked">Registrate</Link>
      </p>
    </div>
  );
}

export default LoginForm;
