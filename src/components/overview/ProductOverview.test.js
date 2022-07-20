/** @jest-environment jsdom */

import React from "react";
import { createRoot } from "react-dom/client";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import ProductOverview from "./ProductOverview.jsx";
import { createCloudinaryDisplayURL } from "../../services/Cloudinary.js";

// const ImageCarousel = ( {product_id, styleClickHandler, styleObjects, activeStyleObject, productInfo} ) => {

const container = document.createElement("div");
const root = createRoot(container);
root.render(<div></div>);

it("should change data based on different input", () => {
  render(<ProductOverview product_id={40344}></ProductOverview>);

  const z = getByTestId("master-state-change");
  fireEvent.click(z);

  expect(z).not.toBe(null);
});

it("should wait for mount lifecycle", async () => {
  render(<ProductOverview product_id={40344}></ProductOverview>);
});
