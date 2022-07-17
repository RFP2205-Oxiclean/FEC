import React, { useState, useEffect } from "react";

const SizeMenu = ({ setPrompt, stock, setNoItems, noItems, setSelectedSizeId }) => {
  let [size, setSize] = useState("");
  let [defaultValue, setDefaultValue] = useState("Select a Size!");

  useEffect(() => {
    let flag = false;
    stock.forEach(function (stockObj) {
      if (stockObj.quantity !== null && stockObj.quantity !== 0) {
        flag = true;
        setNoItems(false);
        setDefaultValue("Select a Size!");
      }
    });
    if (!flag) {
      setNoItems(true);
      setDefaultValue("Out of Stock!");
    }
  }, [stock]);

  let handleSelect = function (e) {
    setPrompt(false);
    console.log(e.target.value);
    stock.forEach(function (quantityObject) {
      if (quantityObject.size === e.target.value) {
        setSelectedSizeId(quantityObject.id);
      }
    });
  };

  return (
    <select defaultValue={defaultValue} onChange={handleSelect} className="nice-select" style={{ width: "250px" }}>
      <option hidden>{defaultValue}</option>
      {stock.map(function (n, i) {
        if (!noItems) {
          if (n.quantity === 0) {
            return (
              <option disabled key={n.id + n.size + ""}>
                {n.quantity !== 0 ? n.size : "Out of Stock!"}
              </option>
            );
          } else {
            return <option key={n.id + n.size + ""}>{n.size}</option>;
          }
        }
      })}
    </select>
  );
};

export default SizeMenu;

// let [size, setSize] = useState("");
// let [defaultValue, setDefaultValue] = useState("Select a Size!");

// useEffect(() => {
//   setSize("");
// }, [activeStyle]);

// useEffect(() => {
//   let flag = false;
//   stock.forEach(function (stockObj) {
//     if (stockObj.quantity !== null && stockObj.quantity !== 0) {
//       flag = true;
//       setDefaultValue("Select a Size!");
//     }
//   });
//   if (!flag || available === 0) {
//     setDefaultValue("Out of Stock!");
//   }
// }, [stock]);
