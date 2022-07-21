import React, { useState, useEffect } from "react";
import { createCloudinaryThumbnailURL } from "../../services/Cloudinary.js";
import OverlayThumbnail from "./OverlayThumbnail.jsx";
import ThumbnailDecrement from "./ThumbnailDecrement.jsx";
import ThumbnailIncrement from "./ThumbnailIncrement.jsx";
import { CSSTransition } from "react-transition-group";

const ThumbnailContainer = ({ photos, activeThumbnailIndex, setActiveThumbnailIndex, collapsePanel, expanded, magnified }) => {
  let [startEnd, setStartEnd] = useState([0, 7]);
  let [hideDown, setHideDown] = useState(true);
  let [hideUp, setHideUp] = useState(false);
  let [displayArr, setDisplayArr] = useState([]);

  useEffect(() => {
    if (photos.length > 7) {
      setHideDown(true);
    }
    let fullArr = Array(photos.length)
      .fill(0)
      .map(function (e, i) {
        return i;
      });
    setDisplayArr(fullArr.slice(0, 7));
  }, [photos]);

  useEffect(() => {
    if (displayArr[displayArr.length - 1] + 1 === photos.length) {
      setHideDown(true);
    }
  }, [displayArr]);

  useEffect(() => {
    if (activeThumbnailIndex < displayArr[0]) {
      let x = Array(7)
        .fill(0)
        .map(function (e, i) {
          return i + activeThumbnailIndex;
        });
      setDisplayArr(x);
    } else if (activeThumbnailIndex > displayArr[displayArr.length - 1]) {
      let x = Array(7)
        .fill(0)
        .map(function (e, i) {
          return activeThumbnailIndex - 6 + i;
        });
      setDisplayArr(x);
    }
  }, [activeThumbnailIndex]);

  let handleScrollDown = function () {
    let newDisplay = displayArr.map(function (n) {
      return n + 1;
    });
    setDisplayArr(newDisplay);
  };

  let handleScrollUp = function () {
    let newDisplay = displayArr.map(function (n) {
      return n - 1;
    });
    setDisplayArr(newDisplay);
  };

  if (magnified) {
    return;
  }

  return (
    <div className={collapsePanel ? "overview-collapse-thumbnail-container" : "overview-thumbnail-container"} data-testid="thumbnail-container">
      <button
        className={magnified ? "overview-hidden" : "scroll-left"}
        onClick={() => {
          console.log(magnified);
          decrementThumbnailIndex();
        }}
        style={
          activeThumbnailIndex === 0
            ? { visibility: "hidden", position: "absolute", top: "50%", left: "15%" }
            : { position: "absolute", top: "50%", left: "15%" }
        }
        className="scroll-left">
        Left
      </button>
      <ThumbnailDecrement magnified={magnified} displayArr={displayArr} callback={handleScrollUp}></ThumbnailDecrement>
      {displayArr?.map(function (trueIndex) {
        for (let i = 0; i < photos.length; i++) {
          if (photos[i].trueIndex === trueIndex) {
            return (
              <OverlayThumbnail
                expanded={expanded}
                collapsePanel={collapsePanel}
                image={photos[i].thumbnail_url}
                active={activeThumbnailIndex === photos[i].trueIndex}
                key={photos[i].thumbnail_url + photos[i].thumbnail_url}
                trueIndex={photos[i]?.trueIndex}
                setActiveThumbnailIndex={setActiveThumbnailIndex}
                backup={photos[i].url}></OverlayThumbnail>
            );
          }
        }
      })}
      <ThumbnailIncrement magnified={magnified} end={photos.length} displayArr={displayArr} callback={handleScrollDown}></ThumbnailIncrement>
    </div>
  );
};

export default ThumbnailContainer;
