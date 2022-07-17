import React, { useState, useEffect, setStock } from "react";

const QMenu = ({ stock, selectedSizeId, handleSelectQ }) => {
  let [selected, select] = useState(null);
  let [available, setAvailable] = useState(0);
  let [optionsArr, setOptionsArr] = useState([]);

  useEffect(() => {
    if (selectedSizeId !== null) {
      stock.forEach(function (quantityObject) {
        if (quantityObject.id === selectedSizeId) {
          let newArr = Array(Math.min(15, parseInt(quantityObject.quantity)))
            .fill(0)
            .map(function (e, i) {
              return i + 1;
            });
          handleSelectQ(1);
          setOptionsArr(newArr);
          setAvailable(quantityObject.quantity);
        }
      });
    }
  }, [stock, selectedSizeId]);

  let myDebugger = function () {
    console.log("available ", available);
    console.log("options: ", optionsArr);
    console.log("selected, ", selected);
  };

  let handleSelect = function (e) {
    handleSelectQ(parseInt(e.target.value));
  };

  return (
    <>
      <select onChange={handleSelect} className="quantity-selector">
        {optionsArr.map(function (n) {
          return <option key={selectedSizeId + available + n + ""}>{n}</option>;
        })}
      </select>
      <button onClick={myDebugger}>QMenu State</button>
    </>
  );
};

export default QMenu;

// let [arr, setArr] = useState([]);
// let [selected, select] = useState(0);

// useEffect(() => {
//   if (available !== null && selectedSize !== null) {
//     let x = Math.min(15, available);
//     let newArr = Array(x).fill(0);
//     newArr = newArr.map(function (n, i) {
//       return i + 1;
//     });
//     changeHandler(1);
//     setArr(newArr);
//   }
// }, [available, selectedSize, available]);

// useEffect(() => {
//   setArr([]);
// }, [activeStyle]);

// let handleChange = function (e) {
//   select(parseInt(e.target.value));
//   changeHandler(selected);
// };
