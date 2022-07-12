import React, {useState, useEffect} from 'react';
import {createCloudinaryDisplayURL} from '/src/services/Cloudinary.js';


const ImageCarousel = ( {activeStyleObject} ) => {

  let [activeImageIndex, setActiveImageIndex] = useState(0);



  console.log(activeStyleObject)
  return <div className="overview-image-container">
    <img src={createCloudinaryDisplayURL(activeStyleObject.photos[0].url)}></img>
  </div>
}

export default ImageCarousel;