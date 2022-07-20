import React, { useState } from "react";

const CollapseButton = ({ setIsHiding, isHiding }) => {
  return (
    <button
      data-testid="collapseButton"
      className="collapse-button"
      onClick={() => {
        setIsHiding(!isHiding);
      }}>
      Collapse
    </button>
  );
};

export default CollapseButton;
