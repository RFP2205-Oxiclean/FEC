import React, { useState } from "react";

const CollapseButton = ({ setIsHiding, isHiding }) => {
  return (
    <button
      className="collapse-button"
      onClick={() => {
        setIsHiding(!isHiding);
      }}>
      Collapse
    </button>
  );
};

export default CollapseButton;
