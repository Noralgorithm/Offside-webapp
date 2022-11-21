import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authServices from '../../../services/auth.services';
import { login } from '../../../features/user/userSlice';
import useForm from '../../../components/useForm';

const useLoginForm = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.user);
  const { inputValues, handleChange } = useForm();
  const [ isError, setIsError ] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await authServices.login(inputValues);
      localStorage.setItem("loggedUser", JSON.stringify(data));
      dispatch(login(data));
    } catch(e) {
      alert(e);
    }
  }

  return { handleChange, handleSubmit, isError };
}

export default useLoginForm;