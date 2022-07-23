import React, { useState, useEffect } from "react";

const QMenu = ({ stock, size, selectQuantity, stockId, noItems, options }) => {
  let [disabled, setDisabled] = useState(false);

  let makeOptions = function () {
    if (options) {
      let x = Math.min(options, 15).fill(0);
      x = x.map(function (n, i) {
        return i + 1;
      });
    }

    if (size && stockId) {
      let quantity = null;
      for (let i = 0; i < stock.length; i++) {
        if (parseInt(stock[i].id) === stockId) {
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
      data-testid="q-menu"
      className="overview-select"
      key={stockId + size + selectQuantity}
      disabled={!size}
      onChange={(e) => {
        selectQuantity(parseInt(e.target.value));
      }}
      style={{ float: "right", width: "100px" }}>
      {makeOptions()?.map(function (count, i) {
        return <option key={stockId + i}>{count}</option>;
      })}
    </select>
  );
};

export default QMenu;
