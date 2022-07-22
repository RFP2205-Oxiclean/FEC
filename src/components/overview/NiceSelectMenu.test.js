/** @jest-environment jsdom */

import React from "react";
import { createRoot } from "react-dom/client";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import NiceSelectMenu from "./NiceSelectMenu.jsx";

describe("", () => {
  it("should exist", () => {
    const { getByTestId } = render(
      <NiceSelectMenu
        activeStock={{}}
        open={open}
        sizes={["XS"]}
        isOpen={false}
        setDefaultValueSize={() => {}}
        defaultValue={"Select a Size!"}></NiceSelectMenu>
    );

    expect(getByTestId("select-menu")).toBeTruthy();
  });

  it("should display 'Select a Size!' with available sizes", () => {
    const { getByTestId } = render(
      <NiceSelectMenu
        activeStock={{}}
        open={open}
        sizes={[]}
        isOpen={true}
        setDefaultValueSize={() => {}}
        defaultValue={"Select a Size!"}></NiceSelectMenu>
    );
    expect(getByTestId("select-menu")).toHaveTextContent("Select a Size!");
  });

  it("should display 'Out of Stock!' with available sizes", () => {
    const { getByTestId } = render(
      <NiceSelectMenu
        activeStock={{}}
        open={open}
        sizes={[]}
        isOpen={true}
        setDefaultValueSize={() => {}}
        defaultValue={"Out of Stock!"}></NiceSelectMenu>
    );
    expect(getByTestId("select-menu")).toHaveTextContent("Out of Stock!");
  });

  it("should display 'Out of Stock!' with available sizes", () => {
    const { getByTestId } = render(
      <NiceSelectMenu
        activeStock={{}}
        open={open}
        sizes={["XS"]}
        isOpen={false}
        setDefaultValueSize={() => {}}
        defaultValue={"Out of Stock!"}></NiceSelectMenu>
    );
    expect(getByTestId("select-menu")).toHaveTextContent("Out of Stock!");
  });
});
// it("should display 'Select a Size' with available sizes", () => {
//   const { getbyTestId } = render(<NiceSelectMenu></NiceSelectMenu>);
// });

// it("should display 'Out of Stock' with null or 0 quantities", () => {
//   const { getbyTestId } = render(<NiceSelectMenu></NiceSelectMenu>);
// });
