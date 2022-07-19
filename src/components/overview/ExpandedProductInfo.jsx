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

  return (
    <div className="collapse-and-info-container">
      <div className="inner-div">
        <CollapseButton isHiding={isHiding} setIsHiding={setIsHiding}></CollapseButton>
        <div className={isHiding ? "slide-panel" : "unslide-panel"}>
          <div
            onClick={() => {
              incrementThumbnailIndex();
            }}
            style={
              end === activeThumbnailIndex
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
              <StarRatingStatic2 rating={5}></StarRatingStatic2>
              <a href="#top-of-reviews" style={{ color: "rgb(92 92 211)", fontWeight: "bold", marginLeft: "10px", marginTop: "auto" }}>
                Read All Reviews
              </a>
              {/* <a id="facebook_ads_example">This is the Facebook ad example I want to link to.</a> */}
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
