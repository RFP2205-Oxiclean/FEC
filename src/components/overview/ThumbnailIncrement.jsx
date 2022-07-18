import React, { useState, useEffect } from "react";

const ThumbnailIncrement = ({ callback, startEnd, end }) => {
  let [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (startEnd[1] === end) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, startEnd);

  return (
    <div style={hidden ? { visibility: "hidden" } : { display: "flex", justifyContent: "center" }} className="thumbnail-increment">
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
