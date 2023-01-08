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
    throw new Error(e?.response?.data?.message || e?.message || "Error Desconocido");
  }
};

export const fetchAuctionInfo = (token, eventId, auctionId) => {
  try {
    const { data } = axios.get(BASE_URL + eventId + "/market/" + auctionId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!data.success) throw new Error(data.message);
    return data;
  } catch (e) {
    throw new Error(
      e?.response?.data?.message || e?.message || "Error Desconocido"
    );
  }
};

export const addAuction = (token, eventId) => {
  try {
    const { data } = axios.post(
      BASE_URL + eventId + "/market/add",
      {
        /* TODO */
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

export const addBid = (token, eventId) => {
  try {
    const { data } = axios.post(
      BASE_URL + eventId + "/market/bid",
      {
        /* TODO */
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

export const updateBid = (token, eventId, bidId) => {
  try {
    const { data } = axios.put(
      BASE_URL + eventId + "/market/update/" + bidId,
      {
        /* TODO */
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
