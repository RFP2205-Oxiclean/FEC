import React, {useState} from 'react';

const CollapsePanelButton = ({isHidden, setIsHidden}) => {

  let handleClick = function() {
    setIsHidden(!isHidden)
  }

  return <div style={{height: "2%", marginRight: "20px"}}>
    <button onClick={() => {handleClick()}} className="collapse-panel-button">COLLAPSE</button>
  </div>
}


export default CollapsePanelButton;