import React, {useState, useEffect} from 'react';
import {createCloudinaryDisplayURL} from '/src/services/Cloudinary.js';
import ThumbnailContainer from './ThumbnailContainer.jsx';
import axios from 'axios';
import ExpandedProductInfo from './ExpandedProductInfo.jsx';
import CollapsePanelButton from './CollapsePanelButton.jsx';
import {prefetch} from '/src/controllers.js';


const ImageCarousel = ( {product_id, styleClickHandler, styleObjects, activeStyleObject, productInfo} ) => {

  let [activeImageIndex, setActiveImageIndex] = useState(0);

  let cloud_url = createCloudinaryDisplayURL(activeStyleObject?.photos[activeImageIndex].url)

  let changeImage = function(index) {
    setActiveImageIndex(index);
  }

  if (styleObjects.length > 1) {
    prefetch(styleObjects, product_id)
  }

  // redundant?
  let resetActiveImageIndex = function(index=0) {
    setActiveImageIndex(index);
  }

  return <div style={{backgroundImage: `url(${cloud_url}`, width: "1600px", height: "1200"}} className="overview-image-container">
    <ThumbnailContainer  activeImageIndex={activeImageIndex} photos={activeStyleObject?.photos} changeImage={changeImage}></ThumbnailContainer>
    <ExpandedProductInfo resetActiveImageIndex={resetActiveImageIndex} styleClickHandler={styleClickHandler} productInfo={productInfo} styleObjects={styleObjects}></ExpandedProductInfo>
  </div>
}

export default ImageCarousel;