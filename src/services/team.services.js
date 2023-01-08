import axios from "axios";
import { api } from "../config";

let BASE_URL = api + "/teams/all/";

export const fetchTeamsList = async (token, eventId, { onlyMyOwnTeams }) => {
  BASE_URL = BASE_URL + eventId;
  if (onlyMyOwnTeams) BASE_URL = BASE_URL + "?onlyMyOwnTeams=true";

  try {
    const { data } = await axios.get(BASE_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!data.success) throw new Error(data.message);
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error Desconocido");
  }
};
