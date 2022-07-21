import React, { useState, useEffect } from "react";
import { createCloudinaryThumbnailURL } from "../../services/Cloudinary.js";

const OverlayThumbnail = ({ image, active, setActiveThumbnailIndex, trueIndex, backup }) => {
  let [defaultImage, setDefaultImage] = useState(createCloudinaryThumbnailURL(image));

  let handleClick = function () {
    setActiveThumbnailIndex(trueIndex);
  };

  let handleError = function () {
    if (defaultImage !== createCloudinaryThumbnailURL(backup)) {
      setDefaultImage(createCloudinaryThumbnailURL(backup));
    }
  };

  if (active) {
    return (
      <div
        onClick={() => {
          handleClick();
        }}
        data-testid="overview-overlay-thumbnail-active"
        className={active ? "overview-overlay-thumbnail-active" : "overview-overlay-thumbnail"}>
        <img onError={handleError()} height="60" width="60" src={defaultImage}></img>
      </div>
    );
  }

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      data-testid="overview-overlay-thumbnail"
      className="overview-overlay-thumbnail">
      <img onError={handleError()} height="60" width="60" src={defaultImage}></img>
    </div>
  );
};

export default OverlayThumbnail;
