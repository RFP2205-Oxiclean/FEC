import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { getProductById, getProductStylesById } from "../src/controllers.js";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import CollapsePanelButton from "../src/components/overview/CollapsePanelButton.jsx";
import { createRoot } from "react-dom/client";

it("function getProductById returns an object", () => {
  getProductById(40344).then((data) => {
    expect(typeof data).toBe("object");
  });
});

it("function getProductStylesById returns an array", () => {
  getProductStylesById(40344).then((data) => {
    expect(Array.isArray(data)).toBe(true);
  });
});

it("function getProductStylesById returns that contains an object", () => {
  getProductStylesById(40344).then((data) => {
    expect(typeof data[0]).toBe("object");
  });
});

// it("renders a button with a boolean state", () => {
//   // const div = document.createElement("div");
//   render(
//     <CollapsePanelButton
//       isHidden={true}
//       setIsHidden={function () {
//         console.log("hi");
//       }}
//     ></CollapsePanelButton>
//   );

//   expect(getByTestId("collapseButton")).toHaveTextContent("");
// });
