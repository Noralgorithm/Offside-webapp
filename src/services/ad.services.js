import axios from "axios";

const BASE_URL = "https://backend.playoffside.online/ads";

export const watch = async () => {
  try {
    const { data } = await axios.get(BASE_URL + "/watch");
    return data;
  } catch (e) {
    throw new Error(e);
  }
}

export const visit = async (id) => {
  try {

    const { data } = await axios.get(BASE_URL + "/watch-detailed/" + id);
    console.log(BASE_URL + "/watch-detailed/" + id)
    return data;
  } catch (e) {
    throw new Error(e);
  }
}
