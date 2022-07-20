import React from "react";
import StyleObjectThumbnail from "./StyleObjectThumbnail.jsx";

const StylesContainer = ({ styleObjects, activeDisplayIndex, setHoverIndex, setActiveDisplayIndex }) => {
  return (
    <div className="overview-styles-container">
      {styleObjects.map(function (styleObject, i) {
        return (
          <StyleObjectThumbnail
            setActiveDisplayIndex={setActiveDisplayIndex}
            setHoverIndex={setHoverIndex}
            styleObject={styleObject}
            key={styleObject.style_id}
            activeDisplayIndex={activeDisplayIndex}
            index={i}></StyleObjectThumbnail>
        );
      })}
    </div>
  );
};

export default StylesContainer;
