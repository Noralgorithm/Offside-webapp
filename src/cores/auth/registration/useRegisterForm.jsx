import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../../../components/useForm';
import { register } from '../../../features/user/userActions';
import { useNavigate } from 'react-router-dom';

const useRegisterForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSamePassword, setIsSamePassword] = useState(false);
  const { inputValues, handleChange } = useForm();

  const confirmSamePassword = (e) => {
    if (e.target.value !== inputValues.password && e.target.value !== "") {
      setIsSamePassword(true);
    } else {
      setIsSamePassword(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSamePassword) return alert("contraseñas no coinciden paps");
    dispatch(register(inputValues));
    navigate('/');
  };

  return { handleChange, handleSubmit, isSamePassword, confirmSamePassword }
}

export default useRegisterForm;