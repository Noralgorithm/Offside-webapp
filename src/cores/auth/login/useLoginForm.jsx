import { useDispatch } from 'react-redux';
import * as authServices from '../../../services/auth.services';
import { login } from '../../../features/user/userSlice';
import useForm from '../../../components/useForm';

const useLoginForm = () => {

  const dispatch = useDispatch()
  const { inputValues, handleChange } = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await authServices.login(inputValues);
      console.log(data)
      localStorage.setItem("loggedUser", JSON.stringify(data));
      dispatch(login(data));
    } catch(e) {
      alert(e.message);
    }
  }

  return { handleChange, handleSubmit };
}

export default useLoginForm;