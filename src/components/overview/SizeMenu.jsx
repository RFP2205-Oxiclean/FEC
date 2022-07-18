import React, { useState, useEffect } from "react";

const SizeMenu = ({ stock, selectSize, setPrompt, setNoItems, setId }) => {
  let [defaultValue, setDefaultValue] = useState(null);

  useEffect(() => {
    let flag = false;
    stock?.forEach(function (stockObj) {
      if (stockObj.quantity !== null && stock.quantity !== 0) {
        flag = true;
        setNoItems(false);
        setDefaultValue("Select a Size!");
      }
    });
    if (!flag) {
      setNoItems(true);
      setDefaultValue("Out of Stock!");
    }
  }, [stock]);

  return (
    <select
      onChange={(e) => {
        setPrompt(false);
        selectSize(e.target.value);
      }}
      style={{ float: "left", width: "150px" }}>
      <option hidden>{defaultValue}</option>
      {stock?.map(function (stockObj, i) {
        return <option key={stockObj.id + i}>{stockObj.size}</option>;
      })}
    </select>
  );
};

export default SizeMenu;
