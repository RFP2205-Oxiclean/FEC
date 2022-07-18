import React, {useState, useEffect} from 'react';

const Price = ( {onHover, hoverInfo, currentStyle} ) => {

  if (onHover && hoverInfo.sale_price) {
    return <div className="overview-expanded-product-info-prices">
      <span className="overview-expanded-product-info-price-struck">{hoverInfo.original_price}</span>
      <span className="overview-expanded-product-info-different-price">{hoverInfo.sale_price}</span>
    </div>
  } else if (onHover && (hoverInfo.original_price !== currentStyle.original_price || hoverInfo.original_price !== currentStyle.sale_price)) {
    return <div className="overview-expanded-product-info-prices">
      <span>{hoverInfo.original_price}</span>
    </div>
  } else if (currentStyle?.sale_price) {
    return <div className="overview-expanded-product-info-prices">
      <span className="overview-expanded-product-info-price-struck">{currentStyle?.original_price}</span>
      <span className="overview-expanded-product-info-different-price">{currentStyle?.sale_price}</span>
    </div>
  } else {
    return <div className="overview-expanded-product-info-prices">
      <span>{currentStyle?.original_price}</span>
    </div>
  }

}

export default Price;



{/* <div style={{marginRight: "auto"}}>
      <span className={(hoverInfo.sale_price !== null && onHover) || (hoverInfo.original_price !== styleObjects[viewIndex]?.original_price && onHover)
         ? "overview-expanded-product-info-price-struck" : "overview-expanded-product-info-price"}>
        {styleObjects[viewIndex]?.original_price}</span>
        <span className="overview-expanded-product-info-different-price">{showDifferentPrice()}</span>
      </div>
      <span className="overview-expanded-product-info-name">{productInfo.name}</span>
      <span className="overview-expanded-product-info-style">{onHover ? hoverInfo.name : styleObjects[viewIndex]?.name}</span>
    </div> */}