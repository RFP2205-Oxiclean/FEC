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
}) => {
  let [hidden, setHidden] = useState(false);

  let handleClick = function (e) {
    if (!size) {
      e.stopPropagation();
      setSizeOpen(true);
      setPrompt(true);
      return;
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
        console.log(bag);
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
      }}
      className={hidden ? "invisible-cart" : "add-to-cart"}>
      Add to Cart
    </div>
  );
};

export default AddToCart;
