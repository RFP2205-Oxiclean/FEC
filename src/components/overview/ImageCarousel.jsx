import React, {useState, useEffect} from 'react';
import {createCloudinaryDisplayURL} from '/src/services/Cloudinary.js';
import ThumbnailContainer from './ThumbnailContainer.jsx';
import axios from 'axios';
import ExpandedProductInfo from './ExpandedProductInfo.jsx';


const ImageCarousel = ( {activeStyleObject, productInfo} ) => {

  let [activeImageIndex, setActiveImageIndex] = useState(0);

  let x = createCloudinaryDisplayURL(activeStyleObject.photos[activeImageIndex].url)


  let changeImage = function(index) {
    setActiveImageIndex(index);
    // axios.get(activeStyleObject.photos[index].url)
    // .then(() => {
    //   setActiveImageIndex(index);
    // })
  }

  console.log(activeStyleObject)
  return <div style={{backgroundImage: `url(${x}`, width: "1600px", height: "800"}} className="overview-image-container">
    <ThumbnailContainer activeImageIndex={activeImageIndex} photos={activeStyleObject.photos} changeImage={changeImage}></ThumbnailContainer>
    <ExpandedProductInfo productInfo={productInfo}></ExpandedProductInfo>
    <button onClick = {() => {console.log(activeStyleObject.photos)}}></button>
  </div>
}

export default ImageCarousel;