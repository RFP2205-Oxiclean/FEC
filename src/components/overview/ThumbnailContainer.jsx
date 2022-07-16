import React, { useState, useEffect, useRef } from "react";
import OverlayThumbnail from "./OverlayThumbnail.jsx";
import { ScrollUpButton, ScrollDownButton } from "./ScrollButtons.jsx";

const ThumbnailContainer = (props) => {
  let [startEnd, setStartEnd] = useState([0, 7]);

  useEffect(() => {
    let activeThumbnail = props.activeStyleObject.activeDisplayThumbnail;
    if (activeThumbnail < 7) {
      setStartEnd([0, Math.min(7, props.photos?.length)]);
    } else if (activeThumbnail + 7 <= props.photos.length) {
      setStartEnd([activeThumbnail, activeThumbnail + 7]);
    } else if (activeThumbnail + 7 > props.photos.length) {
      setStartEnd([Math.max(0, props.photos.length - 7), props.photos.length]);
    }
  }, [props.photos]);

  let activeThumbnails2 = function (arr) {
    return arr.slice(startEnd[0], startEnd[1]);
  };

  let upScrollClick = function () {
    setStartEnd([startEnd[0] - 1, startEnd[1] - 1]);
  };

  let downScrollClick = function () {
    setStartEnd([startEnd[0] + 1, startEnd[1] + 1]);
  };

  return (
    <>
      <ScrollUpButton isHidden={startEnd[0] === 0} upScrollClick={upScrollClick}></ScrollUpButton>
      <div className="overview-thumbnail-container">
        {activeThumbnails2(props.photos)?.map(function (photoObject, i) {
          return (
            <OverlayThumbnail
              activeStyleObject={props.activeStyleObject}
              changeActiveThumbnail={props.changeActiveThumbnail}
              active={photoObject.trueIndex === props.activeStyleObject.activeDisplayThumbnail ? true : false}
              index={photoObject.trueIndex}
              changeImage={props.changeImage}
              key={i}
              images={photoObject}></OverlayThumbnail>
          );
        })}
      </div>
      <ScrollDownButton isHidden={startEnd[1] >= props.photos?.length} downScrollClick={downScrollClick}></ScrollDownButton>
    </>
  );
};

export default ThumbnailContainer;
