import React, { useState, useEffect } from "react";
import CollapseButton from "./CollapseButton.jsx";
import StarRatingStatic from "../commonComponents/StarRatingStatic.jsx";
import { StarRatingStatic2 } from "../commonComponents/StarRatingStatic.jsx";
import Price from "./Price.jsx";
import StylesContainer from "./StylesContainer.jsx";
import PurchaseInfo from "./PurchaseInfo.jsx";

const ExpandedProductInfo = ({
  setBag,
  productInfo,
  styleInfo,
  styleObjects,
  activeDisplayIndex,
  setHoverIndex,
  setActiveDisplayIndex,
  stock,
  end,
  activeThumbnailIndex,
  incrementThumbnailIndex,
  rating,
  collapsePanel,
  setCollapsePanel,
  magnified,
  setAddToCartPrompt,
  reviewListLength,
  activeStock,
  setActiveStockUnitId,
  activeStockUnitId,
  bag,
}) => {
  let [isOpen, setSizeOpen] = useState(false);

  return (
    <div
      onClick={() => {
        setSizeOpen(false);
      }}
      data-testid="collapse-and-info-container"
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
        {reviewListLength !== 0 ? (
          <div style={{ display: "flex", marginTop: "15px" }} className="overview-stars-container">
            <StarRatingStatic2 rating={rating}></StarRatingStatic2>
            <a
              href="#top-of-reviews"
              style={{
                textUnderlineOffset: "1px",
                color: "rgb(92 92 211)",
                marginLeft: "5px",
                marginTop: "auto",
                textAlign: "center",
                textOverflow: "visible",
              }}>
              Read All Reviews ({reviewListLength})
            </a>
          </div>
        ) : (
          <div></div>
        )}

        <div className="overview-category">{productInfo?.category}</div>
        <div className="overview-expanded-product-info">
          <Price activeStyle={styleObjects[activeDisplayIndex]} styleInfo={styleInfo}></Price>
          <span className="overview-expanded-product-info-name">{productInfo.name}</span>
        </div>
        <div style={{ textAlign: "center", justifyContent: "center", maxHeight: "10%" }}>
          <span className="overview-expanded-product-info-style">{styleObjects[activeDisplayIndex].name}</span>
        </div>
        <StylesContainer
          setActiveDisplayIndex={setActiveDisplayIndex}
          setHoverIndex={setHoverIndex}
          activeDisplayIndex={activeDisplayIndex}
          styleObjects={styleObjects}></StylesContainer>
        <PurchaseInfo
          bag={bag}
          setBag={setBag}
          isOpen={isOpen}
          setSizeOpen={setSizeOpen}
          activeStockUnitId={activeStockUnitId}
          setActiveStockUnitId={setActiveStockUnitId}
          activeStock={activeStock}
          setAddToCartPrompt={setAddToCartPrompt}
          styleInfo={styleInfo}
          stock={stock[styleObjects[activeDisplayIndex].style_id]}
          activeStyle={styleObjects[activeDisplayIndex]}></PurchaseInfo>
      </div>
    </div>
  );
};

export default ExpandedProductInfo;
