import React from "react";

const Price = ({ styleInfo }) => {
  if (styleInfo.sale_price) {
    return (
      <div className="overview-expanded-product-info-prices">
        <span className="overview-expanded-product-info-price-struck">{styleInfo.original_price}</span>
        <span className="overview-expanded-product-info-different-price">{styleInfo.sale_price}</span>
      </div>
    );
  } else {
    return (
      <div className="overview-expanded-product-info-prices">
        <span>{styleInfo.original_price}</span>
      </div>
    );
  }
};

export default Price;
