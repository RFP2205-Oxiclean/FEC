/** @jest-environment jsdom */

import React from "react";
import { createRoot } from "react-dom/client";
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import Price from "./Price.jsx";
import { createCloudinaryDisplayURL } from "../../services/Cloudinary.js";
// const ImageCarousel = ( {product_id, styleClickHandler, styleObjects, activeStyleObject, productInfo} ) => {

const container = document.createElement("div");
const root = createRoot(container);
root.render(<div></div>);

afterEach(cleanup);

it("should test", () => {
  const { getByTestId } = render(<Price styleInfo={{ sale_price: "$20" }}></Price>);
  expect(getByTestId("price1")).not.toBe(null);
});

it("should have a sale price of have a span element for price with text content of '$20'", () => {
  const { getByTestId } = render(<Price styleInfo={{ sale_price: "$10", original_price: "$20" }}></Price>);
  const x = getByTestId("original-price-struck");
  const y = getByTestId("sale-price");

  expect(getByTestId("price1")).toContainElement(x);
  expect(getByTestId("sale-price")).toHaveTextContent("$10");
});

it("should render a different element if there is no sale price", () => {
  const { getByTestId } = render(<Price styleInfo={{ original_price: "$20" }}></Price>);
  const x = getByTestId("original-price");

  expect(x).toBeInTheDocument();
});
