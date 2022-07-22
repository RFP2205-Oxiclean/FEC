import React from "react";

const BottomInformation = ({ description }) => {
  return (
    <div className="overview-bottom-info">
      <div
        style={{
          width: "80%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}>
        <span style={{ fontSize: "25px", paddingLeft: "100px", paddingRight: "100px", overflowWrap: "break-word" }}>{description}</span>
      </div>
      <div
        style={{
          position: "absolute",
          right: "0",
          width: "5%",
          height: "100%",
          display: "border-box",
          flexDirection: "column",
          padding: "10px",
          marginLeft: "auto",
        }}>
        <div style={{ width: "100%", height: "40px" }}>
          <div
            className="i-tag-container"
            style={{
              display: "flex",
              fontSize: "20px",
              justifyContent: "center",
              color: "#1DA1F2",
            }}>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
        <div style={{ width: "100%", height: "40px" }}>
          <div
            className="i-tag-container"
            style={{
              display: "flex",
              fontSize: "20px",
              justifyContent: "center",
              color: "#3b5998",
            }}>
            <i className="fa-brands fa-facebook-f"></i>
          </div>
        </div>
        <div style={{ width: "100%", height: "40px" }}>
          <div
            className="i-tag-container"
            style={{
              display: "flex",
              fontSize: "20px",
              justifyContent: "center",
              color: "#E60023",
            }}>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomInformation;
