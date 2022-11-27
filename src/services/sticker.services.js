import axios from "axios";

const BASE_URL = 'http://localhost:3000/stickers';

export const obtain = async () => {
  try {
    const { data } = await axios.get(BASE_URL + '/obtain');
    return data;
  } catch(e) {
    throw new Error(e);
  }
};