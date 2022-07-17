import React, { useState, useEffect } from "react";

const QMenu = ({ selectedSize, changeHandler, available, activeStyle, id }) => {
  let [arr, setArr] = useState([]);
  let [selected, select] = useState(0);

  useEffect(() => {
    if (available !== null && selectedSize !== null) {
      let x = Math.min(15, available);
      let newArr = Array(x).fill(0);
      newArr = newArr.map(function (n, i) {
        return i + 1;
      });
      changeHandler(1);
      setArr(newArr);
    }
  }, [available, selectedSize, available]);

  useEffect(() => {
    setArr([]);
  }, [activeStyle]);

  let handleChange = function (e) {
    select(parseInt(e.target.value));
    changeHandler(selected);
  };

  return (
    <select className="quantity-selector" onChange={handleChange}>
      {arr.map(function (n) {
        return <option key={id + n}>{n}</option>;
      })}
    </select>
  );
};

export default QMenu;
