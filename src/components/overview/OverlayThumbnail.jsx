import React, {useState, useEffect} from 'react';
import { createCloudinaryThumbnailURL} from '/src/services/Cloudinary.js';

const OverlayThumbnail = ( {active, changeImage, index, image} ) => {

  let handleClick = function() {
    changeImage(index)
    setActiveCSS(!clicked);
  }

  let [clicked, setActiveCSS] = useState(false)

  let unclickedStyle = {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    border: "2px solid black",
    padding: "5px",
    borderRadius: "4px",
  }

  // let clickedStyle = { ...unclickedStyle}

  let clickedStyle = {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    border: "2px solid black",
    padding: "5px",
    borderRadius: "4px",
    borderBottom: "5px solid red",
  }

  return <div onClick={() => {handleClick()}} className={active ? "overview-overlay-thumbnail-active" : "overview-overlay-thumbnail"}>
    <img height="74px" width="74px" src={createCloudinaryThumbnailURL(image)}></img>
  </div>
}


export default OverlayThumbnail;