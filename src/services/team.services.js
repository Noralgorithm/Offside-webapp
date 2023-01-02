import axios from "axios";
import { api } from "../config";

const BASE_URL = api + "/teams/all/";

export const fetchTeamsList = async (token, eventId) => {
  try {
    const { data } = await axios.get(BASE_URL + eventId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || 'unknown error');
  }
};
