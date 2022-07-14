import axios from "axios";
import { url, API_KEY } from "../config/config.js";
import {
  createCloudinaryDisplayURL,
  createCloudinaryThumbnailURL,
} from "./services/Cloudinary.js";

let cachedProductById = {};

export function getProductById(id, count = 5) {
  if (cachedProductById[id]) {
    return cachedProductById[id];
  }
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
    cachedProductById[id] = response.data;
    return cachedProductById[id];
  });
}

let cachedStylesById = {};

export function getProductStylesById(id) {
  if (cachedStylesById[id]) {
    return cachedStylesById[id];
  }
  return axios({
    method: "GET",
    url: url + `/products/${id}/styles`,
    headers: {
      Authorization: API_KEY,
    },
  }).then((response) => {
    cachedStylesById[id] = response.data.results;
    return cachedStylesById[id];
  });
}

let prefetchCache = {};

export function prefetch(styleObjects, product_id) {
  if (prefetchCache[product_id]) {
    return;
  } else {
    styleObjects.forEach(function (styleObject) {
      styleObject.photos.forEach(function (photoObject) {
        axios
          .get(createCloudinaryThumbnailURL(photoObject.thumbnail_url))
          .then(() => {
            prefetchCache[product_id] = true;
          })
          .catch();
        axios
          .get(createCloudinaryDisplayURL(photoObject.url))
          .then(() => {
            prefetchCache[product_id] = true;
          })
          .catch();
      });
    });
  }
}
