import axios from "axios";
import { api } from "../config";

const BASE_URL = api + "/public-events";

export const fetchEventsInfo = async (token) => {
  try {
    const { data } = await axios.get(BASE_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error Desconocido.");
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
    throw new Error(e?.response?.data?.message || "Error Desconocido.");
  }
};

export const joinEvent = async (token, eventId) => {
  try {
    const { data } = await axios.post(
      BASE_URL + `/${eventId}/join-game`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error Desconocido.");
  }
};

export const fetchRankingList = async (token, eventId, page) => {
  try {
    const { data } = await axios.get(BASE_URL + `/${eventId}/ranking?size=10&page=${page}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error Desconocido.");
  }
};
