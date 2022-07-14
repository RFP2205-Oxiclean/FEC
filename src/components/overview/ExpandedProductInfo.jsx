import React, {useState, useEffect} from 'react';
import StyleObjectThumbnail from './StyleObjectThumbnail.jsx';
import Price from './Price.jsx';
import CollapsePanelButton from './CollapsePanelButton.jsx';

const ExpandedProductInfo = ( {resetActiveImageIndex, styleClickHandler, productInfo, styleObjects} ) => {

  let [viewIndex, setViewIndex] = useState(0);
  let [hoverInfo, setHoverInfo] = useState({name: '', original_price: '', sale_price: ''})
  let [onHover, setOnHover] = useState(false)
  let [isHidden, setIsHidden] = useState(false);

  let showDifferentPrice = function() {
    if (onHover && hoverInfo.sale_price) {
      return hoverInfo.sale_price;
    } else if (onHover && hoverInfo.original_price !== styleObjects[viewIndex]?.original_price) {
      return hoverInfo?.original_price
    }
  }
  if (isHidden) {
    return <div>
      <CollapsePanelButton isHidden={isHidden} setIsHidden={setIsHidden}></CollapsePanelButton>
    </div>
  }

  return <div style={{display: "flex"}}>
    <CollapsePanelButton isHidden={isHidden} setIsHidden={setIsHidden}></CollapsePanelButton>
    <div className="overview-expanded-product-panel">
    <div className="stars-container">STAR STAR STAR</div>
    <div className="overview-category">{productInfo.category}</div>
    {/* <div><span style={{fontWeight: "bold", fontSize: "30px"}}>{styleObjects[viewIndex]?.original_price}</span></div> */}
    <div className="overview-expanded-product-info">
      <Price
        currentStyle={styleObjects[viewIndex]}
        hoverInfo={hoverInfo}
        onHover={onHover}>
       </Price>
      <span className="overview-expanded-product-info-name">{productInfo.name}</span>
      <span className="overview-expanded-product-info-style">{onHover ? hoverInfo.name : styleObjects[viewIndex]?.name}</span>
    </div>
    <div className="overview-styles-container">
    {styleObjects.length ? styleObjects?.map(function(styleObject, i) {
      return <StyleObjectThumbnail
        setViewIndex={setViewIndex}
        resetActiveImageIndex={resetActiveImageIndex}
        styleClickHandler={styleClickHandler}
        styleObject={styleObject}
        key={styleObject.style_id}
        index={i}
        setHoverInfo={setHoverInfo}
        setOnHover={setOnHover}
        viewIndex={viewIndex}
        >
       </StyleObjectThumbnail>
    }) : <div></div>}
    </div>
    <div className="overview-purchase-info"></div>
  </div>
  </div>
}




export default ExpandedProductInfo;