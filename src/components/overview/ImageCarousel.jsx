import React, {useState, useEffect} from 'react';
import {createCloudinaryDisplayURL} from '/src/services/Cloudinary.js';
import ThumbnailContainer from './ThumbnailContainer.jsx';
import axios from 'axios';
import ExpandedProductInfo from './ExpandedProductInfo.jsx';


const ImageCarousel = ( {styleClickHandler, styleObjects, activeStyleObject, productInfo} ) => {

  let [activeImageIndex, setActiveImageIndex] = useState(0);

  let cloud_url = createCloudinaryDisplayURL(activeStyleObject?.photos[activeImageIndex].url)

  let changeImage = function(index) {
    setActiveImageIndex(index);
  }

  // change on


  let resetActiveImageIndex = function() {
    setActiveImageIndex(0);
  }

  return <div style={{backgroundImage: `url(${cloud_url}`, width: "1600px", height: "800"}} className="overview-image-container">
    <ThumbnailContainer  activeImageIndex={activeImageIndex} photos={activeStyleObject?.photos} changeImage={changeImage}></ThumbnailContainer>
    <ExpandedProductInfo resetActiveImageIndex={resetActiveImageIndex} styleClickHandler={styleClickHandler} productInfo={productInfo} styleObjects={styleObjects}></ExpandedProductInfo>
    <button onClick = {() => {console.log(activeStyleObject?.photos)}}></button>
  </div>
}

export default ImageCarousel;