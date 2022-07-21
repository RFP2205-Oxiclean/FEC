import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const MagnifyingGlass = ({ image, zoom }) => {
  let [left, setLeft] = useState(0);
  let [top, setTop] = useState(0);
  let [containerCoords, setContainerCoords] = useState([0, 0]);
  const [enabled, setEnabled] = useState(false);

  const [appearing, setAppearing] = useState(true);

  let toggleAppear = function () {
    setAppearing(!appearing);
  };

  let getCoords = function (e) {
    let viewElement = e.currentTarget;
    let top = viewElement.getBoundingClientRect().top;
    let left = viewElement.getBoundingClientRect().left;
    let containerCoords = [top, left];
    let x = e.pageX - left - window.pageXOffset;
    let y = e.pageY - top - window.pageYOffset;
    setLeft(x);
    setTop(y);
  };

  let fadeOut = function () {
    style = {};
  };

  return (
    <div
      className={enabled ? "magnifying-glass-container-no-cursor" : "magnifying-glass-container"}
      onMouseDown={(e) => {
        if (e.button === 0) {
          setEnabled(!enabled);
        }
      }}
      onMouseLeave={() => {
        setEnabled(false);
      }}
      onMouseMove={(e) => {
        getCoords(e);
      }}
      onMouseEnter={(e) => {
        setContainerCoords([e.currentTarget.getBoundingClientRect().top, e.currentTarget.getBoundingClientRect().left]);
      }}>
      <div style={enabled ? { opacity: 0.8 } : { opacity: 1 }}>
        <img src={image}></img>
      </div>
      {enabled ? (
        <div
          className="magnifying-glass"
          style={{
            position: "absolute",
            left: left - 160,
            top: top - 160,
            height: "320px",
            width: "320px",
            opacity: "1",
            border: "2px solid black",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${1100 * 1.5}px ${733 * 1.5}px`,
            backgroundPositionX: `${-left * 1.5 + 160}px`,
            backgroundPositionY: `${-top * 1.5 + 160}px`,
          }}></div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MagnifyingGlass;
