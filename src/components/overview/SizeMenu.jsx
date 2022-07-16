import React, { useState, useEffect } from "react";

const SizeMenu = ({ stock, changeHandler, activeStyle }) => {
  let [size, setSize] = useState("");

  useEffect(() => {
    setSize("");
  }, [activeStyle]);

  return (
    <div style={{ float: "left" }}>
      <select
        defaultValue={"Select a Size!"}
        onChange={(e) => {
          changeHandler(e.target.value);
        }}
        defaultValue={"Hello"}
        style={{ width: "250px" }}>
        <option hidden>Select a Size!</option>
        {stock.map(function (n, i) {
          return <option key={n.id + n.size + ""}>{n.size}</option>;
        })}
      </select>
    </div>
  );
};

export default SizeMenu;
