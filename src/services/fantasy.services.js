import axios from "axios";
import { api } from "../config";

const BASE_URL = api + "/public-events";

export const fantasysInfo = async (token) => {
  try {
    const { data } = await axios.get(BASE_URL, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "unknown error");
  }
};

export const fetchMoney = async (token, eventId) => {
  try {
    const { data } = await axios.get(BASE_URL + `/${eventId}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "unknown error");
  }
};
