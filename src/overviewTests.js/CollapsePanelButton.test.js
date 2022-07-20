/** @jest-environment jsdom */

import React from "react";
import { createRoot } from "react-dom/client";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import CollapseButton from "components/overview/CollapseButton.jsx";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

const container = document.createElement("div");
const root = createRoot(container);
root.render(<div></div>);

afterEach(cleanup);

it("should test text is 'Collapse' ", () => {
  const { getByTestId } = render(<CollapseButton></CollapseButton>);
  expect(getByTestId("collapseButton")).toHaveTextContent("Collapse");
});

it("should test Collapse has an onClick event", () => {
  const closePanelSpy = jest.fn();

  const { getByTestId } = render(<CollapseButton setIsHiding={closePanelSpy}></CollapseButton>);

  fireEvent.click(getByTestId("collapseButton"));

  expect(closePanelSpy).toHaveBeenCalled();
});
