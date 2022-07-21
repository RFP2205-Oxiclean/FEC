import React, { useState, useEffect, useRef } from "react";
import { createCloudinaryDisplayURL } from "../../services/Cloudinary.js";
import ThumbnailContainer from "./ThumbnailContainer.jsx";
import ExpandedProductInfo from "./ExpandedProductInfo.jsx";
import CollapseButton from "./CollapseButton.jsx";
import MagnifyingGlass from "./MagnifyingGlass.jsx";

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
  magnified,
  collapsePanel,
  expanded,
  setMagnified,
  setCollapsePanel,
  setExpanded,
  setAddToCartPrompt,
}) => {
  return (
    <div className={expanded ? "overview-image-container-minus" : "overview-image-container"} data-testid="image-carousel">
      <MagnifyingGlass
        decrementThumbnailIndex={decrementThumbnailIndex}
        setMagnified={setMagnified}
        magnified={magnified}
        setCollapsePanel={setCollapsePanel}
        collapsePanel={collapsePanel}
        expanded={expanded}
        setExpanded={setExpanded}
        image={createCloudinaryDisplayURL(image)}></MagnifyingGlass>
      <ThumbnailContainer
        decrementThumbnailIndex={decrementThumbnailIndex}
        magnified={magnified}
        collapsePanel={collapsePanel}
        expanded={expanded}
        setActiveThumbnailIndex={setActiveThumbnailIndex}
        photos={photoObjects}
        activeThumbnailIndex={activeThumbnailIndex}></ThumbnailContainer>
      <ExpandedProductInfo
        setAddToCartPrompt={setAddToCartPrompt}
        magnified={magnified}
        expanded={expanded}
        collapsePanel={collapsePanel}
        setCollapsePanel={setCollapsePanel}
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
      <CollapseButton
        collapsePanel={collapsePanel}
        expanded={expanded}
        setIsHiding={() => {
          setCollapsePanel(!collapsePanel);
        }}></CollapseButton>
    </div>
  );
};

export default ImageCarousel;
