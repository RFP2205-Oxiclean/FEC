import React, {useState, useEffect} from 'react';
import {createCloudinaryThumbnailURL, createCloudinaryDisplayURL} from '/src/services/Cloudinary.js';
import axios from 'axios';

const StyleObjectThumbnail = ( {viewIndex, setHoverInfo, setOnHover, setViewIndex, resetActiveImageIndex, index, styleClickHandler, styleObject} ) => {

  let handleClick = function() {
    setViewIndex(index);
    styleClickHandler(index);
    resetActiveImageIndex()
  }

  return <div className="style-object-thumbnail-container">
    <div
    onClick={() => {handleClick()}}
    className={viewIndex === index ? "style-object-thumbnail-active" : "style-object-thumbnail"}
    onMouseEnter={() => { styleClickHandler(index); setOnHover(true); setHoverInfo( {sale_price: styleObject.sale_price, original_price: styleObject.original_price, name: styleObject.name })}}
    onMouseLeave={() => { styleClickHandler(viewIndex); setOnHover(false); }}
  >
    <img style={{borderRadius: "50%"}} src={createCloudinaryThumbnailURL(styleObject?.photos[0].thumbnail_url)}></img>
  </div>
  </div>
}


export default StyleObjectThumbnail;