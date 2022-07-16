import React, { useState, useEffect } from "react";

const SizeMenu = ({ stock, changeHandler, activeStyle }) => {
  let [size, setSize] = useState("");

  let style = {
    float: "left",
  };

  useEffect(() => {
    setSize("");
  }, [activeStyle]);

  let clicked = function () {
    style = {
      float: "left",
      paddingLeft: "5px",
    };
  };

  return (
    <div style={style}>
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
