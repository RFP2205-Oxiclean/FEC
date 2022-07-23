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

const PurchaseInfo = ({ activeStyle, stock, handleAddToCart, isOpen, setSizeOpen, setBag, bag }) => {
  let [quantity, selectQuantity] = useState(null);
  let [size, selectSize] = useState(null);
  let [prompt, setPrompt] = useState(false);
  let [noItems, setNoItems] = useState(false);
  let [stockId, setStockId] = useState(null);
  let [goodPrompt, setGoodPrompt] = useState(false);

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
  }, [stock]);

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
            size={size}
            setSizeOpen={setSizeOpen}
            isOpen={isOpen}
            stock={stock}
            selectSize={selectSize}
            setPrompt={setPrompt}
            setNoItems={setNoItems}
            setStockId={setStockId}
            selectQuantity={selectQuantity}></SizeMenu>
          <QMenu stock={stock} selectQuantity={selectQuantity} size={size} stockId={stockId} noItems={noItems}></QMenu>
        </div>
        <div style={{ display: "flex", paddingTop: "40px" }}>
          <span style={{ position: "absolute", color: "red" }}>{goodPrompt ? "Added to Cart!" : ""}</span>
          <AddToCart
            setBag={setBag}
            bag={bag}
            setSizeOpen={setSizeOpen}
            setBuyPrompt={setBuyPrompt}
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
    </div>
  );
};

export default PurchaseInfo;

// const PurchaseInfo = ({ activeStyle, handleAddToCart, styleInfo, activeStock, stock, setActiveStockUnitId, activeStockUnitId }) => {
//   let [quantity, selectQuantity] = useState(null);
//   let [size, selectSize] = useState(null);
//   let [prompt, setPrompt] = useState(false);
//   let [noItems, setNoItems] = useState(true);
//   let [stockId, setStockId] = useState(null);
//   let [addToCartPrompt, setAddToCartPrompt] = useState(false);
//   let [sizeOpen, setSizeOpen] = useState(false);
//   let [selectedSize, setSelectedSize] = useState(null);
//   let [defaultValue, setDefaultValue] = useState("Select a Size!");
//   let [options, setOptions] = useState([]);

//   useEffect(() => {
//     for (let stockObj in activeStock) {
//       if (stockObj.quantity !== 0 && stockObj !== null) {
//         setNoItems(false);
//       }
//     }
//     setDefaultValue("Select a Size!");
//   }, [activeStock, activeStockUnitId]);

//   // useEffect(() => {
//   //   // if (size) {
//   //   //   let flag = false;
//   //   //   console.log("setting options");
//   //   //   for (let k in activeStock) {
//   //   //     if (activeStock[k].size === size) {
//   //   //       let flag = true;
//   //   //       let count = activeStock[k].quantity;
//   //   //       let newOptions = Array(count).fill(0);
//   //   //       newOptions = newOptions.map(function (e, i) {
//   //   //         return i + 1;
//   //   //       });
//   //   //       console.log("setting options");
//   //   //       setOptions(newOptions);
//   //   //     }
//   //   //   }
//   //   // }
//   //   // if (stockId) {
//   //   //   activeStock.forEach(function (stockUnit) {
//   //   //     if (stockUnit.id === stockId) {
//   //   //       setActiveStockUnit(stockUnit);
//   //   //     }
//   //   //   });
//   //   // }
//   //   if (stockId) {
//   //     setActiveStockUnit(activeStock[stockId]);
//   //     let newOptions = Array(activeStock[stockId].quantity)
//   //       .fill(0)
//   //       .map(function (e, i) {
//   //         return i + 1;
//   //       });
//   //     setOptions(newOptions);
//   //   }
//   // }, [stockId, stock]);

//   return (
//     <div
//       data-testid="purchase-info"
//       className="overview-purchase-info"
//       onClick={() => {
//         if (sizeOpen) {
//           setSizeOpen(false);
//         }
//       }}>
//       <div style={{ display: "inline-block", textAlign: "center", width: "100%" }}>
//         <span className="purchase-style-name">{styleInfo.name}</span>
//       </div>
//       <div>
//         <div data-testid="select-prompts">
//           {prompt ? (
//             <span data-testid="select-fade-in" className="select-prompt-fadeIn">
//               Please Select a Size!
//             </span>
//           ) : (
//             <span data-testid="select-fade-out" className="select-prompt-fadeOut">
//               Please Select a Size!
//             </span>
//           )}
//         </div>
//         <div className="purchase-buttons-container1" style={{ display: "flex" }}>
//           <NiceSelectMenu
//             handleAddToCart={handleAddToCart}
//             activeStockUnitId={activeStockUnitId}
//             selectQuantity={selectQuantity}
//             setDefaultValue={setDefaultValue}
//             setActiveStockUnitId={setActiveStockUnitId}
//             stockId={stockId}
//             setStockId={setStockId}
//             selectSize={selectSize}
//             defaultValue={defaultValue}
//             isOpen={sizeOpen}
//             open={setSizeOpen}
//             activeStock={activeStock}></NiceSelectMenu>
//           {/* <NiceQMenu
//             activeStockUnitId={activeStockUnitId}
//             setOptions={setOptions}
//             selectQuantity={selectQuantity}
//             activeStock={activeStock}
//             stockId={stockId}
//             options={options}></NiceQMenu> */}
//           {/* options, defaultValue, disableCondition, isOpen, callback, setSizeOpen, sizeOpen, selectHook, hookState */}
//           {/* <NiceSelectMenu
//             disableCondition={"Out of Stock!"}
//             defaultValue={defaultSizeValue}
//             selectHook={setSelectedSize}
//             openCallback={setSizeOpen}
//             sizeOpen={sizeOpen}
//             defaultValue={selectedSize ? selectedSize : "Select a Size!"}
//             options={["Size Select!", "Out of Stock!"]}></NiceSelectMenu>
//           <NiceSelectMenu width={80}></NiceSelectMenu> */}
//           {/* <SizeMenu
//             stock={stock}
//             selectSize={selectSize}
//             setPrompt={setPrompt}
//             setNoItems={setNoItems}
//             setStockId={setStockId}
//             selectQuantity={selectQuantity}></SizeMenu>
//           <QMenu stock={stock} selectQuantity={selectQuantity} size={size} stockId={stockId} noItems={noItems}></QMenu> */}
//         </div>
//         <div className="purchase-buttons-container2">
//           {/* <div>
//             <AddToCart
//               setStockId={setStockId}
//               selectQuantity={selectQuantity}
//               stockId={stockId}
//               noItems={noItems}
//               handleAddToCart={handleAddToCart}
//               quantity={quantity}
//               noItems={noItems}
//               activeStock={activeStock}></AddToCart>
//           </div> */}
//         </div>
//         {/* <div style={!addToCartPrompt ? { visibility: "hidden" } : { fontSize: "bold", float: "right", marginRight: "20px" }}>
//           <span>Added to Cart!</span>
//         </div> */}
//         <button
//           style={{ position: "absolute", marginBottom: "100px" }}
//           onClick={() => {
//             // console.log(stockId);
//             // console.log(activeStock);
//             // console.log("activeStockUnit, ", activeStockUnit);
//             // console.log(quantity);
//             // console.log(sizes);
//           }}>
//           Active Stock
//         </button>
//       </div>
//     </div>
//   );
// };
