import React, { useState, useEffect } from "react";

const QMenu = ({ size, quantity, activeStyle, sizeQuantityPairs }) => {
  let [sizeCount, setSizeCount] = useState(0);

  let newArr = [];
  useEffect(() => {
    sizeQuantityPairs.forEach(function (qs) {
      if (qs.size === size) {
        setSizeCount(qs.quantity);
      }
    });
  }, []);

  for (let i = 1; i <= Math.min(15, size); i++) {
    newArr.push(i);
  }

  if (quantity) {
    return (
      <div style={{ float: "right" }}>
        <select style={{ width: "100px" }} defaultValue={"words"}>
          {newArr.map(function (n) {
            return <option key={activeStyle.style_id + n + ""}>{n}</option>;
          })}
        </select>
      </div>
    );
  } else {
    return (
      <div style={{ float: "right" }}>
        <select style={{ width: "100px" }} defaultValue={"words"}></select>
      </div>
    );
  }
};

export default QMenu;
