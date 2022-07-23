import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const MagnifyingGlass = ({ image, zoom, setExpanded, expanded, collapsePanel, setCollapsePanel, magnified, setMagnified }) => {
  let [left, setLeft] = useState(0);
  let [top, setTop] = useState(0);
  let [containerCoords, setContainerCoords] = useState([0, 0]);

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
      className={collapsePanel ? "show-plus" : "magnifying-glass-container"}
      onClick={() => {
        if (!collapsePanel) {
          setCollapsePanel(true);
        }
      }}>
      <div
        className={magnified ? "overview-image-container-minus" : ""}
        onMouseDown={(e) => {
          if (e.button === 0) {
            if (collapsePanel) {
              setMagnified(!magnified);
            }
          } else if (e.button === 1) {
            if (collapsePanel) {
              setCollapsePanel(false);
              setExpanded(false);
              setMagnified(false);
            } else if (!collapsePanel) {
              setCollapsePanel(true);
              setExpanded(true);
              setMagnified(true);
            }
          }
        }}
        onMouseLeave={() => {
          setMagnified(false);
        }}
        onMouseMove={(e) => {
          getCoords(e);
        }}
        onMouseEnter={(e) => {
          setContainerCoords([e.currentTarget.getBoundingClientRect().top, e.currentTarget.getBoundingClientRect().left]);
        }}>
        <div style={magnified ? { opacity: 0.8 } : { opacity: 1 }}>
          <img draggable="false" src={image}></img>
        </div>
        {magnified ? (
          <div
            className="magnifying-glass"
            style={{
              backgroundImage: `url(${image})`,
              position: "absolute",
              left: left - 240,
              top: top - 240,
              height: "480px",
              width: "480px",
              border: "2px solid black",
              backgroundSize: `${1100 * 2.5}px ${733 * 2.5}px`,
              backgroundPositionX: `${-left * 2.5 + 240}px`,
              backgroundPositionY: `${-top * 2.5 + 240}px`,
              pointerEvents: "none",
            }}></div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default MagnifyingGlass;
