import React, { useState, useEffect } from "react";
import { createCloudinaryThumbnailURL } from "/src/services/Cloudinary.js";

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

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className={active ? "overview-overlay-thumbnail-active" : "overview-overlay-thumbnail"}>
      <img onError={handleError()} height="60" width="60" src={defaultImage}></img>
    </div>
  );
};

export default OverlayThumbnail;
