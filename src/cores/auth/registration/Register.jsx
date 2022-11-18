import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const Register = () => {

  return (
    <div className="w-96 bg-slate-200 p-7 m-auto mt-24 rounded text-black">
      <h1 className="mb-5 text-2xl">Registrate</h1>
      <RegisterForm />
      <div>
        <p className="leading-10 h-10 text-center text-lg">
          ¿Ya tienes tienes cuenta?&nbsp;
          <Link
            to="/login"
            className="hover:underline text-blue-900 font-semibold"
          >
            Inicia Sesion
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
