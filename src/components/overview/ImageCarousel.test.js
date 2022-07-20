/** @jest-environment jsdom */

import React from "react";
import { createRoot } from "react-dom/client";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import ImageCarousel from "./ImageCarousel.jsx";
import { createCloudinaryDisplayURL } from "../../services/Cloudinary.js";
// const ImageCarousel = ( {product_id, styleClickHandler, styleObjects, activeStyleObject, productInfo} ) => {

const container = document.createElement("div");
const root = createRoot(container);
root.render(<div></div>);

let activeThumbnailIndices = {
  240500: 0,
  240501: 0,
  240502: 0,
  240503: 0,
  240504: 0,
  240505: 0,
};
let activeDisplayIndex = 0;
let activeThumbnailIndex = 0;
let stocks = {
  240500: [
    {
      quantity: 8,
      size: "XS",
      id: "1394769",
    },
    {
      quantity: 16,
      size: "S",
      id: "1394770",
    },
    {
      quantity: 17,
      size: "M",
      id: "1394771",
    },
    {
      quantity: 10,
      size: "L",
      id: "1394772",
    },
    {
      quantity: 19,
      size: "XL",
      id: "1394773",
    },
  ],
  240501: [
    {
      quantity: 8,
      size: "XS",
      id: "1394775",
    },
    {
      quantity: 16,
      size: "S",
      id: "1394776",
    },
    {
      quantity: 17,
      size: "M",
      id: "1394777",
    },
    {
      quantity: 10,
      size: "L",
      id: "1394778",
    },
    {
      quantity: 15,
      size: "XL",
      id: "1394779",
    },
    {
      quantity: 6,
      size: "XXL",
      id: "1394780",
    },
  ],
  240502: [
    {
      quantity: 8,
      size: "XS",
      id: "1394781",
    },
    {
      quantity: 16,
      size: "S",
      id: "1394782",
    },
    {
      quantity: 17,
      size: "M",
      id: "1394783",
    },
    {
      quantity: 10,
      size: "L",
      id: "1394784",
    },
    {
      quantity: 15,
      size: "XL",
      id: "1394785",
    },
    {
      quantity: 6,
      size: "XXL",
      id: "1394786",
    },
  ],
  240503: [
    {
      quantity: 8,
      size: "XS",
      id: "1394787",
    },
    {
      quantity: 16,
      size: "S",
      id: "1394788",
    },
    {
      quantity: 17,
      size: "M",
      id: "1394789",
    },
    {
      quantity: 10,
      size: "L",
      id: "1394790",
    },
    {
      quantity: 15,
      size: "XL",
      id: "1394791",
    },
    {
      quantity: 6,
      size: "XXL",
      id: "1394792",
    },
  ],
  240504: [
    {
      quantity: 8,
      size: "XS",
      id: "1394793",
    },
    {
      quantity: 16,
      size: "S",
      id: "1394794",
    },
    {
      quantity: 17,
      size: "M",
      id: "1394795",
    },
    {
      quantity: 10,
      size: "L",
      id: "1394796",
    },
    {
      quantity: 15,
      size: "XL",
      id: "1394797",
    },
    {
      quantity: 6,
      size: "XXL",
      id: "1394798",
    },
  ],
  240505: [
    {
      quantity: 8,
      size: "XS",
      id: "1394799",
    },
    {
      quantity: 16,
      size: "S",
      id: "1394800",
    },
    {
      quantity: 17,
      size: "M",
      id: "1394801",
    },
    {
      quantity: 10,
      size: "L",
      id: "1394802",
    },
    {
      quantity: 15,
      size: "XL",
      id: "1394803",
    },
    {
      quantity: 6,
      size: "XXL",
      id: "1394804",
    },
  ],
};
let styleObjects = [
  {
    style_id: 240500,
    name: "Forest Green & Black",
    original_price: "140.00",
    sale_price: null,
    "default?": true,
    photos: [
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        trueIndex: 0,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
        trueIndex: 1,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
        trueIndex: 2,
      },
      {
        thumbnail_url: "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        trueIndex: 3,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        trueIndex: 4,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        trueIndex: 5,
      },
    ],
    skus: {
      1394769: {
        quantity: 8,
        size: "XS",
      },
      1394770: {
        quantity: 16,
        size: "S",
      },
      1394771: {
        quantity: 17,
        size: "M",
      },
      1394772: {
        quantity: 10,
        size: "L",
      },
      1394773: {
        quantity: 15,
        size: "XL",
      },
      1394774: {
        quantity: 4,
        size: "XL",
      },
    },
  },
  {
    style_id: 240501,
    name: "Desert Brown & Tan",
    original_price: "140.00",
    sale_price: null,
    "default?": false,
    photos: [
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        trueIndex: 0,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        trueIndex: 1,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        trueIndex: 2,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        trueIndex: 3,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        trueIndex: 4,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80",
        trueIndex: 5,
      },
    ],
    skus: {
      1394775: {
        quantity: 8,
        size: "XS",
      },
      1394776: {
        quantity: 16,
        size: "S",
      },
      1394777: {
        quantity: 17,
        size: "M",
      },
      1394778: {
        quantity: 10,
        size: "L",
      },
      1394779: {
        quantity: 15,
        size: "XL",
      },
      1394780: {
        quantity: 6,
        size: "XXL",
      },
    },
  },
  {
    style_id: 240502,
    name: "Ocean Blue & Grey",
    original_price: "140.00",
    sale_price: "100.00",
    "default?": false,
    photos: [
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80",
        trueIndex: 0,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80",
        trueIndex: 1,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        trueIndex: 2,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80",
        trueIndex: 3,
      },
      {
        thumbnail_url: "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        trueIndex: 4,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        trueIndex: 5,
      },
    ],
    skus: {
      1394781: {
        quantity: 8,
        size: "XS",
      },
      1394782: {
        quantity: 16,
        size: "S",
      },
      1394783: {
        quantity: 17,
        size: "M",
      },
      1394784: {
        quantity: 10,
        size: "L",
      },
      1394785: {
        quantity: 15,
        size: "XL",
      },
      1394786: {
        quantity: 6,
        size: "XXL",
      },
    },
  },
  {
    style_id: 240503,
    name: "Digital Red & Black",
    original_price: "140.00",
    sale_price: null,
    "default?": false,
    photos: [
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
        trueIndex: 0,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80",
        trueIndex: 1,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
        trueIndex: 2,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        trueIndex: 3,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        trueIndex: 4,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
        url: "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        trueIndex: 5,
      },
    ],
    skus: {
      1394787: {
        quantity: 8,
        size: "XS",
      },
      1394788: {
        quantity: 16,
        size: "S",
      },
      1394789: {
        quantity: 17,
        size: "M",
      },
      1394790: {
        quantity: 10,
        size: "L",
      },
      1394791: {
        quantity: 15,
        size: "XL",
      },
      1394792: {
        quantity: 6,
        size: "XXL",
      },
    },
  },
  {
    style_id: 240504,
    name: "Sky Blue & White",
    original_price: "140.00",
    sale_price: "100.00",
    "default?": false,
    photos: [
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
        trueIndex: 0,
      },
      {
        thumbnail_url: "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        trueIndex: 1,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
        trueIndex: 2,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        trueIndex: 3,
      },
      {
        thumbnail_url: "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        trueIndex: 4,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        trueIndex: 5,
      },
    ],
    skus: {
      1394793: {
        quantity: 8,
        size: "XS",
      },
      1394794: {
        quantity: 16,
        size: "S",
      },
      1394795: {
        quantity: 17,
        size: "M",
      },
      1394796: {
        quantity: 10,
        size: "L",
      },
      1394797: {
        quantity: 15,
        size: "XL",
      },
      1394798: {
        quantity: 6,
        size: "XXL",
      },
    },
  },
  {
    style_id: 240505,
    name: "Dark Grey & Black",
    original_price: "170.00",
    sale_price: null,
    "default?": false,
    photos: [
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        trueIndex: 0,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        trueIndex: 1,
      },
      {
        thumbnail_url: "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80",
        trueIndex: 2,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        trueIndex: 3,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        trueIndex: 4,
      },
      {
        thumbnail_url:
          "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url: "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
        trueIndex: 5,
      },
    ],
    skus: {
      1394799: {
        quantity: 8,
        size: "XS",
      },
      1394800: {
        quantity: 16,
        size: "S",
      },
      1394801: {
        quantity: 17,
        size: "M",
      },
      1394802: {
        quantity: 10,
        size: "L",
      },
      1394803: {
        quantity: 15,
        size: "XL",
      },
      1394804: {
        quantity: 6,
        size: "XXL",
      },
    },
  },
];

let productInfo = {
  id: 40344,
  campus: "hr-rfp",
  name: "Camo Onesie",
  slogan: "Blend in to your crowd",
  description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  category: "Jackets",
  default_price: "140.00",
  created_at: "2021-08-13T14:38:44.509Z",
  updated_at: "2021-08-13T14:38:44.509Z",
  features: [
    {
      feature: "Fabric",
      value: "Canvas",
    },
    {
      feature: "Buttons",
      value: "Brass",
    },
  ],
};

it("should have the url given for display", () => {
  const { getByTestId } = render(
    <ImageCarousel
      productInfo={productInfo}
      styleInfo={styleObjects[0]}
      styleObjects={styleObjects}
      activeDisplayIndex={0}
      stock={stocks}
      handleAddToCart={() => {}}
      incrementThumbnailIndex={() => {}}
      decrementThumbnailIndex={() => {}}
      rating={5}
      activeThumbnailIndex={0}
      photoObjects={styleObjects[0].photos}
      image={"someUrl.com"}></ImageCarousel>
  );

  const x = getByTestId("image-carousel");
  const z = getByTestId("display-image");

  expect(getByTestId("image-carousel")).toContainElement(z);
  expect(z).toHaveAttribute("src", createCloudinaryDisplayURL("someUrl.com"));
});

it("should contain correct nested elements", () => {
  const { getByTestId } = render(
    <ImageCarousel
      productInfo={productInfo}
      styleInfo={styleObjects[0]}
      styleObjects={styleObjects}
      activeDisplayIndex={0}
      stock={stocks}
      handleAddToCart={() => {}}
      incrementThumbnailIndex={() => {}}
      decrementThumbnailIndex={() => {}}
      rating={5}
      activeThumbnailIndex={0}
      photoObjects={styleObjects[0].photos}
      image={"someUrl.com"}></ImageCarousel>
  );

  const x = getByTestId("image-carousel");
  const z = getByTestId("thumbnail-container");
  const y = getByTestId("style-object-thumbnail-active");
  const k = getByTestId("collapse-and-info-container");

  expect(x).toContainElement(z);
  expect(x).toContainElement(k);
  expect(k).toContainElement(y);
});

it("should contain correct nested elements", () => {
  const { getByTestId } = render(
    <ImageCarousel
      productInfo={productInfo}
      styleInfo={styleObjects[0]}
      styleObjects={styleObjects}
      activeDisplayIndex={0}
      stock={stocks}
      handleAddToCart={() => {}}
      incrementThumbnailIndex={() => {}}
      decrementThumbnailIndex={() => {}}
      rating={5}
      activeThumbnailIndex={0}
      photoObjects={styleObjects[0].photos}
      image={"someUrl.com"}></ImageCarousel>
  );

  const x = getByTestId("image-carousel");
  const z = getByTestId("thumbnail-container");
  const y = getByTestId("style-object-thumbnail-active");
  const k = getByTestId("collapse-and-info-container");

  expect(x).toContainElement(z);
  expect(x).toContainElement(k);
  expect(k).toContainElement(y);
});
