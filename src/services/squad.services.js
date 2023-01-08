import axios from "axios";
import { api } from "../config";

const BASE_URL = api + "/public-events/";

export const fetchBench = async (
  token,
  eventId,
  teamFilter,
  positionFilter,
  playerNameSearch,
  page
) => {
  try {
    let queryString = "";
    if (playerNameSearch) queryString += `&playername=${playerNameSearch}`;
    if (teamFilter) queryString += `&teamname=${teamFilter}`;
    if (positionFilter) queryString += `&position=${positionFilter}`;
    if (page) queryString += `&page=${page}`;
    console.log(BASE_URL + eventId + "/squad?" + queryString);
    const { data } = await axios.get(
      BASE_URL + eventId + "/squad?" + queryString,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (!data.success) throw new Error(data.message);
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error Desconocido");
  }
};

export const fetchSquadPlayers = async (token, eventId) => {
  try {
    const { data } = await axios.get(BASE_URL + eventId + "/squad/players", {
      headers: { Authorization: "Bearer " + token },
    });
    if (!data.success) throw new Error(data.message);
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error Desconocido");
  }
};

export const insertPlayer = async (token, eventId, playerId) => {
  try {
    const res = axios.post(
      BASE_URL + eventId + "/squad/player",
      { playerId },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return res;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error Desconocido");
  }
};

export const removePlayer = async (token, eventId, playerId) => {
  try {
    const res = axios.delete(
      BASE_URL + eventId + "/squad/player/" + playerId,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return res;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error Desconocido");
  }
};
