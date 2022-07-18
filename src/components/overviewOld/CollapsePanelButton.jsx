import React, { useState } from "react";

const CollapsePanelButton = ({ setIsHiding, isHiding, isHidden, setIsHidden }) => {
  let handleClick = function () {
    setIsHiding(!isHiding);
  };

  return (
    <div className="collapse-button-container">
      <button
        data-testid="collapseButton"
        onClick={() => {
          handleClick();
        }}
        className="collapse-panel-button">
        COLLAPSE
      </button>
    </div>
  );
};

export default CollapsePanelButton;
