import React, { useState } from "react";

const CollapseButton = ({ setIsHiding, isHiding, magnified }) => {
  return (
    <button
      data-testid="collapseButton"
      className={magnified ? "overview-hidden" : "collapse-button"}
      onClick={() => {
        setIsHiding(!isHiding);
      }}>
      Collapse
    </button>
  );
};

export default CollapseButton;
