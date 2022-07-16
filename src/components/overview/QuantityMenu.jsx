import React, { useState } from "react";

const QuantityMenu = ({ list, changeHandler, size, defaultText, activeStyle }) => {
  let [select, setSelect] = useState("Quantity");

  let style = {
    width: "100px",
    float: "right",
  };

  let handleChange = function () {
    return;
  };

  let sizeList = [];

  for (let i = 0; i < list.length; i++) {
    if ((list[i].size = size)) {
      sizeList = new Array(Math.min(15, size));
    }
  }

  return (
    <div>
      <select defaultValue={defaultText} onChange={handleChange} style={style}>
        <option disabled hidden>
          {defaultText}
          {sizeList.map(function (n, i) {
            return i;
          })}
        </option>
      </select>
    </div>
  );
};

export default QuantityMenu;
