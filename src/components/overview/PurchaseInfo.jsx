import React, { useState, useEffect } from "react";
import QuantityMenu from "./QuantityMenu.jsx";
import SizeMenu from "./SizeMenu.jsx";
import QMenu from "./QMenu.jsx";
import AddToCart from "./AddToCart.jsx";
import axios from "axios";
import { url, API_KEY } from "/config/config.js";
import { addToCart } from "/src/controllers.js";
axios.defaults.headers.common["Authorization"] = API_KEY;

const PurchaseInfo = ({ activeStyle }) => {
  let [stock, setStockArr] = useState([]);
  let [sizeObject, selectSizeObject] = useState({});

  let [quantity, selectQuantity] = useState(0);
  let [selectSizePrompt, setSelectSizePrompt] = useState(false);
  let [selectedSize, selectSize] = useState(null);
  let [available, setAvailable] = useState(null);
  let [id, setId] = useState(0);

  useEffect(() => {
    let stockArr = [];
    for (let k in activeStyle.skus) {
      let flag = false;
      stockArr.forEach(function (sizePair, i) {
        if (activeStyle.skus[k].quantity !== 0 && activeStyle.skus[k].quantity !== null) {
          setAvailable(0);
        }
        if (activeStyle.skus[k].size === stockArr[i].size) {
          flag = true;
          stockArr[i].quantity = stockArr[i].quantity + activeStyle.skus[k].quantity;
        }
      });
      if (!flag) {
        stockArr.push({ ...activeStyle.skus[k], id: k });
      }
    }
    setId(null);
    selectSize(null);
    setStockArr(stockArr);
  }, [activeStyle]);

  useEffect(() => {
    stock.forEach(function (pair) {
      if (pair.size === selectedSize) {
        setAvailable(pair.quantity);
        setId(pair.id);
      }
    });
  }, [selectedSize]);

  let myDebugger = function () {
    axios
      .get(`${url}/cart`, {
        headers: {
          Authorization: API_KEY,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
    console.log("avaialble: ", available);
    console.log("stock array: ", stock);
    console.log(selectedSize);
    console.log(quantity);
    console.log(id);
    setSelectSizePrompt(!selectSizePrompt);
  };

  let handleCartClick = function () {
    if (selectedSize === null) {
      setSelectSizePrompt(true);
    } else {
      console.log("QUANTITY: ", quantity);
      addToCart(id, quantity)
        .then(() => {
          console.log("success!");
        })
        .then(() => {
          let newStock = stock.slice();
          newStock.forEach(function (pairObj, i) {
            if (pairObj.id === id) {
              newStock[i] = { quantity: pairObj.quantity - quantity, size: pairObj.size, id: id };
              setAvailable(newStock[i].quantity);
            }
          });
          setStockArr(newStock);
        });
    }
  };

  useEffect(() => {
    setSelectSizePrompt(false);
  }, [selectedSize, activeStyle]);

  return (
    <div className="overview-purchase-info">
      <div style={{ display: "inline-block", textAlign: "center", width: "100%" }}>
        <span className="purchase-style-name">{activeStyle.name}</span>
      </div>
      <div style={{ display: "flex", height: "40px", alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", width: "250px", textAlign: "center", fontSize: "20px", color: "red" }}>
          {selectSizePrompt ? <span>Please Select a Size! </span> : <span></span>}
        </div>
      </div>
      <div className="purchase-buttons-container1">
        <SizeMenu available={available} activeStyle={activeStyle} changeHandler={selectSize} stock={stock}></SizeMenu>
        <QMenu
          selectedSize={selectedSize}
          changeHandler={selectQuantity}
          id={id}
          activeStyle={activeStyle}
          available={available}
          stock={stock}></QMenu>
        <button onClick={myDebugger}>Debug</button>
      </div>
      <div className="purchase-buttons-container2">{quantity !== 0 ? <AddToCart handleCartClick={handleCartClick}></AddToCart> : <div></div>}</div>
    </div>
  );
  //side, width, handleChange, size, defaultText, activeStyle
  // return (
  //   <table className="overview-purchase-info">
  //     <th className="purchase-header" style={{ width: "100%", height: "40px" }}>
  //       <span className="purchase-style-name">{activeStyle.name}</span>
  //     </th>
  //     <th></th>
  //     <tr>
  //       <td>Something</td>
  //       <td>
  //         <span>HERES A BUNCH OF TEXT</span>
  //       </td>
  //     </tr>
  //     <tr></tr>
  //   </table>
  // );
};

export default PurchaseInfo;

// let [stock, setStockArr] = useState([]);
// let [sizeObject, selectSizeObject] = useState({});

// let [quantity, selectQuantity] = useState(0);
// let [selectSizePrompt, setSelectSizePrompt] = useState(false);
// let [selectedSize, selectSize] = useState(null);
// let [available, setAvailable] = useState(null);
// let [id, setId] = useState(0);

// useEffect(() => {
//   let stockArr = [];
//   for (let k in activeStyle.skus) {
//     let flag = false;
//     stockArr.forEach(function (sizePair, i) {
//       if (activeStyle.skus[k].quantity !== 0 && activeStyle.skus[k].quantity !== null) {
//         setAvailable(0);
//       }
//       if (activeStyle.skus[k].size === stockArr[i].size) {
//         flag = true;
//         stockArr[i].quantity = stockArr[i].quantity + activeStyle.skus[k].quantity;
//       }
//     });
//     if (!flag) {
//       stockArr.push({ ...activeStyle.skus[k], id: k });
//     }
//   }
//   setId(null);
//   selectSize(null);
//   setStockArr(stockArr);
// }, [activeStyle]);

// useEffect(() => {
//   stock.forEach(function (pair) {
//     if (pair.size === selectedSize) {
//       setAvailable(pair.quantity);
//       setId(pair.id);
//     }
//   });
// }, [selectedSize]);

// let myDebugger = function () {
//   axios
//     .get(`${url}/cart`, {
//       headers: {
//         Authorization: API_KEY,
//       },
//     })
//     .then((response) => {
//       console.log(response.data);
//     });
//   console.log("avaialble: ", available);
//   console.log("stock array: ", stock);
//   console.log(selectedSize);
//   console.log(quantity);
//   console.log(id);
//   setSelectSizePrompt(!selectSizePrompt);
// };

// let handleCartClick = function () {
//   if (selectedSize === null) {
//     setSelectSizePrompt(true);
//   } else {
//     console.log("QUANTITY: ", quantity);
//     addToCart(id, quantity)
//       .then(() => {
//         console.log("success!");
//       })
//       .then(() => {
//         let newStock = stock.slice();
//         newStock.forEach(function (pairObj, i) {
//           if (pairObj.id === id) {
//             newStock[i] = { quantity: pairObj.quantity - quantity, size: pairObj.size, id: id };
//             setAvailable(newStock[i].quantity);
//           }
//         });
//         setStockArr(newStock);
//       });
//   }
// };

// useEffect(() => {
//   setSelectSizePrompt(false);
// }, [selectedSize, activeStyle]);
