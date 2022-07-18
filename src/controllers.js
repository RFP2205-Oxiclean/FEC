import axios from "axios";
import { url, API_KEY } from "../config/config.js";
import { createCloudinaryDisplayURL, createCloudinaryThumbnailURL } from "./services/Cloudinary.js";

let newAxios = axios.create({});

let cachedProductById = {};

export function getProductById(id, count = 5) {
  if (cachedProductById[id]) {
    return new Promise((resolve, reject) => {
      resolve(cachedProductById[id]);
    });
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

export function getStylesById(id) {
  if (cachedStylesById[id]) {
    return new Promise((resolve, reject) => {
      resolve(cachedStylesById[id]);
    });
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
  axios.defaults.headers.common["Authorization"] = "";
  if (prefetchCache[product_id]) {
    return;
  } else {
    if (styleObjects[0].style_id === null) {
      return;
    }
    styleObjects.forEach(function (styleObject) {
      styleObject.photos.forEach(function (photoObject) {
        newAxios.get(createCloudinaryDisplayURL(photoObject.url)).then(() => {
          prefetchCache[product_id] = true;
        });
        newAxios.get(createCloudinaryThumbnailURL(photoObject.thumbnail_url));
      });
    });
  }
}

export function addToCart(id, quantity) {
  if (quantity > 0 && id !== 0) {
    let arr = Array(parseInt(quantity)).fill(0);
    return Promise.all(
      arr.map((el) => {
        return axios.post(
          `${url}/cart`,
          {
            sku_id: id,
            count: 5,
          },
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
      })
    );
  } else {
    return new Promise((resolve, reject) => {
      reject();
    });
  }
}
