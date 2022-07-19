import axios from "axios";
import { url, API_KEY } from "../config/config.js";
import { createCloudinaryDisplayURL, createCloudinaryThumbnailURL } from "./services/Cloudinary.js";

let controllerAxios = axios.create({});
let controllerAxios2 = axios.create({});

let cachedProductById = {};

export function getProductById(id, count = 5) {
  if (cachedProductById[id]) {
    return new Promise((resolve, reject) => {
      resolve(cachedProductById[id]);
    });
  }
  return controllerAxios2({
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
  return controllerAxios2({
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
    if (styleObjects[0].style_id === null) {
      return;
    }
    styleObjects.forEach(function (styleObject) {
      styleObject.photos.forEach(function (photoObject) {
        controllerAxios2.get(createCloudinaryDisplayURL(photoObject.url)).then(() => {
          prefetchCache[product_id] = true;
        });
        controllerAxios2.get(createCloudinaryThumbnailURL(photoObject.thumbnail_url));
      });
    });
  }
}

export function addToCart(id, quantity) {
  if (quantity > 0 && id !== 0) {
    let arr = Array(parseInt(quantity)).fill(0);
    return Promise.all(
      arr.map((el) => {
        return controllerAxios2.post(
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

let cachedStars = function () {};

export function getStars(product_id) {
  return controllerAxios2({
    method: "GET",
    url: `${url}/reviews/meta`,
    params: {
      product_id: product_id,
    },
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((response) => {
      return response.data;
    })
    .then((metadata) => {
      let sum =
        parseInt(metadata.ratings[1]) +
        2 * parseInt(metadata.ratings[2]) +
        3 * parseInt(metadata.ratings[3]) +
        4 * parseInt(metadata.ratings[4]) +
        5 * parseInt(metadata.ratings[5]);

      var totalRatings =
        parseInt(metadata.ratings[1]) +
        parseInt(metadata.ratings[2]) +
        parseInt(metadata.ratings[3]) +
        parseInt(metadata.ratings[4]) +
        parseInt(metadata.ratings[5]);

      var roundedAverage = Math.round((sum / totalRatings) * 10) / 10;

      return roundedAverage;

      // /* finding the recommended % */
      // let totalRecommendations = parseInt(metadata.recommended.false) + parseInt(metadata.recommended.true);
      // let numberRecommended = parseInt(metadata.recommended.true);

      // var percentRecommended = Math.round((numberRecommended / totalRecommendations) * 100);
      // return percentRecommended;
    });
}
