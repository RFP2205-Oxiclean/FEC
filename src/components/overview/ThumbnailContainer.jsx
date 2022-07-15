import React, { useState, useEffect } from "react";
import OverlayThumbnail from "./OverlayThumbnail.jsx";
import { ScrollUpButton, ScrollDownButton } from "./ScrollButtons.jsx";

const ThumbnailContainer = (props) => {
  let [startEnd, setStartEnd] = useState([0, 7]);

  useEffect(() => {
    setStartEnd([0, 7]);
  }, [props.photos]);

  let activeThumbnails = props.photos?.map(function (photoObject, i) {
    if (i >= props.activeImageIndex) {
      return;
    }
  });

  let activeThumbnails2 = function (arr) {
    return arr.slice(startEnd[0], startEnd[1]);
  };

  return (
    <div className="overview-thumbnail-container">
      <ScrollUpButton
        startEnd={startEnd}
        setStartEnd={setStartEnd}
      ></ScrollUpButton>
      {activeThumbnails2(props.photos)?.map(function (photoObject, i) {
        return (
          <OverlayThumbnail
            active={
              photoObject.trueIndex === props.activeImageIndex ? true : false
            }
            index={i}
            changeImage={props.changeImage}
            key={i}
            images={photoObject}
          ></OverlayThumbnail>
        );
      })}
      <ScrollDownButton
        startEnd={startEnd}
        setStartEnd={setStartEnd}
        finalIndex={props?.photos?.length - 1}
      ></ScrollDownButton>
    </div>
  );
};

export default ThumbnailContainer;
