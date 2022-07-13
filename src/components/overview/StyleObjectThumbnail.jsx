import React, {useState, useEffect} from 'react';
import {createCloudinaryThumbnailURL, createCloudinaryDisplayURL} from '/src/services/Cloudinary.js';
import axios from 'axios';

const StyleObjectThumbnail = ( {setHoverInfo, setOnHover, setViewIndex, resetActiveImageIndex, index, styleClickHandler, styleObject} ) => {

  useEffect(() => {
    styleObject.photos.forEach(function(photoObject) {
      axios.get(createCloudinaryDisplayURL(photoObject.url))
      .then(() => {
        axios.get(createCloudinaryDisplayURL(photoObject.thumbnail_url))

      })
    })
  }, [])

  // useEffect(() => {
  //   return () => {
  //     props.resetActiveImageIndex();
  //   }
  // })

  let handleClick = function() {
    setViewIndex(index);
    styleClickHandler(index);
    resetActiveImageIndex()
  }

  return <div
    onClick={() => {handleClick()}}
    className="style-object-thumbnail"
    onMouseEnter={() => { setOnHover(true); setHoverInfo( {sale_price: styleObject.sale_price, original_price: styleObject.original_price, name: styleObject.name })}}
    onMouseLeave={() => { setOnHover(false); }}
  >
    <img src={createCloudinaryThumbnailURL(styleObject.photos[0].thumbnail_url)}></img>
  </div>
}


export default StyleObjectThumbnail;