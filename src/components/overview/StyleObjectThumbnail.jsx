import React, { useState, useEffect } from "react";
import { createCloudinaryThumbnailURL } from "/src/services/Cloudinary.js";

const StyleObjectThumbnail = ({ styleObject, activeDisplayIndex, index, setHoverIndex, setActiveDisplayIndex }) => {
  let handleClick = function () {
    setActiveDisplayIndex(index);
  };

  return (
    <div className="style-object-thumbnail-container">
      <div
        className={activeDisplayIndex === index ? "style-object-thumbnail-active" : "style-object-thumbnail"}
        onMouseEnter={() => {
          console.log(index);
          setHoverIndex(index);
        }}
        onMouseLeave={() => {
          setHoverIndex(null);
        }}
        onClick={() => {
          handleClick();
        }}>
        <img style={{ borderRadius: "50%" }} src={createCloudinaryThumbnailURL(styleObject?.photos[0].thumbnail_url)}></img>
      </div>
    </div>
  );
};

export default StyleObjectThumbnail;
