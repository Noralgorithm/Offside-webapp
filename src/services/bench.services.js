import axios from "axios";
import { api } from "../config";

const BASE_URL = api + 'public-events/';

export const fetchBench = async (token, eventId) => {
  try {
    const { data } = await axios.get(BASE_URL + eventId + '/bench', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    return data;
  } catch (e) {
    throw new Error(e);
  }
}