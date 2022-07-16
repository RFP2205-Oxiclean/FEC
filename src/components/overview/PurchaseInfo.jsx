import React, { useState, useEffect } from "react";
import QuantityMenu from "./QuantityMenu.jsx";
import SizeMenu from "./SizeMenu.jsx";
import QMenu from "./QMenu.jsx";

const PurchaseInfo = ({ activeStyle }) => {
  let [selectedSize, selectSize] = useState(null);
  let [stock, setStockArr] = useState([]);
  let [available, setAvailable] = useState(0);
  let [id, setId] = useState(0);

  useEffect(() => {
    let stockArr = [];
    for (let k in activeStyle.skus) {
      let flag = false;
      stockArr.forEach(function (sizePair, i) {
        if (activeStyle.skus[k].size === stockArr[i].size) {
          flag = true;
          stockArr[i].quantity = stockArr[i].quantity + activeStyle.skus[k].quantity;
        }
      });
      if (!flag) {
        stockArr.push({ ...activeStyle.skus[k], id: k });
      }
    }
    setStockArr(stockArr);
  }, [activeStyle]);

  let myDebugger = function () {
    console.log(stock);
    console.log(selectedSize);
  };

  useEffect(() => {
    stock.forEach(function (pair) {
      if (pair.size === selectedSize) {
        setAvailable(pair.quantity);
        setId(pair.id);
      }
    });
  }, [selectedSize]);

  return (
    <div className="overview-purchase-info">
      <div style={{ display: "inline-block", textAlign: "center", width: "100%" }}>
        <span className="purchase-style-name">{activeStyle.name}</span>
      </div>
      <div className="purchase-buttons-container1"></div>
      <SizeMenu activeStyle={activeStyle} changeHandler={selectSize} stock={stock}></SizeMenu>
      <QMenu id={id} activeStyle={activeStyle} available={available}></QMenu>
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
