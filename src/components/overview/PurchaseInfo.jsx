// import React, { useState, useEffect } from "react";
// import QMenu from "./QMenu.jsx";
// import SizeMenu from "./SizeMenu.jsx";
// import AddToCart from "./AddToCart.jsx";
// import { addToCart } from "../../controllers.js";
// import axios from "axios";
// import { url, API_KEY } from "../../../config/config.js";
// import NiceSelectMenu from "./NiceSelectMenu.jsx";
// import NiceQMenu from "./NiceQMenu.jsx";
// const PurchaseInfo = ({ activeStyle, styleInfo }) => {
//   let [sizeOpen, setSizeOpen] = useState(false);
//   let [prompt, setPrompt] = useState(false);

import React, { useState, useEffect } from "react";
import QMenu from "./QMenu.jsx";
import SizeMenu from "./SizeMenu.jsx";
import AddToCart from "./AddToCart.jsx";
import { addToCart } from "../../controllers.js";
import axios from "axios";
import { url, API_KEY } from "../../../config/config.js";

const PurchaseInfo = ({ activeStyle, stock, isOpen, setSizeOpen, setBag, bag, setStock }) => {
  let [quantity, selectQuantity] = useState(null);
  let [size, selectSize] = useState(null);
  let [prompt, setPrompt] = useState(false);
  let [noItems, setNoItems] = useState(false);
  let [stockId, setStockId] = useState(null);
  let [goodPrompt, setGoodPrompt] = useState(false);
  let [defaultValue, setDefaultValue] = useState("Out of Stock!");

  let setBuyPrompt = function () {
    setGoodPrompt(true);
    setTimeout(() => {
      setGoodPrompt(false);
    }, 4000);
  };

  useEffect(() => {
    let flag = false;
    stock?.forEach(function (stockObj) {
      setNoItems(false);
      if (stockObj.quantity !== 0 && stockObj.quantity !== null) {
        flag = true;
      }
      if (!flag) {
        setNoItems(true);
      }
    });
  }, [stock, activeStyle]);

  return (
    <div data-testid="purchase-info" className="overview-purchase-info">
      <div style={{ display: "inline-block", textAlign: "center", width: "100%" }}>
        <span className="purchase-style-name">{activeStyle.name}</span>
      </div>
      <div>
        <div data-testid="select-prompts">
          {prompt ? (
            <span data-testid="select-fade-in" className="select-prompt-fadeIn">
              Please Select a Size!
            </span>
          ) : (
            <span data-testid="select-fade-out" className="select-prompt-fadeOut">
              Please Select a Size!
            </span>
          )}
        </div>
        <div className="purchase-buttons-container1">
          <SizeMenu
            defaultValue={defaultValue}
            setDefaultValue={setDefaultValue}
            activeStyle={activeStyle}
            size={size}
            setSizeOpen={setSizeOpen}
            isOpen={isOpen}
            stock={stock}
            selectSize={selectSize}
            setPrompt={setPrompt}
            setNoItems={setNoItems}
            setStockId={setStockId}
            selectQuantity={selectQuantity}></SizeMenu>
          <QMenu
            setDefaultValue={setDefaultValue}
            activeStyle={activeStyle}
            stock={stock}
            selectQuantity={selectQuantity}
            size={size}
            stockId={stockId}
            noItems={noItems}></QMenu>
        </div>
        <div style={{ display: "flex", paddingTop: "40px" }}>
          <span style={{ position: "absolute", color: "red", fontSize: "24px" }}>{goodPrompt ? "Added to Cart!" : ""}</span>
          <AddToCart
            setStock={setStock}
            selectSize={selectSize}
            setDefaultValue={setDefaultValue}
            activeStyle={activeStyle}
            setBag={setBag}
            bag={bag}
            setSizeOpen={setSizeOpen}
            setBuyPrompt={setBuyPrompt}
            size={size}
            setPrompt={setPrompt}
            noItems={noItems}
            stock={stock}
            selectQuantity={selectQuantity}
            quantity={quantity}
            stockId={stockId}></AddToCart>
        </div>
        <button
          onClick={() => {
            console.log(stock);
          }}></button>
      </div>
    </div>
  );
};

export default PurchaseInfo;
