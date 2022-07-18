import React, { useState, useEffect } from "react";
import { createCloudinaryThumbnailURL } from "/src/services/Cloudinary.js";

const OverlayThumbnail = ({ image, active, setActiveThumbnailIndex, trueIndex }) => {
  let handleClick = function () {
    setActiveThumbnailIndex(trueIndex);
  };

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className={active ? "overview-overlay-thumbnail-active" : "overview-overlay-thumbnail"}>
      <img height="74px" width="74px" src={createCloudinaryThumbnailURL(image)}></img>
    </div>
  );
};

export default OverlayThumbnail;
