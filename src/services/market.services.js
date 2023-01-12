import axios from "axios";
import { api } from "../config";

const BASE_URL = api + "/public-events/";

export const fetchAuctionsList = async (token, eventId) => {
  try {
    const { data } = await axios.get(BASE_URL + eventId + "/market", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!data?.success) throw new Error(data?.message);
    return data;
  } catch (e) {
    throw new Error(
      e?.response?.data?.message || e?.message || "Error Desconocido"
    );
  }
};

export const fetchMyAuctions = async (token, eventId) => {
  try {
    const { data } = await axios.get(
      BASE_URL + eventId + "/market?myAuction=true",
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
  console.log(token, eventId, auctionId);
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

export const fetchMyBids = async (token, eventId) => {
  try {
    const { data } = await axios.get(BASE_URL + eventId + "/market/myBids", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(data);
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
    console.log(data);
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

export const updateBid = (token, eventId, bidId, value) => {
  try {
    const { data } = axios.put(
      BASE_URL + eventId + "/market/update/" + bidId,
      {
        value,
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
