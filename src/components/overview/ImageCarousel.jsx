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
}) => {
  return (
    <div className="overview-image-container">
      <img src={createCloudinaryDisplayURL(image)}></img>
      <ThumbnailContainer
        setActiveThumbnailIndex={setActiveThumbnailIndex}
        photos={photoObjects}
        activeThumbnailIndex={activeThumbnailIndex}></ThumbnailContainer>
      <ExpandedProductInfo
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
