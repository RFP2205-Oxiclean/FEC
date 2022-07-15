import React, { useState, useEffect } from "react";

export function ScrollUpButton({
  finalIndex,
  activeImageIndex,
  changeImage,
  startEnd,
  setStartEnd,
}) {
  let handleScrollUp = function () {
    setStartEnd([startEnd[0] - 1, startEnd[1] - 1]);
  };

  if (startEnd[0] > 0) {
    return (
      <div
        onClick={() => handleScrollUp()}
        style={{ height: "10px", width: "100px", textAlign: "center" }}
      >
        Up
      </div>
    );
  }
}

export function ScrollDownButton({
  finalIndex,
  activeImageIndex,
  changeImage,
  startEnd,
  setStartEnd,
}) {
  let handleScrollDown = function () {
    setStartEnd([startEnd[0] + 1, startEnd[1] + 1]);
  };
  if (startEnd[1] < finalIndex) {
    return (
      <div
        onClick={() => {
          handleScrollDown();
        }}
        style={{
          height: "10px",
          width: "100px",
          textAlign: "center",
          marginTop: "auto",
        }}
      >
        Down
      </div>
    );
  }
}
