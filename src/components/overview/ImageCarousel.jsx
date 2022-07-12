import React, {useState, useEffect} from 'react';
import {createCloudinaryDisplayURL} from '/src/services/Cloudinary.js';
import ThumbnailContainer from './ThumbnailContainer.jsx';
import axios from 'axios';


const ImageCarousel = ( {activeStyleObject} ) => {

  let [activeImageIndex, setActiveImageIndex] = useState(0);

  let x = createCloudinaryDisplayURL(activeStyleObject.photos[activeImageIndex].url)

  useEffect(() => {
    for (let i = 0; i < activeStyleObject.photos.length; i++) {
      axios.get(createCloudinaryDisplayURL(activeStyleObject.photos[i].url))
    }
  }, [])

  let changeImage = function(index) {
    setActiveImageIndex(index);
    // axios.get(activeStyleObject.photos[index].url)
    // .then(() => {
    //   setActiveImageIndex(index);
    // })
  }

  console.log(activeStyleObject)
  return <div style={{backgroundImage: `url(${x}`, width: "1200px", height: "900px"}}>
    <ThumbnailContainer changeImage={changeImage}></ThumbnailContainer>
    {/* <img styles={{position: "absolute", top: "0"}}src={createCloudinaryDisplayURL(activeStyleObject.photos[0].url)}></img> */}
  </div>
}

export default ImageCarousel;