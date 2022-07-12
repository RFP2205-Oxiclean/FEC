import React, {useState, useEffect} from 'react';

const OverlayThumbnail = ( {changeImage, index} ) => {

  let handleClick = function() {
    changeImage(index)
  }

  return <div onClick={() => {handleClick()}} className="overview-overlay-thumbnail">
    <img height="74px" width="74px" src={"https://via.placeholder.com/500"}></img>
  </div>
}


export default OverlayThumbnail;