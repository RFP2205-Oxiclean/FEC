import React from "react";

const Price = ({ styleInfo }) => {
  if (styleInfo.sale_price) {
    return (
      <div data-testid="price1" className="overview-expanded-product-info-prices">
        <span data-testid="test-price-struck" className="overview-expanded-product-info-price-struck">
          {styleInfo.original_price}
        </span>
        <span className="overview-expanded-product-info-different-price">{styleInfo.sale_price}</span>
      </div>
    );
  } else {
    return (
      <div data-testid="price2" className="overview-expanded-product-info-prices">
        <span>{styleInfo.original_price}</span>
      </div>
    );
  }
};

export default Price;
