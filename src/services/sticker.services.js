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
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error Desconocido.");
  }
};

export const checkStatus = async (token) => {
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
