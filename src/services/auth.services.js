import axios from "axios";
import { api } from "../config";

const LOGIN_URL = api + "/auth/login";
const REGISTER_URL = api + "/auth/register";

export const register = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post(REGISTER_URL, { name, email, password });
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error Desconocido.");
  }
};

export const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post(LOGIN_URL, { email, password });
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error desconocido.");
  }
};

export const sendCode = async (email) => {
  try {
    const { data } = await axios.put(api + "/auth/forgot-password", {
      email,
    });
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error desconocido.");
  }
};

export const verifyCode = async (code) => {
  try {
    const { data } = await axios.post(api + "/auth/code", {
      code,
    });
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error desconocido.");
  }
};

export const createNewPassword = async (password, code) => {
  try {
    const { data } = await axios.put(api + "/auth/new-password", {
      password,
      code,
    });
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error desconocido.");
  }
};
