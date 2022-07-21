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
}) => {
  let [collapsePanel, setCollapsePanel] = useState(false);
  let [expanded, setExpanded] = useState(false);
  const [enabled, setEnabled] = useState(false);
  let callHiding = function (callback) {
    callback();
  };

  useEffect(() => {
    if (collapsePanel) {
      setExpanded(false);
    }
  }, [collapsePanel]);

  useEffect(() => {
    console.log("is called whenever display image changes");
  }, [activeDisplayIndex, activeThumbnailIndex]);

  return (
    <div className={expanded ? "overview-image-container-minus" : "overview-image-container"} data-testid="image-carousel">
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
      <MagnifyingGlass
        setEnabled={setEnabled}
        enabled={enabled}
        setCollapsePanel={setCollapsePanel}
        collapsePanel={collapsePanel}
        expanded={expanded}
        setExpanded={setExpanded}
        image={createCloudinaryDisplayURL(image)}></MagnifyingGlass>
      <ThumbnailContainer
        enabled={enabled}
        collapsePanel={collapsePanel}
        expanded={expanded}
        setActiveThumbnailIndex={setActiveThumbnailIndex}
        photos={photoObjects}
        activeThumbnailIndex={activeThumbnailIndex}></ThumbnailContainer>
      <ExpandedProductInfo
        expanded={expanded}
        collapsePanel={collapsePanel}
        setCollapsePanel={setCollapsePanel}
        callHiding={callHiding}
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
        setIsHiding={() => {
          setCollapsePanel(!collapsePanel);
        }}></CollapseButton>
    </div>
  );
};

export default ImageCarousel;
