import React, { useState, useEffect } from "react";
import { createCloudinaryThumbnailURL } from "../../services/Cloudinary.js";

const OverlayThumbnail = ({ image, active, setActiveThumbnailIndex, trueIndex, backup, collapsePanel }) => {
  let [defaultImage, setDefaultImage] = useState(createCloudinaryThumbnailURL(image));

  let handleClick = function () {
    setActiveThumbnailIndex(trueIndex);
  };

  let handleError = function () {
    if (defaultImage !== createCloudinaryThumbnailURL(backup)) {
      setDefaultImage(createCloudinaryThumbnailURL(backup));
    }
  };

  if (collapsePanel) {
    if (active) {
      return (
        <div className="overview-small-icon-active">
          <span style={{ height: "30px", width: "30px", margin: "auto" }}></span>
        </div>
      );
    } else {
      return (
        <div
          onClick={() => {
            handleClick();
          }}
          className="overview-small-icon">
          <span style={{ margin: "auto" }}></span>
        </div>
      );
    }
  }

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
