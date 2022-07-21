import React, { useState } from "react";

const CollapseButton = ({ setIsHiding, isHiding, expanded, collapsePanel }) => {
  return (
    <div
      style={{ height: "20px", minHeight: "20px", lineHeight: "22px", position: "absolute", top: 0, marginTop: "5px", marginRight: "10px" }}
      data-testid="collapseButton"
      className={expanded ? "overview-hidden" : "collapse-button"}
      onClick={() => {
        setIsHiding(!isHiding);
      }}>
      {!collapsePanel ? "Collapse" : expanded ? "" : "Show"}
    </div>
  );
};

export default CollapseButton;
