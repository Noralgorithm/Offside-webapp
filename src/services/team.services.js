import axios from "axios";
import { api } from "../config";

let BASE_URL = api + "/teams/all/";

export const fetchTeamsList = async (token, eventId) => {
  BASE_URL = BASE_URL + eventId;
  try {
    const { data } = await axios.get(BASE_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.items;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error Desconocido");
  }
};
