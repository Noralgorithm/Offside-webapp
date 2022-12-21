import axios from "axios";
import { api } from "../config";

const BASE_URL = api + "/inventory";

export const fetchAlbumInfo = async (token, eventId) => {
  const { data } = await axios.get(
    BASE_URL + `/public-events/${eventId}/album`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data;
};

export const fetchInventory = async (token, eventId, page) => {
  try {
    const { data } = await axios.get(
      BASE_URL + "/public-events/" + eventId + "?size=4&page=" + page,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const claimSticker = async (token, eventId, stickerId) => {
  console.log(eventId, stickerId)
  try {
    const { data } = await axios.post(
      BASE_URL + `/public-events/${eventId}/claim-sticker`,
      {
        stickerId,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchTeamsList = async (token, eventId) => {
  try {
    const { data } = await axios.get("https://backend-staging.playoffside.online/teams/all/" + eventId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchTeam = async (token, eventId, teamId) => {
  try {
    const { data } = await axios.get(BASE_URL + `/public-events/${eventId}/album/${teamId}`, {
      headers: {
        Authorization: "Bearer " + token
      },
    });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchCarousel = async (token, eventId) => {
  try {
    const { data } = await axios.get(BASE_URL + `/public-events/${eventId}/carousel/`, {
      headers: {
        Authorization: "Bearer " + token
      },
    });
    return data;
  } catch (e) {
    throw new Error(e);
  }
}