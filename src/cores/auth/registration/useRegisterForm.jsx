import { useState } from "react";
import useForm from "../../../components/useForm";
import * as authServices from "../../../services/auth.services";
import { useNavigate } from "react-router-dom";

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
      if (!isSamePassword) return alert("contraseñas no coinciden paps");
      await authServices.register(inputValues);
    } catch (e) {
      alert(e);
    }

    navigate("/");
  };

  return { handleChange, handleSubmit, isSamePassword, confirmSamePassword };
};

export default useRegisterForm;
