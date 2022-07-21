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
      className={magnified ? "overview-hidden" : "scroll-down"}
      onClick={() => {
        callback();
      }}
      style={
        hidden || magnified
          ? { visibility: "hidden" }
          : {
              display: "flex",
              top: "50%",
              height: "35px",
              width: "35px",
              overflow: "visible",
              fontSize: "30px",
              borderRadius: "20%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "10px",
              justifyContent: "center",
            }
      }>
      <i style={{ color: "black" }} className="fa-solid fa-angles-down"></i>
    </div>
  );
};

export default ThumbnailIncrement;
