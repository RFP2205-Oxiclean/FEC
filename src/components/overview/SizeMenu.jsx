import React, { useState, useEffect } from "react";

const SizeMenu = ({ changeHandler, side, width, activeStyle, defaultText, list, size }) => {
  let [option, setOption] = useState("");
  let style = {
    float: side,
    width: width,
  };

  let handleChange = (e) => {
    console.log(typeof e.target.value);
    if (changeHandler) {
      changeHandler(e.target.value);
    }
  };

  return (
    <div>
      <select defaultValue={defaultText} onChange={handleChange} style={style}>
        <option disabled hidden>
          {defaultText}
        </option>
        {list?.map(function (item, i) {
          return (
            <option value={item} key={activeStyle.style_id + item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SizeMenu;
