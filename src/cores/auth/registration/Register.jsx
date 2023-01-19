import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LogoOffside from "../../../Images/logo-offside-vertical.png";

const Register = () => {
  return (
    <div className="w-screen md:h-screen h-[896px] flex flex-col md:flex-row-reverse items-center">
      <div className="h-[30%] lg:w-5/12 md:w-6/12 w-9/12 flex items-center justify-center">
        <img src={LogoOffside} alt="" className="lg:w-3/4 max-[768px]:h-full" />
      </div>
      <div className="lg:w-7/12 md:h-full h-[70%] bg-white p-7 text-black flex justify-center items-center w-full md:w-6/12">
        <div className="w-full md:h-4/5 h-[90%] flex flex-col items-center">
          <h1 className="text-2xl w-3/4 h-[10%] text-[#2A555E] font-bold">
            Crea una cuenta
          </h1>
          <RegisterForm />
          <div className="md:h-[10%] h-[15%] flex md:flex-row flex-col items-center justify-center md:gap-2 font-semibold text-lg">
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
    </div>
  );
};

export default Register;
