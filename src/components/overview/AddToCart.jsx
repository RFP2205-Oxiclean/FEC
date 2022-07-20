import React, { useState, useEffect } from "react";

const AddToCart = ({ stock, handleAddToCart, stockId, quantity, selectQuantity, noItems, toggleShakeCart, setPrompt, size }) => {
  let [hidden, setHidden] = useState(false);

  let handleClick = function () {
    let flag = false;
    stock.forEach(function (quantityObj) {
      if (quantityObj.id === stockId) {
        if (quantityObj.quantity > 0) {
          flag = true;
        }
      }
    });
    if (!flag) {
      setPrompt(true);
    }
    handleAddToCart(stockId, quantity);
    flag = false;
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
      data-testid="add-to-cart"
      onClick={() => {
        handleClick();
      }}
      className={hidden ? "invisible-cart" : "add-to-cart"}>
      Add to Cart
    </div>
  );
};

export default AddToCart;
