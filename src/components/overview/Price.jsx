import React from "react";

const Price = ({ styleInfo, activeStyle }) => {
  if (activeStyle.sale_price) {
    return (
      <div data-testid="price1" className="overview-expanded-product-info-prices">
        <span data-testid="original-price-struck" className="overview-expanded-product-info-price-struck">
          {activeStyle.original_price}
        </span>
        <span data-testid="sale-price" className="overview-expanded-product-info-different-price">
          {activeStyle.sale_price}
        </span>
      </div>
    );
  } else {
    return (
      <div data-testid="price2" className="overview-expanded-product-info-prices">
        <span data-testid="original-price">{activeStyle.original_price}</span>
      </div>
    );
  }
};

export default Price;
