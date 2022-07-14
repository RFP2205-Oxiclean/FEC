/** @jest-environment jsdom */
import React from "react";
import { createRoot } from "react-dom/client";
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import ImageCarousel from "../src/components/overview/ImageCarousel.jsx";
import { createCloudinaryDisplayURL } from "../src/services/Cloudinary.js";
// const ImageCarousel = ( {product_id, styleClickHandler, styleObjects, activeStyleObject, productInfo} ) => {

const container = document.createElement("div");
const root = createRoot(container);
root.render(<div></div>);

afterEach(cleanup);
it("should test", () => {
  const { getByTestId } = render(<ImageCarousel></ImageCarousel>);
  expect(getByTestId("imageCarousel")).toHaveStyle(`width: 1200`);
});

it("matches snapshot", () => {
  const tree = renderer
    .create(<CollapsePanelButton isHidden={true}></CollapsePanelButton>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
