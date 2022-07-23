import React, { useState, useEffect } from "react";

const NiceQMenu = ({ stock, activeStock, stockId, selectQuantity, activeStockUnitId, options, quantity }) => {
  // let [options, setOptions] = useState([]);
  // useEffect(() => {
  //   if (stockId) {
  //     let newOptions = Array(activeStock[stockId].quantity).fill(0);
  //     newOptions = newOptions.map(function (e, i) {
  //       return i + 1;
  //     });
  //     setOptions(newOptions);
  //   }
  // }, [stockId]);

  // useEffect(() => {
  //   console.log("setting quantity to 1");
  //   if (options.length) {
  //     selectQuantity(1);
  //   }
  // }, [options]);

  // if (activeStockUnitId) {
  //   let newOptions = Array(activeStock[activeStockUnitId].quantity).fill(0);
  //   newOptions = options.map(function (e, i) {
  //     return i + 1;
  //   });
  //   setOptions(newOptions);
  // }
  // useEffect(() => {
  //   if (stockId) {
  //     let count = Math.min(15, activeStock[stockId].quantity);
  //     let newOptions = new Array(count).fill(0).map(function (e, i) {
  //       return i + 1;
  //     });
  //     setOptions(newOptions);
  //   }
  // }, [stockId]);

  return (
    <select
      onChange={(e) => {
        console.log(e.target.value);

        selectQuantity(parseInt(e.target.value));
        if (options.length - parseInt(e.target.value) > 0) {
          selectQuantity(1);
        } else {
          selectQuantity("-");
        }
        // setOptions(options.slice(0, options.length - parseInt(e.target.value)));
      }}
      className="q-menu-container">
      {!options.length ? (
        <option hidden>{quantity > 0 ? "-" : quantity}</option>
      ) : (
        options.map(function (option) {
          return <option key={stockId + option}>{option}</option>;
        })
      )}
    </select>
  );
};

export default NiceQMenu;

{
  /* <div className="q-menu-container">
      {options.map(function (option) {
        return (
          <div key={stockId + option} className="q-option">
            {option}
          </div>
        );
      })}
      <button
        onClick={() => {
          myDebugger();
        }}>
        options
      </button>
    </div> */
}
