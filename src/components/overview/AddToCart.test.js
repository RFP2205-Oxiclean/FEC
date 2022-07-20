/** @jest-environment jsdom */

import React from "react";
import { createRoot } from "react-dom/client";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import AddToCart from "./AddToCart.jsx";
import { createCloudinaryDisplayURL } from "../../services/Cloudinary.js";

let stock = {
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

let handleAddToCart = () => {};

let quantity = 5;
let selectQuantity = 10;
let noItems = false;
let setPrompt = () => {};
let toggleShakeCart = () => {};
let size = "XXL";

it("should invoke callback", () => {
  const { getByTestId } = render(
    <AddToCart
      stock={stock[240500]}
      quantity={quantity}
      selectQuantity={() => {}}
      noItems={false}
      handleAddToCart={() => {}}
      setPrompt={setPrompt}
      toggleShakeCart={toggleShakeCart}
      size={size}></AddToCart>
  );

  const k = getByTestId("add-to-cart");

  expect(k).toBeTruthy();
  fireEvent.click(k);
});

it("should be out of stock when buying last one", () => {
  let noItems = false;
  let mySpy = jest.fn();
  let setNoItems = function (noItems) {
    noItems = !noItems;
  };

  const { getByTestId } = render(
    <AddToCart
      stock={[{ id: 123456, quantity: 1, size: "XS" }]}
      quantity={1}
      selectQuantity={() => {}}
      noItems={false}
      handleAddToCart={mySpy}
      setPrompt={setPrompt}
      toggleShakeCart={toggleShakeCart}
      size={size}>
      <div></div>
    </AddToCart>
  );

  const k = getByTestId("add-to-cart");
  fireEvent.click(k);
  expect(mySpy).toHaveBeenCalled();
});
// {
//   stock, handleAddToCart, stockId, quantity, selectQuantity, noItems, toggleShakeCart, setPrompt, size;
// }
