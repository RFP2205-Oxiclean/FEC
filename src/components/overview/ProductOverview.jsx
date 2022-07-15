import React, { useState, useEffect } from "react";
import { getProductById, getProductStylesById } from "../../controllers.js";
import CarouselContainer from "./CarouselContainer.jsx";

const ProductOverview = ({ handleSubmit, product_id }) => {
  let [entry, setEntry] = useState("");

  let handleClick = function () {
    console.log("firing", entry);
    handleSubmit(entry);
  };

  return (
    <div className="product-overview-container">
      <CarouselContainer key={product_id} product_id={product_id}></CarouselContainer>
      <div className="overview-product-info">Bottom Information</div>
      <input onChange={(e) => setEntry(e.target.value)}></input>
      <button onClick={() => handleClick(entry)}>SHOW ENTRY</button>
    </div>
  );
};

export default ProductOverview;
