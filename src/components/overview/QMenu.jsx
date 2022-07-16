import React, { useState, useEffect } from "react";

const QMenu = ({ available, activeStyle, id }) => {
  let [arr, setArr] = useState([]);

  useEffect(() => {
    let x = Math.min(15, available);
    let newArr = Array(x).fill(0);
    newArr = newArr.map(function (n, i) {
      return i + 1;
    });
    setArr(newArr);
  }, [available]);

  useEffect(() => {
    setArr([]);
  }, [activeStyle]);

  return (
    <div className="size-select-button" style={{ float: "right" }}>
      <select style={{ width: "150px" }}>
        <option defaultValue={"Hello"} hidden></option>
        {arr.map(function (n) {
          return <option key={id + n}>{n}</option>;
        })}
      </select>
    </div>
  );
};

export default QMenu;
