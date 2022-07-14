import React, {useState} from 'react';

const CollapsePanelButton = ({isHidden, setIsHidden}) => {

  let handleClick = function() {
    setIsHidden(!isHidden)
  }

  return <div className="collapse-button-container">
    <button data-testid='collapseButton' onClick={() => {handleClick()}} className="collapse-panel-button">COLLAPSE</button>
  </div>
}


export default CollapsePanelButton;