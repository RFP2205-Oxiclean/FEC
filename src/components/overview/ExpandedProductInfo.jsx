import React, {useState, useEffect} from 'react';

const ExpandedProductInfo = (props) => {

  return <div className="overview-expanded-product-panel">
    <div className="stars-container">STAR STAR STAR</div>
    <div className="overview-category">{props.productInfo.category}</div>
    <div className="overview-expanded-product-info"><span className="overview-expanded-product-info-name">{props.productInfo.name}</span></div>
    <div className="overview-styles-container"></div>
    <div className="overview-purchase-info"></div>
  </div>
}




export default ExpandedProductInfo;