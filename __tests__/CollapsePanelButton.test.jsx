/** @jest-environment jsdom */
import React from "react";
import { createRoot } from "react-dom/client";
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import CollapsePanelButton from "../src/components/overview/CollapsePanelButton.jsx";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

const container = document.createElement("div");
const root = createRoot(container);
root.render(<div></div>);

afterEach(cleanup);
it("should test", () => {
  const { getByTestId } = render(<CollapsePanelButton isHidden={true}></CollapsePanelButton>);
  expect(getByTestId("collapseButton")).toHaveTextContent("Collapse");
});

it("matches snapshot", () => {
  const tree = renderer.create(<CollapsePanelButton isHidden={true}></CollapsePanelButton>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", () => {
  const tree = renderer.create(<CollapsePanelButton isHidden={false}></CollapsePanelButton>).toJSON();
  expect(tree).toMatchSnapshot();
});
