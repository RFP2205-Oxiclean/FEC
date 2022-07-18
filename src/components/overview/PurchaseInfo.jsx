import React, { useState, useEffect } from "react";
import QMenu from "./QMenu.jsx";
import SizeMenu from "./SizeMenu.jsx";
import AddToCart from "./AddToCart.jsx";

const PurchaseInfo = ({ activeStyle, stock }) => {
  let [quantity, selectQuantity] = useState(null);
  let [size, selectSize] = useState(null);
  let [prompt, setPrompt] = useState(false);
  let [noItems, setNoItems] = useState(false);
  let [stockId, setStockId] = useState(null);

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
          <SizeMenu stock={stock} selectSize={selectSize} setPrompt={setPrompt} setNoItems={setNoItems}, setStockId={setStockId}></SizeMenu>
          <QMenu></QMenu>
        </div>
        <div className="purchase-buttons-container2">
          <div style={{ width: "120px", height: "100%", background: "black" }}></div>
          {noItems ? <div></div> : <AddToCart></AddToCart>}
        </div>
      </div>
    </div>
  );
};

export default PurchaseInfo;
