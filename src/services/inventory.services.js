import axios from "axios";

const BASE_URL = "http://localhost:3000/inventory";

export const fetchAlbumInfo = async (token, eventId) => {
  const { data } = await axios.get(BASE_URL + `/public-events/${eventId}/album`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

export const fetchInventory = async (token, eventId, page) => {
  try {
    const { data } = await axios.get(BASE_URL + "/public-events/" + eventId + "?size=5&page=" + page, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const claimSticker = async (token, eventId, stickerId) => {
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
