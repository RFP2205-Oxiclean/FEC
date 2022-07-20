import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { getProductById, getStylesById, addToCart, getStars } from "./controllers.js";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createRoot } from "react-dom/client";
import axios from "axios";
import { API_KEY, url } from "../config/config.js";
import { createCloudinaryDisplayURL, createCloudinaryThumbnailURL } from "./services/Cloudinary";
let testAxios = axios.create({});

let cachedProductById = {};

it("function getProductById returns an object", () => {
  getProductById(40344).then((data) => {
    expect(typeof data).toBe("object");
  });
});

let cachedStylesById = {};

it("function getStylesById returns an array", () => {
  getStylesById(40344).then((data) => {
    // console.log(data);
    expect(Array.isArray(data)).toBe(true);
  });
});

let prefetchCache = {};

it("function getStylesById returns that contains an object", () => {
  getStylesById(40344).then((data) => {
    expect(typeof data[0]).toBe("object");
  });
});

it("tests that addToCart increases user count from get request", () => {
  addToCart(1394865, 2)
    .then((response) => {
      expect(response[0].data).toBe("Created");
    })
    .catch((err) => {
      console.log("error: ", err);
    });
});

it("tests that addToCart returns a rejected promise with a id of null", () => {
  addToCart(null, 2)
    .then((response) => {
      fail("shouldnt get here");
    })
    .catch((err) => {
      expect(err).not.toBe(null);
    });
});

it("should return a string", () => {
  expect(typeof createCloudinaryDisplayURL("someText.com")).toBe("string");
});

it("should return a string", () => {
  expect(typeof createCloudinaryThumbnailURL("someText.com")).toBe("string");
});

it("should return a number less than 5", () => {
  getStars(40344).then((rating) => {
    expect(rating).toBe(3.7);
  });
});
