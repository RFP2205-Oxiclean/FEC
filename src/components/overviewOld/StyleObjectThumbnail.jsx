import React, { useState, useEffect } from "react";
import { createCloudinaryThumbnailURL, createCloudinaryDisplayURL } from "/src/services/Cloudinary.js";
import axios from "axios";

const StyleObjectThumbnail = ({ viewIndex, setHoverInfo, setOnHover, setViewIndex, setActiveImageIndex, index, styleClickHandler, styleObject }) => {
  let handleClick = function () {
    setViewIndex(index);
    styleClickHandler(index);
    setActiveImageIndex(0);
  };

  let style = { position: "absolute", top: "0", right: "0", zIndex: "3", background: "white", color: "green" };

  useEffect(() => {
    console.log("changing style");
    if (viewIndex !== index) {
      style = { ...style, display: "none" };
    }
  }, [viewIndex]);

  return (
    <div className="style-object-thumbnail-container">
      <div
        style={{ position: "relative" }}
        onClick={() => {
          handleClick();
        }}
        className={viewIndex === index ? "style-object-thumbnail-active" : "style-object-thumbnail"}
        onMouseEnter={() => {
          styleClickHandler(index);
          setOnHover(true);
          setHoverInfo({ sale_price: styleObject.sale_price, original_price: styleObject.original_price, name: styleObject.name });
        }}
        onMouseLeave={() => {
          styleClickHandler(viewIndex);
          setOnHover(false);
        }}>
        <i style={style} class="fa-solid fa-square-check"></i>
        <img style={{ borderRadius: "50%" }} src={createCloudinaryThumbnailURL(styleObject?.photos[0].thumbnail_url)}></img>
      </div>
    </div>
  );
};

export default StyleObjectThumbnail;
