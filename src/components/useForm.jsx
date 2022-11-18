import { useState } from 'react';

const useForm = () => {
  
  const [ inputValues, setInputValues ] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return { inputValues, handleChange }
}

export default useForm;