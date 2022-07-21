import React from "react";

const BottomInformation = ({ description }) => {
  return (
    <div className="overview-bottom-info">
      <div style={{ width: "95%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span style={{ display: "flex", fontSize: "20px" }}>{description}</span>
      </div>
      <div style={{ width: "5%", height: "100%", display: "flex" }}></div>
    </div>
  );
};

export default BottomInformation;
