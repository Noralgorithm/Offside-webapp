import { useDispatch } from 'react-redux';
import * as authServices from '../../../services/auth.services';
import { login } from '../../../features/user/userSlice';
import useForm from '../../../components/useForm';
import { toast } from 'react-toastify';

const useLoginForm = () => {

  const dispatch = useDispatch()
  const { inputValues, handleChange } = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await authServices.login(inputValues);
      localStorage.setItem("loggedUser", JSON.stringify(data));
      dispatch(login(data));
    } catch(e) {
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
  }

  return { handleChange, handleSubmit };
}

export default useLoginForm;