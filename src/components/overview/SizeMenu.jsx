import React, { useState, useEffect } from "react";

const SizeMenu = ({ stock, changeHandler, activeStyle, available }) => {
  let [size, setSize] = useState("");
  let [defaultValue, setDefaultValue] = useState("Select a Size!");

  useEffect(() => {
    setSize("");
  }, [activeStyle]);

  useEffect(() => {
    let flag = false;
    stock.forEach(function (stockObj) {
      if (stockObj.quantity !== null && stockObj.quantity !== 0) {
        flag = true;
        setDefaultValue("Select a Size!");
      }
    });
    if (!flag || available === 0) {
      setDefaultValue("Out of Stock!");
    }
  }, [stock]);

  return (
    <select
      defaultValue={defaultValue}
      onChange={(e) => {
        changeHandler(e.target.value);
      }}
      className="nice-select"
      style={{ width: "250px" }}>
      <option hidden>{defaultValue}</option>
      {stock.map(function (n, i) {
        return <option key={n.id + n.size + ""}>{n.size}</option>;
      })}
    </select>
  );
};

export default SizeMenu;
