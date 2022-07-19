import React, { useState, useEffect } from "react";
import { createCloudinaryDisplayURL } from "/src/services/Cloudinary.js";
import ThumbnailContainer from "./ThumbnailContainer.jsx";
import ExpandedProductInfo from "./ExpandedProductInfo.jsx";

const ImageCarousel = ({
  image,
  photoObjects,
  setActiveThumbnailIndex,
  activeThumbnailIndex,
  productInfo,
  styleInfo,
  styleObjects,
  activeDisplayIndex,
  setHoverIndex,
  setActiveDisplayIndex,
  stock,
  handleAddToCart,
  incrementThumbnailIndex,
  decrementThumbnailIndex,
  rating,
}) => {
  return (
    <div className="overview-image-container">
      <button
        onClick={() => {
          decrementThumbnailIndex();
        }}
        style={
          activeThumbnailIndex === 0
            ? { visibility: "hidden", position: "absolute", top: "50%", left: "15%" }
            : { position: "absolute", top: "50%", left: "15%" }
        }
        className="scroll-left">
        Left
      </button>
      <img src={createCloudinaryDisplayURL(image)}></img>
      <ThumbnailContainer
        setActiveThumbnailIndex={setActiveThumbnailIndex}
        photos={photoObjects}
        activeThumbnailIndex={activeThumbnailIndex}></ThumbnailContainer>
      <ExpandedProductInfo
        rating={rating}
        incrementThumbnailIndex={incrementThumbnailIndex}
        activeThumbnailIndex={activeThumbnailIndex}
        end={photoObjects.length - 1}
        handleAddToCart={handleAddToCart}
        stock={stock}
        setActiveDisplayIndex={setActiveDisplayIndex}
        setHoverIndex={setHoverIndex}
        activeDisplayIndex={activeDisplayIndex}
        styleInfo={styleInfo}
        productInfo={productInfo}
        styleObjects={styleObjects}></ExpandedProductInfo>
    </div>
  );
};

export default ImageCarousel;
