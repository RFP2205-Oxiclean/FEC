/** @jest-environment jsdom */

import React from "react";
import { createRoot } from "react-dom/client";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import ProductOverview from "./ProductOverview.jsx";
import { createCloudinaryDisplayURL } from "../../services/Cloudinary.js";
import LifecycleTest from "./LifecycleTest.jsx";

// const ImageCarousel = ( {product_id, styleClickHandler, styleObjects, activeStyleObject, productInfo} ) => {

const container = document.createElement("div");
const root = createRoot(container);
root.render(<div></div>);

it("should change data based on different input", () => {
  const { getByTestId } = render(<ProductOverview></ProductOverview>);

  const k = getByTestId("product-overview");
  const z = getByTestId("master-state-change");

  expect(z).not.toBe(null);
});
