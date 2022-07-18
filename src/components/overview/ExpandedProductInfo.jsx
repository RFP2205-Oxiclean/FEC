import React, { useState, useEffect } from "react";
import CollapseButton from "./CollapseButton.jsx";
import StarRatingStatic from "../commonComponents/StarRatingStatic.jsx";
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
}) => {
  let [isHiding, setIsHiding] = useState(false);
  let [isShaking, setIsShaking] = useState(false);

  let toggleShakeCart = function () {
    console.log("shaking");
    let x = isShaking;
    if (!isShaking) {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 900);
    }
  };

  console.log(end, activeThumbnailIndex);

  return (
    <div className="collapse-and-info-container">
      <div className="inner-div">
        <CollapseButton isHiding={isHiding} setIsHiding={setIsHiding}></CollapseButton>
        <div className={isHiding ? "slide-panel" : "unslide-panel"}>
          <button
            onClick={() => {
              incrementThumbnailIndex();
            }}
            style={
              end === activeThumbnailIndex
                ? { visibility: "hidden", position: "absolute" }
                : { position: "absolute", top: "50%", left: "0", marginLeft: "-60px" }
            }>
            Right
          </button>
          <div className={"overview-expanded-product-panel"}>
            <div>
              <StarRatingStatic rating={5}></StarRatingStatic>
              <span>Read All Reviews</span>
            </div>
            <div className="overview-category">
              {productInfo?.category}
              <div style={isShaking ? { visibility: "hidden" } : { marginLeft: "auto", display: "flex" }}>
                <i className="fa-solid fa-cart-arrow-down"></i>
              </div>
              <div style={!isShaking ? { visibility: "hidden", position: "absolute", right: "0" } : { position: "absolute", right: "0" }}>
                <i className="fa-solid fa-cart-arrow-down fa-shake"></i>
              </div>
            </div>
            <div className="overview-expanded-product-info">
              <Price styleInfo={styleInfo}></Price>
              <span className="overview-expanded-product-info-name">{productInfo.name}</span>
            </div>
            <div style={{ textAlign: "center", justifyContent: "center", minHeight: "9%" }}>
              <span className="overview-expanded-product-info-style">{styleInfo.name}</span>
            </div>
            <StylesContainer
              setActiveDisplayIndex={setActiveDisplayIndex}
              setHoverIndex={setHoverIndex}
              activeDisplayIndex={activeDisplayIndex}
              styleObjects={styleObjects}></StylesContainer>
            <PurchaseInfo
              toggleShakeCart={toggleShakeCart}
              handleAddToCart={handleAddToCart}
              stock={stock[styleObjects[activeDisplayIndex].style_id]}
              activeStyle={styleObjects[activeDisplayIndex]}></PurchaseInfo>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedProductInfo;
