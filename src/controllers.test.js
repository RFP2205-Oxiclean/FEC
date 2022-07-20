import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { getProductById, getProductStylesById, addToCart } from "./controllers.js";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createRoot } from "react-dom/client";
import axios from "axios";
import { API_KEY, url } from "../config/config.js";
let testAxios = axios.create({});

// it("function getProductById returns an object", () => {
//   getProductById(40344).then((data) => {
//     expect(typeof data).toBe("object");
//   });
// });

// it("function getProductStylesById returns an array", () => {
//   getProductStylesById(40344).then((data) => {
//     expect(Array.isArray(data)).toBe(true);
//   });
// });

// it("function getProductStylesById returns that contains an object", () => {
//   getProductStylesById(40344).then((data) => {
//     expect(typeof data[0]).toBe("object");
//   });
// });

it("function addToCart adds 1 product to the cart", () => {
  let x = 0;
  testAxios({
    url: `${url}/cart`,
    params: {
      product_id: 1394795,
    },
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((response) => {
      x = response.data[0];
      console.log(response);
    })
    .then(() => {
      addToCart(1394795, 1);
    })
    .then(() => {
      return testAxios({
        url: `${url}/cart`,
        params: {
          product_id: 1394795,
        },
        headers: {
          Authorization: API_KEY,
        },
      });
    })
    .then((response) => {
      response.data.forEach(function (countObj) {
        if (countObj.id === "1394795") {
          expect(countObj.count).toBe(x + 2);
        }
      });
    });

  // addToCart(1394865, 2)
});
