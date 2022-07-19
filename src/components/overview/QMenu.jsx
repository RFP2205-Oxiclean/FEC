import React, { useState, useEffect } from "react";

const QMenu = ({ stock, size, selectQuantity, stockId, noItems }) => {
  let [disabled, setDisabled] = useState(false);

  let makeOptions = function () {
    if (size && stockId) {
      let quantity = null;
      for (let i = 0; i < stock.length; i++) {
        if (stock[i].id === stockId) {
          quantity = stock[i].quantity;
          break;
        }
      }
      let newLength = Math.min(15, quantity);
      if (newLength > 0) {
        let newArr = Array(newLength)
          .fill(0)
          .map((e, i) => {
            return i + 1;
          });
        return newArr;
      } else {
        return [];
      }
    }
  };

  return (
    <select
      className="overview-select"
      key={stockId + size + selectQuantity}
      disabled={!size}
      onChange={(e) => {
        selectQuantity(parseInt(e.target.value));
      }}
      style={{ float: "right", width: "100px" }}>
      {makeOptions()?.map(function (count, i) {
        return <option key={i}>{count}</option>;
      })}
    </select>
  );
};

export default QMenu;
