import React, {useState, useEffect} from 'react';
import StyleObjectThumbnail from './StyleObjectThumbnail.jsx';

const ExpandedProductInfo = ( {resetActiveImageIndex, styleClickHandler, productInfo, styleObjects} ) => {

  let [viewIndex, setViewIndex] = useState(0);
  let [hoverInfo, setHoverInfo] = useState({name: '', original_price: ''})
  let [onHover, setOnHover] = useState(false)

  return <div className="overview-expanded-product-panel">
    <div className="stars-container">STAR STAR STAR</div>
    <div className="overview-category">{productInfo.category}</div>
    <div className="overview-expanded-product-info">
      <span className="overview-expanded-product-info-name">A longer name {productInfo.name}</span>
      <span className="overview-expanded-product-info-style">{onHover ? hoverInfo.name : styleObjects[viewIndex]?.name}</span>
    </div>
    <div className="overview-styles-container">
    {styleObjects.length ? styleObjects?.map(function(styleObject, i) {
      return <StyleObjectThumbnail
        setViewIndex={setViewIndex}
        resetActiveImageIndex={resetActiveImageIndex}
        styleClickHandler={styleClickHandler}
        containerCount={styleObjects.length}
        styleObject={styleObject}
        key={styleObject.style_id}
        index={i}
        setHoverInfo={setHoverInfo}
        setOnHover={setOnHover}
        >
       </StyleObjectThumbnail>
    }) : <div></div>}
    </div>
    <div className="overview-purchase-info"></div>
  </div>
}




export default ExpandedProductInfo;