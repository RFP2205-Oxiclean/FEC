import React, { useState, useEffect } from "react";
import axios from "axios";
import { url, API_KEY } from "/config/config.js";
let myAxios = axios.create({});

const AddToCart = ({
  stock,
  handleAddToCart,
  stockId,
  quantity,
  selectQuantity,
  noItems,
  setPrompt,
  size,
  setBuyPrompt,
  setSizeOpen,
  bag,
  setBag,
  setDefaultValue,
  selectSize,
  setStock,
}) => {
  let [hidden, setHidden] = useState(false);

  let handleClick = function (e) {
    if (!size) {
      e.stopPropagation();
      setSizeOpen(true);
      setPrompt(true);
      return;
    } else {
      let newStock = stock.map(function (stockObj) {
        return Object.assign({}, stockObj);
      });
      newStock.forEach(function (stockObj) {
        if (parseInt(stockObj.id) === parseInt(stockId)) {
          console.log("found id");
          console.log(stockObj.quantity);
          console.log(quantity);
          console.log("newStock: ", newStock);
          stockObj.quantity = stockObj.quantity = parseInt(quantity);
          console.log("newStock: ", newStock);
        }
      });
      console.log("newStock: ", newStock);
    }
    myAxios
      .post(
        `${url}/cart`,
        {
          sku_id: stockId,
        },
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      )
      .then(() => {
        setBuyPrompt(true);
        setBag(bag + parseInt(quantity));
      })
      .catch((err) => {});
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
      onClick={(e) => {
        handleClick(e);
        selectSize("");
      }}
      className={hidden ? "invisible-cart" : "add-to-cart"}>
      Add to Cart
    </div>
  );
};

export default AddToCart;
