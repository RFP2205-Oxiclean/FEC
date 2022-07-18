import React, { useState, useEffect } from "react";

const SizeMenu = ({ stock, selectSize, setPrompt, setNoItems, setStockId, selectQuantity }) => {
  let [defaultValue, setDefaultValue] = useState("Out of Stock!");

  useEffect(() => {
    let flag = false;
    stock?.forEach(function (stockObj) {
      if (stockObj.quantity !== null && stock.quantity !== 0) {
        flag = true;
        setDefaultValue("Select a Size!");
      }
    });
  }, [stock]);

  return (
    <select
      onChange={(e) => {
        setPrompt(false);
        selectSize(e.target.value);
        selectQuantity(1);
        stock.forEach(function (stockObj) {
          if (stockObj.size === e.target.value) {
            setStockId(stockObj.id);
          }
        });
      }}
      style={{ float: "left", width: "150px" }}>
      <option hidden>{defaultValue}</option>
      {stock?.map(function (stockObj, i) {
        if (stockObj.quantity === 0) {
          return (
            <option disabled key={stockObj.id + stockObj.size}>
              {stockObj.quantity !== 0 ? stockObj.size : "Out of Stock!"}
            </option>
          );
        } else {
          return <option key={stockObj.id + stockObj.size}>{stockObj.size}</option>;
        }
      })}
    </select>
  );
};

export default SizeMenu;
