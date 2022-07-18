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

  useEffect(() => {
    stock?.forEach(function (stockObj) {
      setNoItems(false);
      if (stockObj.quantity !== 0 && stockObj.quantity !== null) {
        setNoItems(true);
      }
    });
  }, [stock]);

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
          <div style={{ width: "120px", height: "100%", background: "black", position: "relative" }}>
            <button
              onClick={() => {
                myDebugger();
              }}>
              Purchase
            </button>
          </div>
          <div style={{ display: "flex", height: "40px" }}>
            <div className="i-tag-container" style={{ width: "15%", height: "100%", background: "black", marginRight: "4px" }}></div>
            <div className="i-tag-container" style={{ width: "15%", height: "100%", background: "black", marginRight: "4px" }}></div>
            <div className="i-tag-container" style={{ width: "15%", height: "100%", background: "black", marginRight: "4px" }}></div>
            <AddToCart
              noItems={noItems}
              stock={stock}
              selectQuantity={selectQuantity}
              handleAddToCart={handleAddToCart}
              quantity={quantity}
              stockId={stockId}></AddToCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseInfo;
