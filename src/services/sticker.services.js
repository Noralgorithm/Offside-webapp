import axios from "axios";
import { api } from "../config";

const BASE_URL = api + '/stickers';

export const obtain = async (token) => {
  try {
    const { data } = await axios.get(BASE_URL + '/obtain/1', {
      headers: {
        Authorization: 'Bearer '+ token 
      }
    });
    return data;
  } catch(e) {
    throw new Error(e);
  }
};