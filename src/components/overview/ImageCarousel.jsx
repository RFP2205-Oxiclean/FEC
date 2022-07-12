import React, {useState, useEffect} from 'react';
import {createCloudinaryDisplayURL} from '/src/services/Cloudinary.js';
import ThumbnailContainer from './ThumbnailContainer.jsx';


const ImageCarousel = ( {activeStyleObject} ) => {

  let [activeImageIndex, setActiveImageIndex] = useState(0);

  let x = createCloudinaryDisplayURL(activeStyleObject.photos[0].url)

  console.log(activeStyleObject)
  return <div style={{backgroundImage: `url(${x}`, width: "1200px", height: "900px"}}>
    <ThumbnailContainer></ThumbnailContainer>
    {/* <img styles={{position: "absolute", top: "0"}}src={createCloudinaryDisplayURL(activeStyleObject.photos[0].url)}></img> */}
  </div>
}

export default ImageCarousel;