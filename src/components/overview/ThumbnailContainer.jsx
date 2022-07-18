import React, { useState, useEffect } from "react";
import { createCloudinaryThumbnailURL } from "/src/services/Cloudinary.js";
import OverlayThumbnail from "./OverlayThumbnail.jsx";

const ThumbnailContainer = ({ photos, activeThumbnailIndex, setActiveThumbnailIndex }) => {
  let [startEnd, setStartEnd] = useState([0, 7]);

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

  let upScrollClick = function () {
    setStartEnd([startEnd[0] - 1, startEnd[1] - 1]);
  };

  let downScrollClick = function () {
    setStartEnd([startEnd[0] + 1, startEnd[1] + 1]);
  };

  return (
    <div className="overview-thumbnail-container">
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
      <button
        onClick={() => {
          console.log(photos);
        }}>
        PHOTOS
      </button>
    </div>
  );
};

export default ThumbnailContainer;
