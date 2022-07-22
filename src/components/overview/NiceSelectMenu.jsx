import React, { useState, useEffect, useRef } from "react";

const NiceSelectMenu = ({ sizes, isOpen, open, defaultValue, setDefaultValue, activeStock, stockId, setStockId }) => {
  return (
    <div className="select-menu">
      <div
        onClick={() => {
          open(!isOpen);
        }}
        className="select-menu-header">
        {defaultValue}
      </div>
      {isOpen ? (
        sizes.map(function (sizeObject, i) {
          return (
            <div
              key={sizeObject.stockId}
              onClick={() => {
                setStockId(sizeObject.stockId);
                setDefaultValue(sizeObject.size);
                open(false);
              }}
              className={stockId === sizeObject.stockId ? "select-menu-option-selected" : "select-menu-option"}>
              {sizeObject.size}
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

//   // <div style={{ position: "absolute" }}>
//   <div
//     data-testid="select-menu"
//     onClick={() => {
//       open(!isOpen);
//     }}
//     className="select-menu">
//     {defaultValue}
//     {/* </div> */}
//     {isOpen ? (
//       sizes?.map(function (size, i) {
//         return (
//           <div
//             onClick={() => {
//               setDefaultValue(size);
//               open(false);
//             }}
//             data-testid="select-menu-option1"
//             key={i}
//             className="select-menu-option1">
//             {size}
//           </div>
//         );
//       })
//     ) : (
//       <></>
//     )}
//   </div>
// );

// {isOpen ? (
//   sizes?.map(function (size, i) {
//     return (
//       <div
//         onClick={() => {
//           setDefaultValue(size);
//           open(false);
//         }}
//         data-testid="select-menu-option1"
//         key={i}
//         className="select-menu-option1">
//         {size}
//       </div>
//     );
//   })
// ) : (
//   <></>
// )}

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
