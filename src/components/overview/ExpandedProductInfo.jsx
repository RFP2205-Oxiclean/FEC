import React, { useState, useEffect } from "react";
import CollapseButton from "./CollapseButton.jsx";
import StarRatingStatic from "../commonComponents/StarRatingStatic.jsx";
import { StarRatingStatic2 } from "../commonComponents/StarRatingStatic.jsx";
import Price from "./Price.jsx";
import StylesContainer from "./StylesContainer.jsx";
import PurchaseInfo from "./PurchaseInfo.jsx";

const ExpandedProductInfo = ({
  productInfo,
  styleInfo,
  styleObjects,
  activeDisplayIndex,
  setHoverIndex,
  setActiveDisplayIndex,
  stock,
  handleAddToCart,
  end,
  activeThumbnailIndex,
  incrementThumbnailIndex,
  rating,
  collapsePanel,
  setCollapsePanel,
  magnified,
}) => {
  let [sizeOpen, setSizeOpen] = useState(false);
  let [selectedSize, setSelectedSize] = useState(null);
  let [selectedQuantity, setSelectedQuantity] = useState(null);
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-testid="collapse-and-info-container"
      onMouseLeave={() => {
        if (sizeOpen) {
          setSizeOpen(false);
        }
      }}
      className={collapsePanel ? "collapse-and-info-container-slide-in" : "collapse-and-info-container"}>
      <div
        className={magnified ? "overview-hidden" : "scroll-right"}
        onClick={() => {
          console.log(magnified);
          incrementThumbnailIndex();
        }}
        style={
          end === activeThumbnailIndex || magnified
            ? { visibility: "hidden", position: "absolute" }
            : {
                position: "absolute",
                display: "flex",
                top: "50%",
                height: "35px",
                width: "35px",
                overflow: "visible",
                left: "0",
                marginLeft: "-50px",
                fontSize: "40px",
                borderRadius: "20%",
                alignItems: "center",
              }
        }>
        <i style={{ color: "black", opacity: ".7" }} className="fa-solid fa-angles-right"></i>
      </div>
      <div className={"overview-expanded-product-panel"}>
        <div style={{ display: "flex", marginTop: "15px" }} className="overview-stars-container">
          <StarRatingStatic2 rating={rating}></StarRatingStatic2>
          <a href="#top-of-reviews" style={{ color: "rgb(92 92 211)", fontWeight: "bold", marginLeft: "10px", marginTop: "auto" }}>
            Read All Reviews
          </a>
          {/* <a id="facebook_ads_example">This is the Facebook ad example I want to link to.</a> */}
        </div>
        <div className="overview-category">{productInfo?.category}</div>
        <div className="overview-expanded-product-info">
          <Price activeStyle={styleObjects[activeDisplayIndex]} styleInfo={styleInfo}></Price>
          <span className="overview-expanded-product-info-name">{productInfo.name}</span>
        </div>
        <div style={{ textAlign: "center", justifyContent: "center", minHeight: "9%" }}>
          <span className="overview-expanded-product-info-style">{styleObjects[activeDisplayIndex].name}</span>
        </div>
        <StylesContainer
          setActiveDisplayIndex={setActiveDisplayIndex}
          setHoverIndex={setHoverIndex}
          activeDisplayIndex={activeDisplayIndex}
          styleObjects={styleObjects}></StylesContainer>
        <PurchaseInfo
          setSizeOpen={setSizeOpen}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          isOpen={sizeOpen}
          styleInfo={styleInfo}
          handleAddToCart={handleAddToCart}
          stock={stock[styleObjects[activeDisplayIndex].style_id]}
          activeStyle={styleObjects[activeDisplayIndex]}></PurchaseInfo>
      </div>
    </div>
  );
};

export default ExpandedProductInfo;
