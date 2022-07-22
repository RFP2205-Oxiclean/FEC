import React, { useState, useEffect } from "react";
import QMenu from "./QMenu.jsx";
import SizeMenu from "./SizeMenu.jsx";
import AddToCart from "./AddToCart.jsx";
import { addToCart } from "../../controllers.js";
import axios from "axios";
import { url, API_KEY } from "../../../config/config.js";
import NiceSelectMenu from "./NiceSelectMenu.jsx";
import NiceQMenu from "./NiceQMenu.jsx";

const PurchaseInfo = ({ activeStyle, handleAddToCart, styleInfo, activeStock }) => {
  let [quantity, selectQuantity] = useState(null);
  let [size, selectSize] = useState(null);
  let [prompt, setPrompt] = useState(false);
  let [noItems, setNoItems] = useState(false);
  let [stockId, setStockId] = useState(null);
  let [addToCartPrompt, setAddToCartPrompt] = useState(false);
  let [sizeOpen, setSizeOpen] = useState(false);
  let [selectedSize, setSelectedSize] = useState(null);
  let [sizes, setSizes] = useState(null);
  let [defaultValue, setDefaultValue] = useState("Select a Size!");
  let [options, setOptions] = useState([]);
  let [activeStockUnit, setActiveStockUnit] = useState({});

  // Q Menu receives activeStock
  // S Menu receives sizes

  console.log(activeStock);

  useEffect(() => {
    let newSizes = [];
    if (activeStock) {
      let flag = false;
      for (let k in activeStock) {
        console.log("firing");
        if (activeStock[k].quantity !== null && activeStock[k].quantity[k] !== 0) {
          flag = true;
        }
        newSizes.push({ ...activeStock[k], stockId: k });
      }
      if (!flag) {
        setDefaultValue("Out of stock!");
      }
    }
    setSizes(newSizes);
  }, [activeStock]);

  useEffect(() => {
    // if (size) {
    //   let flag = false;
    //   console.log("setting options");
    //   for (let k in activeStock) {
    //     if (activeStock[k].size === size) {
    //       let flag = true;
    //       let count = activeStock[k].quantity;
    //       let newOptions = Array(count).fill(0);
    //       newOptions = newOptions.map(function (e, i) {
    //         return i + 1;
    //       });
    //       console.log("setting options");
    //       setOptions(newOptions);
    //     }
    //   }
    // }
    // if (stockId) {
    //   activeStock.forEach(function (stockUnit) {
    //     if (stockUnit.id === stockId) {
    //       setActiveStockUnit(stockUnit);
    //     }
    //   });
    // }
    if (stockId) {
      setActiveStockUnit(activeStock[stockId]);
      let newOptions = Array(activeStock[stockId].quantity)
        .fill(0)
        .map(function (e, i) {
          return i + 1;
        });
      setOptions(newOptions);
    }
  }, [stockId]);

  let myDebugger = function () {
    console.log(size);
    console.log(quantity);
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
          {/* <NiceSelectMenu
            stockId={stockId}
            setStockId={setStockId}
            selectSize={selectSize}
            sizes={sizes}
            isOpen={sizeOpen}
            open={setSizeOpen}
            defaultValue={defaultValue}
            activeStock={activeStock}
            setDefaultValue={setDefaultValue}></NiceSelectMenu>
          <NiceQMenu activeStock={activeStock} stockId={stockId} selectQuantity={selectQuantity} options={options}></NiceQMenu> */}
          {/* options, defaultValue, disableCondition, isOpen, callback, setSizeOpen, sizeOpen, selectHook, hookState */}
          {/* <NiceSelectMenu
            disableCondition={"Out of Stock!"}
            defaultValue={defaultSizeValue}
            selectHook={setSelectedSize}
            openCallback={setSizeOpen}
            sizeOpen={sizeOpen}
            defaultValue={selectedSize ? selectedSize : "Select a Size!"}
            options={["Size Select!", "Out of Stock!"]}></NiceSelectMenu>
          <NiceSelectMenu width={80}></NiceSelectMenu> */}
          <SizeMenu
            stock={}
            selectSize={selectSize}
            setPrompt={setPrompt}
            setNoItems={setNoItems}
            setStockId={setStockId}
            selectQuantity={selectQuantity}></SizeMenu>
          <QMenu stock={stock} selectQuantity={selectQuantity} size={size} stockId={stockId} noItems={noItems}></QMenu>
        </div>
        <div className="purchase-buttons-container2">
          <div>
            {/* <AddToCart
              size={size}
              setPrompt={setPrompt}
              noItems={noItems}
              stock={activeStock}
              selectQuantity={selectQuantity}
              handleAddToCart={handleAddToCart}
              quantity={quantity}
              stockId={stockId}></AddToCart> */}
          </div>
        </div>
        <div style={!addToCartPrompt ? { visibility: "hidden" } : { fontSize: "bold", float: "right", marginRight: "20px" }}>
          <span>Added to Cart!</span>
        </div>
        <button
          onClick={() => {
            console.log(quantity);
            console.log(sizes);
          }}></button>
      </div>
    </div>
  );
};

export default PurchaseInfo;
