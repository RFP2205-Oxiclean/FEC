/** @jest-environment jsdom */

import React from "react";
import { createRoot } from "react-dom/client";
import { act, render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import QMenu from "./QMenu.jsx";
import { createCloudinaryDisplayURL } from "../../services/Cloudinary.js";
// const ImageCarousel = ( {product_id, styleClickHandler, styleObjects, activeStyleObject, productInfo} ) => {

const container = document.createElement("div");
const root = createRoot(container);
root.render(<div></div>);

afterEach(cleanup);

// const QMenu = ({ stock, size, selectQuantity, stockId, noItems }) => {

it("should always exist", () => {
  const { getByTestId } = render(
    <Price
      size={"XS"}
      stock={{
        123456: [
          { quantity: 10, size: "XS" },
          { quantity: 10, size: "XS" },
          { quantity: 10, size: "XS" },
        ],
      }}></Price>
  );
  const k = getByTestId("q-menu");
  expect(k).not.toBe(null);
  expect(k);
});
