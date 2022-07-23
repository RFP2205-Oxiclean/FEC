import React, { useState, useEffect, useRef } from "react";
import NiceQMenu from "./NiceQMenu.jsx";
import AddToCart from "./AddToCart.jsx";

const NiceSelectMenu = ({
  stock,
  isOpen,
  open,
  activeStock,
  stockId,
  setStockId,
  setActiveStockUnitId,
  defaultValue,
  setDefaultValue,
  activeStockUnitId,
  handleAddToCart,
  noItems,
}) => {
  let [options, setOptions] = useState([]);
  let [sizes, setSizes] = useState([]);
  let [size, selectSize] = useState(null);
  let [quantity, selectQuantity] = useState(1);

  useEffect(() => {
    console.log("activeStock was modified or changed!");
    if (activeStockUnitId) {
      let count = Math.min(activeStock[activeStockUnitId].quantity, 15);
      let newOptions = Array(count).fill(0);
      newOptions = newOptions.map(function (e, i) {
        return i + 1;
      });
      setOptions(newOptions);
    }
  }, [activeStock]);
  // let [defaultValue, setDefaultValue] = useState("");

  // useEffect(() => {
  //   let flag = false;
  //   let newSizes = [];
  //   if (!stockObjects) {
  //     return;
  //   }
  //   for (let k in stockObjects) {
  //     if (stockObjects[k]?.quantity !== 0 && stockObjects[k]?.quantity !== null) {
  //       flag = true;
  //       setDefaultValue("Select a Size!");
  //       newSizes.push(stockObjects[k]?.size);
  //     }
  //   }
  //   if (!flag) {
  //     setDefaultValue("Out of Stock!");
  //   }
  //   console.log(newSizes);
  //   setSizes(newSizes);
  // }, [stockObjects]);

  if (noItems) {
    return (
      <div className="">
        <div className="select-menu-header">{defaultValue}</div>
        <NiceQMenu options={[]}></NiceQMenu>
      </div>
    );
  }

  useEffect(() => {
    let newSizes = [];
    if (activeStock && !stockId) {
      let flag = false;
      for (let k in activeStock) {
        console.log("firing");
        if (activeStock[k].quantity !== null && activeStock[k].quantity[k] !== 0) {
          flag = true;
          setDefaultValue("Select a Size!");
        }
        newSizes.push({ ...activeStock[k], stockId: k });
      }
      if (!flag) {
        setDefaultValue("Out of stock!");
      }
    }
    setSizes(newSizes);
  }, [activeStock]);

  useEffect(() => {
    if (activeStockUnitId) {
      let count = Math.min(activeStock[activeStockUnitId].quantity, 15);
      let newOptions = Array(count).fill(0);
      newOptions = newOptions.map(function (e, i) {
        return i + 1;
      });
      setOptions(newOptions);
    }
  }, [activeStockUnitId]);

  let myDebugger = function () {
    console.log(sizes);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <NiceQMenu
        options={options}
        activeStock={activeStock}
        stockId={stockId}
        selectQuantity={selectQuantity}
        activeStockUnitId={activeStockUnitId}></NiceQMenu>
      <div className="select-menu">
        <div
          onClick={(e) => {
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
                  setActiveStockUnitId(sizeObject.stockId);
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
      <AddToCart
        activeStock={activeStock}
        size={size}
        quantity={quantity}
        handleAddToCart={handleAddToCart}
        noItems={noItems}
        stockId={stockId}
        selectQuantity={selectQuantity}
        setStockId={setStockId}></AddToCart>
    </div>
  );
};

//   return (
//     <div>
//       <div className="select-menu">
//         <div
//           onClick={() => {
//             open(!isOpen);
//           }}
//           className="select-menu-header">
//           {defaultValue}
//         </div>
//         {isOpen ? (
//           sizes.map(function (sizeObject, i) {
//             return (
//               <div
//                 key={sizeObject.stockId}
//                 onClick={() => {
//                   // setActiveStockUnitId(sizeObject.stockId);
//                   setDefaultValue(sizeObject.size);
//                   open(false);
//                 }}
//                 className={stockId === sizeObject.stockId ? "select-menu-option-selected" : "select-menu-option"}>
//                 {sizeObject.size}
//               </div>
//             );
//           })
//         ) : (
//           <></>
//         )}
//       </div>
//       <div style={{ background: "black", height: "40px", width: "30px" }}></div>
//     </div>
//   );
// };

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
