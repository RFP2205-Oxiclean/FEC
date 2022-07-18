import React, { useState, useEffect } from "react";
import { createCloudinaryDisplayURL } from "/src/services/Cloudinary.js";
import ThumbnailContainer from "./ThumbnailContainer.jsx";

const ImageCarousel = ({ image, photoObjects, setActiveThumbnailIndex }) => {
  return (
    <div className="overview-image-container">
      <img src={createCloudinaryDisplayURL(image)}></img>
      <ThumbnailContainer setActiveThumbnailIndex={setActiveThumbnailIndex} photos={photoObjects}></ThumbnailContainer>
    </div>
  );
};

export default ImageCarousel;
