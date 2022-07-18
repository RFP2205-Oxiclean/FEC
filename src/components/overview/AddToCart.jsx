import React, { useState, useEffect } from "react";

const AddToCart = ({ stock, handleAddToCart, stockId, quantity, selectQuantity, noItems }) => {
  let [hidden, setHidden] = useState(false);

  let handleClick = function () {
    handleAddToCart(stockId, quantity);
    let flag = false;
    stock.forEach(function (stockObj) {
      if (stockObj.quantity > 0) {
        flag = true;
        setHidden(false);
      }
      if (stockObj.id === stockId) {
        if (stockObj.quantity - quantity > 0) {
          selectQuantity(1);
        } else {
          selectQuantity(0);
        }
      }
      if (!flag) {
        setHidden(true);
      }
    });
  };

  useEffect(() => {
    setHidden(true);
    stock?.forEach(function (stockObj) {
      if (stockObj.quantity > 0) {
        setHidden(false);
      }
    });
  }, [stock]);

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className={hidden ? "invisible-cart" : "add-to-cart"}>
      Add to Cart
    </div>
  );
};

export default AddToCart;
