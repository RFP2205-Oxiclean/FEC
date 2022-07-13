import React, {useState, useEffect} from 'react';
import ImageCarousel from './ImageCarousel.jsx';
import ExpandedProductInfo from './ExpandedProductInfo.jsx';
import { createCloudinaryDisplayURL } from '/src/services/Cloudinary.js';
import {getProductById, getProductStylesById} from '../../controllers.js';
import axios from 'axios';


const CarouselContainer = ( {product_id}) => {

  let [productInfo, setProductInfo] = useState({});
  let [styleObjects, setStyleObjects] = useState([ {
    photos: [{url: '', thumbnail_url: ''}],
    name: '',

  }]);
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
        })
    }, []);

  useEffect(() => {
    styleObjects[activeDisplayIndex].photos.forEach(function(stylePhotoObject) {
      axios.get(createCloudinaryDisplayURL(stylePhotoObject.url))
    })
  })

  let styleClickHandler = function(index) {
    setActiveDisplayIndex(index)
  }



  return <ImageCarousel styleObjects={styleObjects} productInfo={productInfo} activeStyleObject={styleObjects[activeDisplayIndex]}></ImageCarousel>

}


export default CarouselContainer;