/** @jest-environment jsdom */

import React from "react";
import { createRoot } from "react-dom/client";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import ImageCarousel from "components/overview/ImageCarousel.jsx";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { createCloudinaryDisplayURL } from "services/Cloudinary.js";

const container = document.createElement("div");
const root = createRoot(container);
root.render(<div></div>);

afterEach(cleanup);

it("should test text is 'Collapse' ", () => {
  const { getByTestId } = render(<ImageCarousel image={"someFakeSite.com"}></ImageCarousel>);

  expect(getByTestId("display-image")).toHaveAttribute("src");
});

// it("uses correct src", async () => {
//   const { getByAltText } = await render(<MyComponent />);

//   const image = getByAltText("the_alt_text");

//   expect(image.src).toContain("the_url");
//   // or
//   expect(image).toHaveAttribute("src", "the_url");
// });

// it("should test Collapse has an onClick event", () => {
//   const closePanelSpy = jest.fn();

//   const { getByTestId } = render(<CollapseButton setIsHiding={closePanelSpy}></CollapseButton>);

//   fireEvent.click(getByTestId("collapseButton"));

//   expect(closePanelSpy).toHaveBeenCalled();
// });
