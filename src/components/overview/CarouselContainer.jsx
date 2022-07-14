import React, {useState, useEffect} from 'react';
import ImageCarousel from './ImageCarousel.jsx';
import ExpandedProductInfo from './ExpandedProductInfo.jsx';
import { createCloudinaryDisplayURL, createCloudinaryThumbnailURL } from '/src/services/Cloudinary.js';
import {getProductById, getProductStylesById} from '../../controllers.js';
import axios from 'axios';


const CarouselContainer = ( {product_id}) => {

  let [productInfo, setProductInfo] = useState({});
  let [styleObjects, setStyleObjects] = useState(([
    {
      style_id: '',
      photos: [
        {url: '', thumbnail_url: ''}
      ]
    }
  ]));
  let [activeDisplayIndex, setActiveDisplayIndex] = useState(0);

    useEffect(() => {
        getProductById(product_id)
        .then((infoObject) => {
            setProductInfo(infoObject);
        })
        getProductStylesById(product_id)
        .then((data) => {
            console.log(data);
            setStyleObjects(data)
            return data
        })
    }, []);


  let styleClickHandler = function(index) {
    setActiveDisplayIndex(index)
  }



  return <ImageCarousel product_id={product_id} styleClickHandler={styleClickHandler} styleObjects={styleObjects} productInfo={productInfo} activeStyleObject={styleObjects?.[activeDisplayIndex]}></ImageCarousel>

}


export default CarouselContainer;


// useEffect(() => {
//   styleObject?.photos.forEach(function(photoObject) {
//     axios.get(createCloudinaryDisplayURL(photoObject.url))
//     .then(() => {
//       axios.get(createCloudinaryDisplayURL(photoObject.thumbnail_url))

//     })
//   })
// }, [])