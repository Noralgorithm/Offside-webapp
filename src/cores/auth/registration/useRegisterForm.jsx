import { useState } from "react";
import useForm from "../../../components/useForm";
import * as authServices from "../../../services/auth.services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useRegisterForm = () => {
  const navigate = useNavigate();
  const [isSamePassword, setIsSamePassword] = useState(true);
  const { inputValues, handleChange } = useForm();

  const confirmSamePassword = (e) => {
    if (e.target.value !== inputValues.password && e.target.value !== "") {
      setIsSamePassword(false);
    } else {
      setIsSamePassword(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isSamePassword) return toast.error("Las contraseñas no coinciden.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      await authServices.register(inputValues);
    } catch (e) {
      toast.error(e.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    navigate("/");
  };

  return { handleChange, handleSubmit, isSamePassword, confirmSamePassword };
};

export default useRegisterForm;
