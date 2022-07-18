import React, { useState, useEffect } from "react";
import { createCloudinaryThumbnailURL, createCloudinaryDisplayURL } from "/src/services/Cloudinary.js";

const OverlayThumbnail = ({ changeActiveThumbnail, activeStyleObject, active, changeImage, index, images }) => {
  let [defaultImage, setDefaultImage] = useState(images?.thumbnail_url);

  let handleError = function () {
    if (defaultImage !== images?.url) {
      setDefaultImage(images?.url);
    }
  };

  let handleClick = function () {
    changeActiveThumbnail(activeStyleObject, index);
    // changeImage(index);
    setActiveCSS(!clicked);
  };

  let [clicked, setActiveCSS] = useState(false);

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className={active ? "overview-overlay-thumbnail-active" : "overview-overlay-thumbnail"}>
      <img onError={handleError()} height="74px" width="74px" src={createCloudinaryThumbnailURL(defaultImage)}></img>
    </div>
  );
};

export default OverlayThumbnail;
