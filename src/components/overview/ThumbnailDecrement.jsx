import React, { useState, useEffect } from "react";

const ThumbnailDecrement = ({ callback, displayArr }) => {
  let [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (displayArr[0] === 0) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [displayArr]);

  return (
    <div
      data-testid="thumbnail-decrement"
      style={hidden ? { visibility: "hidden" } : { display: "flex", justifyContent: "center" }}
      className="thumbnail-decrement">
      <button
        onClick={() => {
          callback();
        }}>
        Up
      </button>
    </div>
  );
};

export default ThumbnailDecrement;
