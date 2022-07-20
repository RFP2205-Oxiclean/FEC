import React, { useState, useEffect } from "react";

const MagnifyingGlass = ({ image, zoom }) => {
  return (
    <div
      style={{
        position: "relative",
        height: height,
        width: width,
      }}>
      <img src={image} style={{ height: height, width: width }} alt={"img"} />
      <div></div>
    </div>
  );
};

export default MagnifyingGlass;
