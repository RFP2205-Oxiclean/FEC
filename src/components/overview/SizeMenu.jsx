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

export default SizeMenu;
