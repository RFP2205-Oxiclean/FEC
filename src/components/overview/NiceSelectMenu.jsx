import React, { useState, useEffect, useRef } from "react";

const NiceSelectMenu = ({ options, defaultValue, disableCondition, isOpen, callback, setSizeOpen, sizeOpen, setSelectedSize }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div
        className="overview-nice-select"
        onClick={() => {
          if (options.length) {
            setSizeOpen(!sizeOpen);
          }
        }}>
        {defaultValue}
      </div>
      {options?.map(function (option, i) {
        return (
          <div
            style={option === "Out of Stock!" ? { backgroundColor: "rgb(248, 248, 248)" } : {}}
            key={i}
            className={sizeOpen ? "overview-nice-select-options" : "overview-hidden-select"}
            onMouseEnter={() => {}}
            onClick={() => {
              if (option !== disableCondition) {
                setSelectedSize(option);
                setSizeOpen(false);
              }
              // console.log(sizeOpen);
            }}>
            {option}
          </div>
        );
      })}
    </div>
  );
};

export default NiceSelectMenu;
