import React, { useState, useEffect } from "react";

const ThumbnailIncrement = ({ callback, startEnd, end, displayArr, magnified }) => {
  let [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (displayArr[displayArr.length - 1] + 1 === end) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [displayArr]);

  return (
    <div
      data-testid="thumbnail-increment"
      style={hidden || magnified ? { visibility: "hidden" } : { display: "flex", justifyContent: "center" }}
      className={"thumbnail-increment"}>
      <button
        onClick={() => {
          callback();
        }}>
        Down
      </button>
    </div>
  );
};

export default ThumbnailIncrement;
