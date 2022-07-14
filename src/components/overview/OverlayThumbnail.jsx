import React, {useState, useEffect} from 'react';
import { createCloudinaryThumbnailURL} from '/src/services/Cloudinary.js';

const OverlayThumbnail = ( {active, changeImage, index, image} ) => {

  let handleClick = function() {
    changeImage(index)
    setActiveCSS(!clicked);
  }

  let [clicked, setActiveCSS] = useState(false)

  return <div onClick={() => {handleClick()}} className={active ? "overview-overlay-thumbnail-active" : "overview-overlay-thumbnail"}>
    <img height="74px" width="74px" src={createCloudinaryThumbnailURL(image)}></img>
  </div>
}


export default OverlayThumbnail;