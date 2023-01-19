import { useState } from "react";
import * as authServices from "../../../services/auth.services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useRecoverPassword = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [emailAdress, setEmailAdress] = useState(true);
  const [recoverCode, setRecoverCode] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const sendCode = async () => {
    try {
      setIsLoading(true);
      const data = await authServices.sendCode(email);
      console.log(data);
      setEmailAdress(false);
      setRecoverCode(true);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const verifyCode = async () => {
    try {
      setIsLoading(true);
      const data = await authServices.verifyCode(code);
      console.log(data);
      setRecoverCode(false);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async () => {
    try {
      setIsLoading(true);
      const data = await authServices.createNewPassword(password, code);
      console.log(data);
      toast.success(data.message);
      navigate("/login");
    } catch (e) {
      toast.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    emailAdress,
    setEmailAdress,
    recoverCode,
    setRecoverCode,
    email,
    setEmail,
    code,
    setCode,
    sendCode,
    verifyCode,
    password,
    setPassword,
    resetPassword,
  };
};

export default useRecoverPassword;
