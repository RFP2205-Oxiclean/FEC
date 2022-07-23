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
  reviewListLength,
  activeStock,
  activeStockUnitId,
  setActiveStockUnitId,
  setBag,
  bag,
}) => {
  // let [collapsePanel, setCollapsePanel] = useState(false);

  if (image === null || image === undefined) {
    image = "https://http.cat/404";
  } else {
    image = createCloudinaryDisplayURL(image);
  }

  let callHiding = function (callback) {
    callback();
  };

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
        image={image}></MagnifyingGlass>
      <ThumbnailContainer
        decrementThumbnailIndex={decrementThumbnailIndex}
        magnified={magnified}
        collapsePanel={collapsePanel}
        expanded={expanded}
        setActiveThumbnailIndex={setActiveThumbnailIndex}
        photos={photoObjects}
        activeThumbnailIndex={activeThumbnailIndex}></ThumbnailContainer>
      <ExpandedProductInfo
        bag={bag}
        setBag={setBag}
        activeStockUnitId={activeStockUnitId}
        setActiveStockUnitId={setActiveStockUnitId}
        activeStock={activeStock}
        reviewListLength={reviewListLength}
        setAddToCartPrompt={setAddToCartPrompt}
        magnified={magnified}
        expanded={expanded}
        collapsePanel={collapsePanel}
        setCollapsePanel={setCollapsePanel}
        rating={rating}
        incrementThumbnailIndex={incrementThumbnailIndex}
        activeThumbnailIndex={activeThumbnailIndex}
        end={photoObjects.length - 1}
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
