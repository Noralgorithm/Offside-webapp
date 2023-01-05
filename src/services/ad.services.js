import axios from "axios";
import { api } from "../config";

const BASE_URL = api + '/ads';

export const watch = async (token) => {
  try {
    const { data } = await axios.get(BASE_URL + "/watch", {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    return data;
  } catch (e) {
    throw new Error(e?.response?.data?.message || 'unknown error');
  }
};

export const VISIT_URL = BASE_URL + "/watch-detailed/";
