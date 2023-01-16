import axios from "axios";
import { api } from "../config";

const BASE_URL = api + "/stickers";

export const obtain = async (token, eventId) => {
  try {
    const { data } = await axios.get(BASE_URL + "/obtain/" + eventId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!data.success) throw new Error(data.message || "Error Desconocido");
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || e?.message || "Error Desconocido.");
  }
};

export const checkStatus = async (token, /* eventId */) => {
  try {
    const { data } = await axios.get(BASE_URL + "/get-diary-status", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(data)
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error Desconocido.");
  }
};
