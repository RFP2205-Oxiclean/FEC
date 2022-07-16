import React, { useState, useEffect } from "react";
import QuantityMenu from "./QuantityMenu.jsx";
import SizeMenu from "./SizeMenu.jsx";
import QMenu from "./QMenu.jsx";

const PurchaseInfo = ({ activeStyle }) => {
  let [size, setSize] = useState("");
  let [sizeCount, setSizeCount] = useState(0);

  let sizeQuantityPairs = [];
  for (var k in activeStyle.skus) {
    sizeQuantityPairs.forEach(function (pair) {
      if (pair.size === activeStyle.skus[k].size) {
      }
    });
    sizeQuantityPairs.push(activeStyle.skus[k]);
  }

  let consolidate = function (arr) {
    // combine objects
    let newArr = [];
    arr.forEach(function (qs) {
      let flag = false;
      newArr.forEach(function (old_qs, i) {
        if (old_qs.size === qs.size) {
          newArr[i] = {
            quantity: qs.quantity + old_qs.quantity,
            size: qs.size,
          };
          flag = true;
        }
      });
      if (!flag) {
        newArr.push(qs);
      }
    });
    return newArr;
  };

  return (
    <div className="overview-purchase-info">
      <div style={{ display: "inline-block", textAlign: "center", width: "100%" }}>
        <span className="purchase-style-name">{activeStyle.name}</span>
      </div>
      <div className="purchase-buttons-container1">
        <SizeMenu
          list={consolidate(sizeQuantityPairs).map(function (qs) {
            return qs.size;
          })}
          changeHandler={setSize}
          key={activeStyle.style_id + "1"}
          side={"left"}
          target={"size"}
          width={"200px"}
          activeStyle={activeStyle}
          defaultText={"Select a Size"}></SizeMenu>
        <QMenu size={size} activeStyle={activeStyle} quantity={sizeCount} sizeQuantityPairs={consolidate(sizeQuantityPairs)}></QMenu>
      </div>
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
