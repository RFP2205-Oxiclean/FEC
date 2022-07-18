import React, { useState, useEffect } from "react";
import QMenu from "./QMenu.jsx";
import SizeMenu from "./SizeMenu.jsx";
import AddToCart from "./AddToCart.jsx";
import { addToCart } from "/src/controllers.js";
import axios from "axios";
import { url, API_KEY } from "/config/config.js";

const PurchaseInfo = ({ activeStyle, stock, handleAddToCart }) => {
  let [quantity, selectQuantity] = useState(null);
  let [size, selectSize] = useState(null);
  let [prompt, setPrompt] = useState(false);
  let [noItems, setNoItems] = useState(false);
  let [stockId, setStockId] = useState(null);

  let myDebugger = function () {
    console.log(prompt);
    console.log(size, quantity);
    console.log(stockId);
    console.log("noItems: ", noItems);
    return axios
      .get(`${url}/cart`, {
        headers: {
          Authorization: API_KEY,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="overview-purchase-info">
      <div style={{ display: "inline-block", textAlign: "center", width: "100%" }}>
        <span className="purchase-style-name">{activeStyle.name}</span>
      </div>
      <div>
        <div>
          {prompt ? (
            <span className="select-prompt-fadeIn">Please Select a Size!</span>
          ) : (
            <span className="select-prompt-fadeOut">Please Select a Size!</span>
          )}
        </div>
        <div className="purchase-buttons-container1">
          <SizeMenu
            stock={stock}
            selectSize={selectSize}
            setPrompt={setPrompt}
            setNoItems={setNoItems}
            setStockId={setStockId}
            selectQuantity={selectQuantity}></SizeMenu>
          <QMenu stock={stock} selectQuantity={selectQuantity} size={size} stockId={stockId}></QMenu>
        </div>
        <div className="purchase-buttons-container2">
          <div style={{ width: "120px", height: "100%", background: "black" }}>
            <button
              onClick={() => {
                myDebugger();
              }}>
              Purchase
            </button>
          </div>
          {noItems ? (
            <div></div>
          ) : (
            <AddToCart
              stock={stock}
              selectQuantity={selectQuantity}
              handleAddToCart={handleAddToCart}
              quantity={quantity}
              stockId={stockId}></AddToCart>
          )}
        </div>
      </div>
    </div>
  );
};

export default PurchaseInfo;
