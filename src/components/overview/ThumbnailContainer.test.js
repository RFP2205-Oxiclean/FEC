/** @jest-environment jsdom */

import React from "react";
import { createRoot } from "react-dom/client";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import ThumbnailContainer from "./ThumbnailContainer.jsx";
import { createCloudinaryDisplayURL } from "../../services/Cloudinary.js";

let photos = [
  {
    thumbnail_url:
      "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    trueIndex: 0,
  },
  {
    thumbnail_url:
      "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
    trueIndex: 1,
  },
  {
    thumbnail_url:
      "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
    trueIndex: 2,
  },
  {
    thumbnail_url: "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    trueIndex: 3,
  },
  {
    thumbnail_url:
      "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    trueIndex: 4,
  },
  {
    thumbnail_url:
      "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    trueIndex: 5,
  },
];

it("should have an active thumbnail", () => {
  let mySpy = jest.fn();

  const { getByTestId } = render(<ThumbnailContainer activeThumbnailIndex={0} setActiveThumbnailIndex={mySpy} photos={photos}></ThumbnailContainer>);
  let x = getByTestId("thumbnail-container");
  let y = getByTestId("overview-overlay-thumbnail-active");

  expect(getByTestId("thumbnail-container")).toContainElement(y);
});

it("should have an active thumbnail", () => {
  let mySpy = jest.fn();

  const { getByTestId } = render(<ThumbnailContainer activeThumbnailIndex={0} setActiveThumbnailIndex={mySpy} photos={photos}></ThumbnailContainer>);
  let x = getByTestId("thumbnail-container");
  let y = getByTestId("overview-overlay-thumbnail-active");

  expect(photos.length).toBeLessThan(8);
});

it("should move forward and backwards", () => {
  let mySpy = jest.fn();

  const { getByTestId } = render(<ThumbnailContainer activeThumbnailIndex={0} setActiveThumbnailIndex={mySpy} photos={photos}></ThumbnailContainer>);
  const { getByTestId } = render(<ThumbnailIncrement></ThumbnailIncrement>);
  const x = getByTestId("thumbnail-increment");
  const y = getByTestId("thumbnail-decrement");

  fireEvent.click(x);
  fireEvent.click(y);
  expect(mySpy).toHaveBeenCalledTimes(2);
});
