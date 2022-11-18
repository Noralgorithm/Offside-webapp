import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../features/user/userActions';
import useForm from '../../../components/useForm';

const useLoginForm = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.user);
  const { inputValues, handleChange } = useForm();
  const [ isError, setIsError ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(inputValues));
    if (!state.success) setIsError(true);
  }

  return { handleChange, handleSubmit, isError };
}

export default useLoginForm;