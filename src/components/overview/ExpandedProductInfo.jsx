import React, { useState, useEffect } from "react";
import CollapseButton from "./CollapseButton.jsx";
import StarRatingStatic from "../commonComponents/StarRatingStatic.jsx";
import Price from "./Price.jsx";
import StylesContainer from "./StylesContainer.jsx";

const ExpandedProductInfo = ({ productInfo, styleInfo, styleObjects, activeDisplayIndex, setHoverIndex, setActiveDisplayIndex }) => {
  let [isHiding, setIsHiding] = useState(false);

  return (
    <div className="collapse-and-info-container">
      <div className="inner-div">
        <CollapseButton isHiding={isHiding} setIsHiding={setIsHiding}></CollapseButton>
        <div className={isHiding ? "slide-panel" : "unslide-panel"}>
          <div className={"overview-expanded-product-panel"}>
            <StarRatingStatic rating={5}></StarRatingStatic>
            <span>Read All Reviews</span>
            <div className="overview-category">{productInfo?.category}</div>
            <div className="overview-expanded-product-info">
              <Price styleInfo={styleInfo}></Price>
              <span className="overview-expanded-product-info-name">{productInfo.name}</span>
            </div>
            <div style={{ textAlign: "center", justifyContent: "center", minHeight: "12%" }}>
              <span className="overview-expanded-product-info-style">{styleInfo.name}</span>
            </div>
            <StylesContainer
              setActiveDisplayIndex={setActiveDisplayIndex}
              setHoverIndex={setHoverIndex}
              activeDisplayIndex={activeDisplayIndex}
              styleObjects={styleObjects}></StylesContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedProductInfo;
