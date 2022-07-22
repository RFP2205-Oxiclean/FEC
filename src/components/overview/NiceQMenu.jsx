import React, { useState } from "react";

const NiceQMenu = ({ activeStockUnit, stockId, options, selectQuantity }) => {
  return (
    <select
      onChange={(e) => {
        console.log(e.target.value);

        selectQuantity(e.target.value);
      }}
      className="q-menu-container">
      {options.map(function (option) {
        return <option key={stockId + option}>{option}</option>;
      })}
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
