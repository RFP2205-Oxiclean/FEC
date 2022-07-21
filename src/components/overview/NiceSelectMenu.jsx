import React, { useState, useEffect, useRef } from "react";

const NiceSelectMenu = ({ options, defaultValue, disableCondition, openCallback, isOpen, selectHook }) => {
  return (
    <div
      onMouseLeave={() => {
        openCallback(false);
      }}
      style={{ display: "flex", flexWrap: "wrap" }}>
      <div
        className="overview-nice-select"
        onClick={() => {
          if (options.length) {
            openCallback(!isOpen);
          }
        }}>
        {defaultValue}
      </div>
      {options?.map(function (option, i) {
        return (
          <div
            style={option === "Out of Stock!" ? { backgroundColor: "rgb(248, 248, 248)" } : {}}
            key={i}
            className={isOpen ? "overview-nice-select-options" : "overview-hidden-select"}
            onClick={() => {
              if (option !== disableCondition) {
                selectHook(option);
                openCallback(false);
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
