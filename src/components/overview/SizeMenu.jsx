// import React, { useState, useEffect, useRef } from "react";

// const SizeMenu = ({ stock, selectSize, setPrompt, setNoItems, setStockId, selectQuantity, noItems }) => {
//   let [defaultValue, setDefaultValue] = useState("Out of Stock!");

//   useEffect(() => {
//     let flag = false;
//     stock?.forEach(function (stockObj) {
//       if (stockObj.quantity !== null && stock.quantity !== 0 && stock.id !== null && stock.id !== "null") {
//         flag = true;
//         setDefaultValue("Select a Size!");
//       }
//     });
//     if (noItems) {
//       setDefaultValue("Out of Stock!");
//     }
//   }, [stock, noItems]);

//   let selectRef = useRef(null);

//   let otherOpen = function () {
//     selectRef.current.focus();
//   };

//   let makeOptions = function () {
//     if (stock) {
//       stock?.map(function (stockObj) {
//         if (stockObj.quantity === 0) {
//           return <option>Out of Stock!</option>;
//         } else {
//           return <option>{stockObj.size}</option>;
//         }
//       });
//     }

//     return (
//       <option disabled key={stockObj.id + stockObj.size}>
//         {stockObj.quantity !== 0 ? stockObj.size : "Out of Stock!"}
//       </option>
//     );
//   };

//   return (
//     <select
//       ref={selectRef}
//       id={"10313"}
//       className="overview-select"
//       onChange={(e) => {
//         setPrompt(false);
//         selectSize(e.target.value);
//         selectQuantity(1);
//         stock?.forEach(function (stockObj) {
//           if (stockObj.size === e.target.value) {
//             setStockId(stockObj.id);
//           }
//         });
//       }}
//       style={{ float: "left", width: "150px" }}>
//       <option hidden>{defaultValue}</option>
//       {stock?.length === 0 ? (
//         <option disabled hidden>
//           "Out of Stock!"
//         </option>
//       ) : (
//         <></>
//       )}
//       {makeOptions()}
//     </select>
//   );
// };

// export default SizeMenu;

import React, { useState, useEffect } from "react";

const SizeMenu = ({ size, stock, selectSize, setPrompt, setNoItems, setStockId, stockId, selectQuantity, noItems, isOpen, setSizeOpen }) => {
  let [defaultValue, setDefaultValue] = useState("Out of Stock!");

  useEffect(() => {
    let flag = false;
    stock?.forEach(function (stockObj) {
      if (stockObj.quantity !== null && stock.quantity !== 0 && stock.id !== null && stock.id !== "null") {
        flag = true;
        setDefaultValue("Select a Size!");
      }
    });
    if (noItems) {
      setDefaultValue("Out of Stock!");
    }
  }, [stock, noItems]);

  useEffect(() => {
    console.log("attempting open");
  }, [isOpen]);

  // return (
  //   <select
  //     className="overview-select"
  //     onChange={(e) => {
  //       setPrompt(false);
  //       selectSize(e.target.value);
  //       selectQuantity(1);
  //       stock.forEach(function (stockObj) {
  //         if (stockObj.size === e.target.value) {
  //           setStockId(stockObj.id);
  //         }
  //       });
  //     }}
  //     style={{ float: "left", width: "150px" }}>
  //     <option hidden>{defaultValue}</option>
  //     {stock?.length === 0 ? (
  //       <option disabled hidden>
  //         "Out of Stock!"
  //       </option>
  //     ) : (
  //       <></>
  //     )}
  //     {stock?.map(function (stockObj, i) {
  //       if (stockObj.quantity === 0 || stockObj.quantity === null) {
  //         return (
  //           <option disabled key={stockObj.id + stockObj.size}>
  //             {stockObj.quantity !== 0 ? stockObj.size : "Out of Stock!"}
  //           </option>
  //         );
  //       } else {
  //         return <option key={stockObj.id + stockObj.size}>{stockObj.size}</option>;
  //       }
  //     })}
  //   </select>
  // );
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div className="select-menu">
        <div
          onClick={(e) => {
            e.stopPropagation();
            console.log("trying to open");
            setSizeOpen(!isOpen);
            setPrompt(false);
          }}
          className="select-menu-header">
          {size ? size : defaultValue}
        </div>
        {isOpen ? (
          stock?.map(function (sizeObject, i) {
            return (
              <div
                value={sizeObject.size}
                key={sizeObject.id + i}
                onClick={(e) => {
                  setPrompt(false);
                  selectSize(stock[i].size);
                  selectQuantity(1);
                  setSizeOpen(false);
                  setDefaultValue(e.target.value);
                  setStockId(parseInt(stock[i].id));
                }}
                className={stockId === sizeObject.id ? "select-menu-option-active" : "select-menu-option"}>
                {sizeObject.size}
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

// {isOpen && stock?.length !== 0 ? (
//   stock?.map(function (sizeObject, i) {
//     return <div
//     key={sizeObject.stockId}
//     onClick={() => {
//       setPrompt(false);
//       selectSize(e.target.value);
//       selectQuantity(1);
//       stock.forEach(function (stockObj) {
//         if (stockObj.size === e.target.value) {
//           setStockId(stockObj.id);
//         }
//       });
//     }}
//     className={stockId === sizeObject.stockId ? "select-menu-option-selected" : "select-menu-option"}>
//     {sizeObject.size} : <></>}

export default SizeMenu;
//             <div
//               key={sizeObject.stockId}
//               onClick={() => {
//                 setPrompt(false);
//                 selectSize(e.target.value);
//                 selectQuantity(1);
//                 stock.forEach(function (stockObj) {
//                   if (stockObj.size === e.target.value) {
//                     setStockId(stockObj.id);
//                   }
//                 });

//                 setActiveStockUnitId(sizeObject.stockId);
//                 setStockId(sizeObject.stockId);
//                 setDefaultValue(sizeObject.size);
//                 open(false);
//               }}
//               className={stockId === sizeObject.stockId ? "select-menu-option-selected" : "select-menu-option"}>
//               {sizeObject.size}
//             </div>
