import React, { useState } from "react";

const AddToCart = ({ handleCartClick }) => {
  return (
    <div onClick={handleCartClick} className="add-to-cart">
      Add to Cart
    </div>
  );
};

export default AddToCart;
