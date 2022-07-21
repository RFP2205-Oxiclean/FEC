import React, { useState } from "react";

const CollapseButton = ({ setIsHiding, isHiding }) => {
  return (
    <button
      data-testid="collapseButton"
      className="small-interactive-collapse-button"
      onClick={() => {
        setIsHiding(!isHiding);
      }}>
      Collapse
    </button>
  );
};

export default CollapseButton;
