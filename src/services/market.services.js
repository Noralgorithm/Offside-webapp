import axios from "axios";
import { api } from "../config";

const BASE_URL = api + "/public-events/";

export const fetchAuctionsList = async (
  token,
  eventId,
  { teamId, position, playerName },
  page = 0
) => {
  try {
    let queryString = "";
    if (teamId) queryString += `&teamId=${teamId}`;
    if (position) queryString += `&position=${position}`;
    if (playerName) queryString += `&playername=${playerName}`;

    const { data } = await axios.get(
      BASE_URL + eventId + `/market?size=6&page=${page}` + queryString,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (!data?.success) throw new Error(data?.message);
    return data;
  } catch (e) {
    throw new Error(
      e?.response?.data?.message || e?.message || "Error Desconocido"
    );
  }
};

export const fetchMyAuctions = async (
  token,
  eventId,
  { teamId, position, playerName },
  page
) => {
  try {
    let queryString = "";
    if (teamId) queryString += `&teamId=${teamId}`;
    if (position) queryString += `&position=${position}`;
    if (playerName) queryString += `&playername=${playerName}`;

    const { data } = await axios.get(
      BASE_URL +
        eventId +
        `/market?myAuction=true&size=6&page=${page}` +
        queryString,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (!data?.success) throw new Error(data?.message);
    return data;
  } catch (e) {
    throw new Error(
      e?.response?.data?.message || e?.message || "Error Desconocido"
    );
  }
};

export const fetchAuctionInfo = async (token, eventId, auctionId) => {
  try {
    const { data } = await axios.get(
      BASE_URL + eventId + "/market/" + auctionId,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (!data.success) throw new Error(data.message);
    return data;
  } catch (e) {
    throw new Error(
      e?.response?.data?.message || e?.message || "Error Desconocido"
    );
  }
};

export const fetchMyBids = async (
  token,
  eventId,
  { teamId, position, playerName },
  page
) => {
  try {
    let queryString = "";
    if (teamId) queryString += `&teamId=${teamId}`;
    if (position) queryString += `&position=${position}`;
    if (playerName) queryString += `&playername=${playerName}`;

    const { data } = await axios.get(
      BASE_URL + eventId + `/market/myBids?size=6&page=${page}` + queryString,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (!data.success) throw new Error(data.message);
    return data;
  } catch (e) {
    throw new Error(
      e?.response?.data?.message || e?.message || "Error Desconocido"
    );
  }
};

export const addAuction = async (
  token,
  { initialValue, directPurchase, event, playerId }
) => {
  try {
    const data = await axios.post(
      BASE_URL + event + "/market/add",
      {
        initialValue,
        directPurchase,
        eventId: event,
        playerId,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error Desconocido");
  }
};

export const addBid = async (
  token,
  eventId,
  { value, marketId, isDirectPurchase }
) => {
  try {
    const { data } = await axios.post(
      BASE_URL + eventId + "/market/bid",
      {
        value,
        marketId,
        isDirectPurchase,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error Desconocido");
  }
};

export const updateBid = async (
  token,
  eventId,
  marketId,
  value,
  bidId,
  isDirectPurchase
) => {
  try {
    const { data } = await axios.put(
      BASE_URL + eventId + "/market/update/" + bidId,
      {
        value,
        marketId,
        isDirectPurchase,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || "Error Desconocido");
  }
};
