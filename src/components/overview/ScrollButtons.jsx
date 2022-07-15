import React, { useState, useEffect } from "react";

export function ScrollUpButton({ isHidden, upScrollClick }) {
  return (
    <div
      style={isHidden ? { visibility: "hidden" } : { visibility: "visible" }}
      className="thumbnail-scroll-button-up"
      onClick={() => upScrollClick()}>
      Up
    </div>
  );
}

export function ScrollDownButton({ isHidden, downScrollClick }) {
  return (
    <div
      style={isHidden ? { visibility: "hidden" } : { visibility: "visible" }}
      className="thumbnail-scroll-button-down"
      onClick={() => {
        downScrollClick();
      }}>
      Down
    </div>
  );
}
