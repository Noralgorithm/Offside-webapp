import axios from "axios";

const BASE_URL = "http://localhost:3000/ads";

export const watch = async () => {
  try {
    const { data } = await axios.get(BASE_URL + "/watch");
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
