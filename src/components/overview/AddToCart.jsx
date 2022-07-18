import React, { useState } from "react";

const AddToCart = ({ stock, handleAddToCart, stockId, quantity, selectQuantity, noItems }) => {
  let handleClick = function () {
    handleAddToCart(stockId, quantity);
    stock.forEach(function (stockObj) {
      if (stockObj.id === stockId) {
        if (stockObj.quantity - quantity > 0) {
          selectQuantity(1);
        } else {
          selectQuantity(0);
        }
      }
    });
  };

  return (
    <div
      style={noItems ? { visiblity: "hidden" } : { visibility: "visible" }}
      onClick={() => {
        handleClick();
      }}
      className="add-to-cart">
      Add to Cart
    </div>
  );
};

export default AddToCart;