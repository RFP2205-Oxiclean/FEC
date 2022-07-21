import React, { useState, useEffect } from "react";
import QMenu from "./QMenu.jsx";
import SizeMenu from "./SizeMenu.jsx";
import AddToCart from "./AddToCart.jsx";
import { addToCart } from "../../controllers.js";
import axios from "axios";
import { url, API_KEY } from "../../../config/config.js";
import NiceSelectMenu from "./NiceSelectMenu.jsx";

const PurchaseInfo = ({ activeStyle, stock, handleAddToCart, styleInfo }) => {
  let [quantity, selectQuantity] = useState(null);
  let [size, selectSize] = useState(null);
  let [prompt, setPrompt] = useState(false);
  let [noItems, setNoItems] = useState(false);
  let [stockId, setStockId] = useState(null);
  let [addToCartPrompt, setAddToCartPrompt] = useState(false);
  let [sizeOpen, setSizeOpen] = useState(false);
  let [selectedSize, setSelectedSize] = useState(null);
  let [defaultSizeValue, setDefaultSizeValue] = useState("Select a Size!");

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
  }, [stock]);

  let myDebugger = function () {
    console.log(selectedSize);
  };

  return (
    <div data-testid="purchase-info" className="overview-purchase-info">
      <div style={{ display: "inline-block", textAlign: "center", width: "100%" }}>
        <span className="purchase-style-name">{styleInfo.name}</span>
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
        <div className="purchase-buttons-container1" style={{ display: "flex" }}>
          {/* options, defaultValue, disableCondition, isOpen, callback, setSizeOpen, sizeOpen, selectHook, hookState */}
          <NiceSelectMenu
            disableCondition={"Out of Stock!"}
            defaultValue={defaultSizeValue}
            selectHook={setSelectedSize}
            openCallback={setSizeOpen}
            sizeOpen={sizeOpen}
            defaultValue={selectedSize ? selectedSize : "Select a Size!"}
            options={["Size Select!", "Out of Stock!"]}></NiceSelectMenu>
          <NiceSelectMenu width={80}></NiceSelectMenu>
          {/* <SizeMenu
            stock={stock}
            selectSize={selectSize}
            setPrompt={setPrompt}
            setNoItems={setNoItems}
            setStockId={setStockId}
            selectQuantity={selectQuantity}></SizeMenu>
          <QMenu stock={stock} selectQuantity={selectQuantity} size={size} stockId={stockId} noItems={noItems}></QMenu> */}
        </div>
        <div className="purchase-buttons-container2">
          <div>
            <AddToCart
              size={size}
              setPrompt={setPrompt}
              noItems={noItems}
              stock={stock}
              selectQuantity={selectQuantity}
              handleAddToCart={handleAddToCart}
              quantity={quantity}
              stockId={stockId}></AddToCart>
          </div>
        </div>
        <div style={!addToCartPrompt ? { visibility: "hidden" } : { fontSize: "bold", float: "right", marginRight: "20px" }}>
          <span>Added to Cart!</span>
        </div>
      </div>
    </div>
  );
};

export default PurchaseInfo;
