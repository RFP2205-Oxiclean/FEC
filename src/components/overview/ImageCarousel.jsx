import React, {useState, useEffect} from 'react';
import {createCloudinaryDisplayURL} from '/src/services/Cloudinary.js';
import ThumbnailContainer from './ThumbnailContainer.jsx';
import axios from 'axios';


const ImageCarousel = ( {activeStyleObject} ) => {

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
  return <div style={{backgroundImage: `url(${x}`, width: "1200px", height: "900px"}}>
    <ThumbnailContainer activeImageIndex={activeImageIndex} photos={activeStyleObject.photos} changeImage={changeImage}></ThumbnailContainer>
    <button onClick = {() => {console.log(activeStyleObject.photos)}}></button>
  </div>
}

export default ImageCarousel;