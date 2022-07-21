import React, { useState, useEffect } from "react";
import { createCloudinaryThumbnailURL } from "../../services/Cloudinary.js";
import OverlayThumbnail from "./OverlayThumbnail.jsx";
import ThumbnailDecrement from "./ThumbnailDecrement.jsx";
import ThumbnailIncrement from "./ThumbnailIncrement.jsx";
import usePrevious from "../../components/commonComponents/usePreviousHook.jsx";
import { CSSTransition } from "react-transition-group";

const ThumbnailContainer = ({ photos, activeThumbnailIndex, setActiveThumbnailIndex }) => {
  let [startEnd, setStartEnd] = useState([0, 7]);
  let [hideDown, setHideDown] = useState(true);
  let [hideUp, setHideUp] = useState(false);
  let [displayArr, setDisplayArr] = useState([]);
  let prevActiveIndex = usePrevious(activeThumbnailIndex);

  useEffect(() => {
    // if (activeThumbnailIndex > 6) {
    //   let x = Array(7).fill(0);
    //   let newArr = x.map(function (el, i) {
    //     return activeDisplayIndex - 6 + i;
    //   });
    //   setDisplayArr(newArr);
    // } else {
    //   let x = Array(Math.min(photos?.length, 6)).fill(0);
    //   let newArr = x.map(function (el, i) {
    //     return i;
    //   });
    //   setDisplayArr(newArr);
    // }
    if (photos.length > 7) {
      setHideDown(true);
    }
    let fullArr = Array(photos.length)
      .fill(0)
      .map(function (e, i) {
        return i;
      });
    setDisplayArr(fullArr.slice(0, 7));

    // if (activeThumbnailIndex < 7) {
    //   setStartEnd([0, Math.min(7, photos?.length)]);
    // } else if (activeThumbnailIndex + 7 <= photos.length) {
    //   setStartEnd([activeThumbnailIndex, activeThumbnailIndex + 7]);
    // } else if (activeThumbnailIndex + 7 > photos.length) {
    //   setStartEnd([Math.max(0, photos.length - 7), photos.length]);
    // }
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

  // let upScrollClick = function () {
  //   setStartEnd([startEnd[0] - 1, startEnd[1] - 1]);
  // };

  // let downScrollClick = function () {
  //   setStartEnd([startEnd[0] + 1, startEnd[1] + 1]);
  // };

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

  return (
    <div className="overview-thumbnail-container" data-testid="thumbnail-container">
      <ThumbnailDecrement displayArr={displayArr} callback={handleScrollUp}></ThumbnailDecrement>
      {displayArr?.map(function (trueIndex) {
        for (let i = 0; i < photos.length; i++) {
          if (photos[i].trueIndex === trueIndex) {
            return (
              <OverlayThumbnail
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
      <ThumbnailIncrement end={photos.length} displayArr={displayArr} callback={handleScrollDown}></ThumbnailIncrement>
    </div>
  );
};

export default ThumbnailContainer;
