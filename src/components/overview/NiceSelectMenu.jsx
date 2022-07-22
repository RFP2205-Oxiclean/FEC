import React, { useState, useEffect, useRef } from "react";

const NiceSelectMenu = ({ sizes, isOpen, open, defaultValue, setDefaultValue, activeStock }) => {
  useEffect(() => {
    activeStock?.forEach(function (stockObj) {});
  }, [sizes]);

  return (
    <div
      onClick={() => {
        open(!isOpen);
      }}
      className="select-menu">
      {defaultValue}
      {isOpen ? (
        sizes.map(function (size, i) {
          return (
            <div
              onClick={() => {
                setDefaultValue(size);
                open(false);
              }}
              key={i}
              className="select-menu-option1">
              {size}
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default NiceSelectMenu;

{
  /* <div style={{ display: "flex", flexWrap: "wrap", width: width }}>
      <div
        className="overview-nice-select"
        onClick={() => {
          if (options.length) {
            openCallback(!sizeOpen);
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
    </div> */
}
