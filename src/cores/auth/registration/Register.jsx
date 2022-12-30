import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LogoOffside from "../../../Images/logo-offside.png";

const Register = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-around">
      <div className="h-1/6 w-full flex items-center overflow-y-hidden justify-center">
        <img src={LogoOffside} alt="" className="md:w-[25%] w-[75%]" />
      </div>
      <div className="md:w-5/12 h-3/4 bg-white p-7 rounded-xl text-black flex flex-col justify-around items-center w-11/12">
        <h1 className="text-3xl w-full text-center h-[20%] text-sticker-name font-bold">
          Regístrate
        </h1>
        <RegisterForm />
        <div className="h-[10%] flex items-center justify-center gap-2 font-semibold text-lg">
          <p className="">¿Ya tienes tienes cuenta?</p>
          <Link
            to="/login"
            className="hover:underline text-blue-900 font-semibold"
          >
            Inicia Sesion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
