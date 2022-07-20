/** @jest-environment jsdom */

import React from "react";
import { createRoot } from "react-dom/client";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import PurchaseInfo from "./PurchaseInfo.jsx";
import { createCloudinaryDisplayURL } from "../../services/Cloudinary.js";
// const ImageCarousel = ( {product_id, styleClickHandler, styleObjects, activeStyleObject, productInfo} ) => {

const container = document.createElement("div");
const root = createRoot(container);
root.render(<div></div>);

let styles = [
  {
    style_id: 5,
    name: "testName",
    original_price: "$50",
    sale_price: "40",
    photos: { url: "something.com", thumbnail_url: "somethingSmall.com" },
    skus: {
      123456: { quantity: 10, size: "XS" },
    },
  },
  {
    style_id: 6,
    name: "testName2",
    original_price: "$50",
    sale_price: "40",
    photos: { url: "something.com", thumbnail_url: "somethingSmall.com" },
    skus: {
      123456: { quantity: 20, size: "M" },
    },
  },
  {
    style_id: 7,
    name: "testName3",
    original_price: "$50",
    sale_price: "40",
    photos: { url: "something.com", thumbnail_url: "somethingSmall.com" },
    skus: {
      123456: { quantity: 30, size: "L" },
    },
  },
];

let stock = [
  { id: 12345, size: "XS", quantity: "10" },
  { id: 12346, size: "XS", quantity: "10" },
  { id: 12347, size: "XS", quantity: "10" },
];

afterEach(cleanup);

it("should render a Purchase List", () => {
  const myFn = jest.fn();
  const { getByTestId } = render(<PurchaseInfo activeStyle={styles[0]} style={styles} stock={stock} handleAddToCart={myFn}></PurchaseInfo>);
  expect(getByTestId("purchase-info")).not.toBe(null);
});

it("should have 'Select a Size!' text", () => {
  const myFn = jest.fn();
  const { getByTestId } = render(<PurchaseInfo activeStyle={styles[0]} style={styles} stock={stock} handleAddToCart={myFn}></PurchaseInfo>);
  const x = getByTestId("select-fade-out");
  const z = getByTestId("add-to-cart");

  expect(getByTestId("select-prompts")).not.toBe(null);
  expect(x).toHaveTextContent("Select a Size!");
});

// it("should test that callback is called onClick", () => {
//   const myFn = jest.fn();

//   const { getByTestId } = render(
//     <AddToCart
//       handleAddToCart={myFn}
//       stock={[
//         { quantity: 0, size: 1 },
//         { quantity: 0, size: 1 },
//       ]}></AddToCart>
//   );

//   fireEvent.click(getByTestId("add-to-cart"));

//   expect(myFn).toHaveBeenCalled();
// });
