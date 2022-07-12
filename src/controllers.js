import axios from "axios";
import { url, API_KEY } from "/config/config.js";

export function getProductById(id, count = 5) {
  return axios({
    method: "GET",
    url: url + `/products/${id}`,
    headers: {
      Authorization: API_KEY,
    },
    params: {
      count: count,
      page: 1,
    },
  }).then((response) => {
    return response.data;
  });
}

export function getProductStylesById(id) {
  return axios({
    method: "GET",
    url: url + `/products/${id}/styles`,
    headers: {
      Authorization: API_KEY,
    },
  }).then((response) => {
    return response.data.results;
  });
}
