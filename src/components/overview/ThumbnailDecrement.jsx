import React, { useState, useEffect } from "react";

const ThumbnailDecrement = ({ callback, displayArr, magnified }) => {
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
      onClick={() => {
        callback();
      }}
      style={
        hidden || magnified
          ? { visibility: "hidden", position: "relative", height: "35px", width: "35px" }
          : {
              position: "relative",
              top: "0",
              display: "flex",
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
      <i style={{ color: "black" }} className="fa-solid fa-angles-up"></i>
    </div>
  );
};

export default ThumbnailDecrement;
