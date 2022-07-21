import React, { useState, useEffect } from "react";

const SizeMenu = ({ stock, selectSize, setPrompt, setNoItems, setStockId, selectQuantity, noItems }) => {
  let [defaultValue, setDefaultValue] = useState("Out of Stock!");

  useEffect(() => {
    let flag = false;
    stock?.forEach(function (stockObj) {
      if (stockObj.quantity !== null && stock.quantity !== 0 && stock.id !== null && stock.id !== "null") {
        flag = true;
        setDefaultValue("Select a Size!");
      }
    });
    if (noItems) {
      setDefaultValue("Out of Stock!");
    }
  }, [stock, noItems]);

  let makeOptions = function () {
    stock.map(function (stockObj) {
      if (stockObj.quantity === 0) {
        return <option>Out of Stock!</option>;
      } else {
        return <option>{stockObj.size}</option>;
      }
    });

    return (
      <option disabled key={stockObj.id + stockObj.size}>
        {stockObj.quantity !== 0 ? stockObj.size : "Out of Stock!"}
      </option>
    );
  };

  return (
    <select
      className="overview-select"
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
      {stock?.length === 0 ? (
        <option disabled hidden>
          "Out of Stock!"
        </option>
      ) : (
        <></>
      )}
      {stock?.map(function (stockObj, i) {
        if (stockObj.quantity === 0 || stockObj.quantity === null) {
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
