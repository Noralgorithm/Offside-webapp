import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="w-96 bg-slate-200 p-7 m-auto mt-24 rounded text-black">
      <h1 className="mb-5 text-2xl">Inicia Sesión</h1>
      <LoginForm />
      <p className="leading-10 h-10 text-center text-lg">
        ¿No tienes cuenta?&nbsp;
        <Link
          to="/signup"
          className="hover:underline text-blue-900 font-semibold"
        >
          Registrate
        </Link>
      </p>
    </div>
  );
}

export default Login;
