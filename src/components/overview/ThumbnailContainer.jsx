import React, { useState, useEffect } from "react";
import OverlayThumbnail from "./OverlayThumbnail.jsx";
import { ScrollUpButton, ScrollDownButton } from "./ScrollUpButton.jsx";

const ThumbnailContainer = (props) => {
  let activeThumbnails = props.photos?.map(function (photoObject, i) {
    if (i >= props.activeImageIndex) {
      return;
    }
  });

  return (
    <div className="overview-thumbnail-container">
      <ScrollUpButton></ScrollUpButton>
      {props.photos?.map(function (photoObject, i) {
        if (i >= props.activeImageIndex) {
          return (
            <OverlayThumbnail
              active={i === props.activeImageIndex ? true : false}
              index={i}
              changeImage={props.changeImage}
              key={i}
              image={photoObject?.thumbnail_url}
            ></OverlayThumbnail>
          );
        }
      })}
      <ScrollDownButton></ScrollDownButton>
    </div>
  );
};

export default ThumbnailContainer;
