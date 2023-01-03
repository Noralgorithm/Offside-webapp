import { Link, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import LogoOffside from "../../../Images/logo-offside.png";

function Login() {
  const state = useSelector((state) => state.user);

  if (state.success) return <Navigate to="/dashboard" />;

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-evenly">
      <div className="h-1/6 lg:w-4/12 md:w-6/12 w-9/12 flex items-center justify-center">
        <img src={LogoOffside} alt="" className="" />
      </div>
      <div className="lg:w-5/12 md:w-7/12 h-3/5 bg-white p-7 rounded-xl text-black flex flex-col justify-around items-center w-11/12">
        <h1 className="text-3xl w-full text-center h-[15%] text-sticker-name font-bold">
          Inicia Sesión
        </h1>
        <LoginForm />
        <div className="h-[10%] flex items-center justify-center gap-2 font-semibold text-lg">
          <p className="">¿No tienes cuenta aún?</p>
          <Link
            to="/signup"
            className="hover:underline text-blue-900 font-semibold"
          >
            Registrate
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
