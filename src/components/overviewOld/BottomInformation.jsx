import React from "react";

const BottomInformation = (props) => {
  return (
    <div className="">
      <div style={{ display: "flex", width: "200px", float: "right" }}>
        <div
          className="i-tag-container"
          style={{
            display: "flex",
            width: "15%",
            height: "100%",
            fontSize: "30px",
            justifyContent: "center",
            margin: "auto",
            color: "#1DA1F2",
          }}>
          <i className="fab fa-twitter"></i>
        </div>
        <div
          className="i-tag-container"
          style={{
            display: "flex",
            width: "15%",
            height: "100%",
            fontSize: "30px",
            margin: "auto",
            justifyContent: "center",
            color: "#3b5998",
          }}>
          <i className="fa-brands fa-facebook-f"></i>
        </div>
        <div
          className="i-tag-container"
          style={{
            display: "flex",
            width: "15%",
            height: "100%",
            fontSize: "30px",
            margin: "auto",
            justifyContent: "center",
            color: "#E60023",
          }}>
          <i className="fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
};

export default BottomInformation;
