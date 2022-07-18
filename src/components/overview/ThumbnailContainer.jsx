import React, { useState, useEffect } from "react";
import { createCloudinaryThumbnailURL } from "/src/services/Cloudinary.js";
import OverlayThumbnail from "./OverlayThumbnail.jsx";
import ThumbnailDecrement from "./ThumbnailDecrement.jsx";
import ThumbnailIncrement from "./ThumbnailIncrement.jsx";
import usePrevious from "/src/components/commonComponents/usePreviousHook.jsx";

const ThumbnailContainer = ({ photos, activeThumbnailIndex, setActiveThumbnailIndex }) => {
  let [startEnd, setStartEnd] = useState([0, 7]);
  let [hideDown, setHideDown] = useState(false);
  let [hideUp, setHideUp] = useState(true);
  let prevActiveIndex = usePrevious(activeThumbnailIndex);
  console.log("prevActiveIndex: ", prevActiveIndex);

  useEffect(() => {
    if (activeThumbnailIndex < 7) {
      setStartEnd([0, Math.min(7, photos?.length)]);
    } else if (activeThumbnailIndex + 7 <= photos.length) {
      setStartEnd([activeThumbnailIndex, activeThumbnailIndex + 7]);
    } else if (activeThumbnailIndex + 7 > photos.length) {
      setStartEnd([Math.max(0, photos.length - 7), photos.length]);
    }
  }, [photos]);

  let activeThumbnails = function (arr) {
    return arr.slice(startEnd[0], startEnd[1]);
  };

  useEffect(() => {
    if (prevActiveIndex > activeThumbnailIndex && startEnd[0] !== 0) {
      setStartEnd([startEnd[0] - 1, startEnd[1] - 1]);
      console.log("going up");
    } else if (prevActiveIndex < activeThumbnailIndex && startEnd[1] !== photos.length - 1) {
      if (startEnd[1] + startEnd[0] === 7 && activeThumbnailIndex >= startEnd[1]) {
        setStartEnd([startEnd[0] + 1, startEnd[1] + 1]);
      }
      console.log("going down");
    }
  }, [activeThumbnailIndex]);

  // let upScrollClick = function () {
  //   setStartEnd([startEnd[0] - 1, startEnd[1] - 1]);
  // };

  // let downScrollClick = function () {
  //   setStartEnd([startEnd[0] + 1, startEnd[1] + 1]);
  // };

  let handleScrollDown = function () {
    console.log("up", startEnd[1], photos.length);

    if (startEnd[1] === photos.length) {
      setHideDown(true);
    }
    setStartEnd([startEnd[0] + 1, startEnd[1] + 1]);
  };

  let handleScrollUp = function () {
    if (startEnd[0] === 0) {
      setHideUp(true);
    }
    setStartEnd([startEnd[0] - 1, startEnd[1] - 1]);
  };

  return (
    <div className="overview-thumbnail-container">
      <ThumbnailDecrement startEnd={startEnd} callback={handleScrollUp} hidden={hideUp}></ThumbnailDecrement>
      {activeThumbnails(photos).map(function (photoObject, i) {
        if (photoObject.thumbnail_url === null) {
          return;
        }
        return (
          <OverlayThumbnail
            image={photoObject.thumbnail_url}
            active={activeThumbnailIndex === photoObject.trueIndex}
            key={photoObject.thumbnail_url + photoObject.thumbnail_url}
            trueIndex={photoObject?.trueIndex}
            setActiveThumbnailIndex={setActiveThumbnailIndex}
            backup={photoObject.url}></OverlayThumbnail>
        );
      })}
      <ThumbnailIncrement end={photos.length} startEnd={startEnd} callback={handleScrollDown} hidden={hideDown}></ThumbnailIncrement>
    </div>
  );
};

export default ThumbnailContainer;
