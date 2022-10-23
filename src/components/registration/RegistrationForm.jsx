import React, { useState } from 'react';

const RegistrationForm = () => {

  const [inputValues, setInputValues] = useState({
    name: '', email: '', password: '' 
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputValues)
    alert('registrao :p');
  }

  return (<>
    <h2>Registro</h2>
    <form onSubmit={handleSubmit}>
      <label>
        <p>Nombre</p>
        <input type='text' required placeholder='Ingrese su nombre' id='formName' name='name' onChange={handleChange}/>
      </label>
      <label>
        <p>Correo Electrónico</p>
        <input type='email' required placeholder='Ingrese su nombre' id='formEmail' name='email' onChange={handleChange}/>
      </label>
      <label>
        <p>Contraseña</p>
      <input type='password' required placeholder='Ingrese su nombre' id='formPassword' name='password' onChange={handleChange}/>
      </label>
      <br/>
      <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default RegistrationForm