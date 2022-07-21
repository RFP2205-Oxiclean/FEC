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
  const { getbyTestId } = render(<ProductOverview product_id={40344}></ProductOverview>);

  let tree = component.toMatchSnapshot();

  renderer(act());
});

it("imageCarousel should contain a ", async () => {
  const { getByTestId } = render(<ProductOverview product_id={null}></ProductOverview>);

  let tree = component.toJson();
  expect(tree).toMatchSnapshot();
});

// it("should render an imageCarousel with information after mounting", () => {
//   render(
//     <ProductOverview>
//       <ImageCarouseL></ImageCarouseL>
//     </ProductOverview>
//   );
// });
