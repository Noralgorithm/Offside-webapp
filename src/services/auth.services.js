import axios from "axios";

const LOGIN_URL = 'https://backend-staging.playoffside.online/auth/login';
const REGISTER_URL = 'https://backend-staging.playoffside.online/auth/register';

export const register = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post(REGISTER_URL, { name, email, password });
    return data;
  } catch(e) {
    throw new Error('error registrandote perra');
  }
}

export const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post(LOGIN_URL, { email, password });
    return data;
  } catch(e) {
    throw new Error('Datos incorrectos')
  }
}
