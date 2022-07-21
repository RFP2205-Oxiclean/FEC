import React from "react";

const BottomInformation = ({ description }) => {
  return (
    <div className="overview-bottom-info">
      <div style={{ width: "95%", height: "100%", display: "inline-block", justifyContent: "center", alignItems: "center", float: "left" }}>
        <span style={{ fontSize: "25px", paddingLeft: "100px", paddingRight: "100px", overflowWrap: "break-word" }}>{description}</span>
      </div>
      <div style={{ width: "5%", height: "100%", display: "flex", flexDirection: "column", marginTop: "5px", marginLeft: "5px" }}>
        <div style={{ width: "100%", height: "40px" }}>
          <div
            className="i-tag-container"
            style={{
              paddingLeft: "15px",
              display: "flex",
              width: "15%",
              height: "100%",
              fontSize: "30px",
              justifyContent: "center",
              marginRight: "4px",
              color: "#1DA1F2",
            }}>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
        <div style={{ width: "100%", height: "40px" }}>
          <div
            className="i-tag-container"
            style={{
              paddingLeft: "15px",
              display: "flex",
              width: "15%",
              height: "100%",
              fontSize: "30px",
              justifyContent: "center",
              marginRight: "4px",
              color: "#3b5998",
            }}>
            <i className="fa-brands fa-facebook-f"></i>
          </div>
        </div>
        <div style={{ width: "100%", height: "40px" }}>
          <div
            className="i-tag-container"
            style={{
              paddingLeft: "15px",
              display: "flex",
              width: "15%",
              height: "100%",
              fontSize: "30px",
              justifyContent: "center",
              marginRight: "4px",
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
