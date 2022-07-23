import React, { useState, useEffect } from "react";

const AddToCart = ({ activeStock, size, quantity, handleAddToCart, noItems, stockId, selectQuantity, setStockId }) => {
  // let handleClick = function () {
  //   let flag = false;
  //   stock.forEach(function (quantityObj) {
  //     if (quantityObj.id === stockId) {
  //       if (quantityObj.quantity > 0) {
  //         flag = true;
  //       }
  //     }
  //   });
  //   if (!flag) {
  //     setPrompt(true);
  //   }
  //   handleAddToCart(stockId, quantity);
  //   flag = false;
  //   stock.forEach(function (stockObj) {
  //     if (stockObj.quantity > 0) {
  //       flag = true;
  //       setHidden(false);
  //     }
  //     if (stockObj.id === stockId) {
  //       if (stockObj.quantity - quantity > 0) {
  //         selectQuantity(1);
  //       } else {
  //         selectQuantity(0);
  //       }
  //     }
  //     if (!flag) {
  //       setHidden(true);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   setHidden(true);
  //   stock?.forEach(function (stockObj) {
  //     if (stockObj.quantity > 0) {
  //       setHidden(false);
  //     }
  //   });
  // }, [stock]);

  let handleClick = function () {
    let copyObject = { ...activeStock[stockId] };
    // console.log(stockId, quantity);
    if (stockId && quantity) {
      copyObject.quantity = copyObject.quantity - quantity;
      if (copyObject.quantity > 0) {
        selectQuantity(1);
        setStockId(null);
      } else {
        setStockId(null);
        selectQuantity(0);
      }
    }
    console.log("new stock object: ", copyObject);
    handleAddToCart(stockId, copyObject);
  };

  return (
    <div
      data-testid="add-to-cart"
      onClick={() => {
        handleClick();
      }}
      className={!noItems ? "add-to-cart" : "overview-hidden"}>
      Add to Bag
    </div>
  );
};

export default AddToCart;
