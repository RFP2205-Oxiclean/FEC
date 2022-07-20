import React, { useState, useEffect } from "react";
import { createCloudinaryThumbnailURL } from "/src/services/Cloudinary.js";

const StyleObjectThumbnail = ({ styleObject, activeDisplayIndex, index, setHoverIndex, setActiveDisplayIndex }) => {
  let handleClick = function () {
    setActiveDisplayIndex(index);
  };

  if (index === activeDisplayIndex) {
    return (
      <div data-testid="style-object'thumbnail-active" className="style-object-thumbnail-container">
        <div
          className="style-object-thumbnail-active"
          onMouseEnter={() => {
            setHoverIndex(index);
          }}
          onMouseLeave={() => {
            setHoverIndex(null);
          }}
          onClick={() => {
            handleClick();
          }}>
          <div style={{ position: "relative" }}>
            <i
              className="checkmark"
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                zIndex: "3",
                background: "white",
                color: "green",
                marginTop: "-3px",
                borderRadius: "50%",
              }}
              className="fa-solid fa-square-check"></i>
            <img src={createCloudinaryThumbnailURL(styleObject?.photos[0].thumbnail_url)}></img>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="style-object-thumbnail-container">
      <div
        className="style-object-thumbnail"
        onMouseEnter={() => {
          setHoverIndex(index);
        }}
        onMouseLeave={() => {
          setHoverIndex(null);
        }}
        onClick={() => {
          handleClick();
        }}>
        <img src={createCloudinaryThumbnailURL(styleObject?.photos[0].thumbnail_url)}></img>
      </div>
    </div>
  );
};

export default StyleObjectThumbnail;
