import React, {useState, useEffect} from 'react';
import ImageCarousel from './ImageCarousel.jsx';
import ExpandedProductInfo from './ExpandedProductInfo.jsx';
import {getProductById, getProductStylesById} from '../../controllers.js';


const CarouselContainer = ( {product_id}) => {

  let [productInfo, setProductInfo] = useState({});
  let [styleObjects, setStyleObjects] = useState([ {photos: [{url: '', thumbnail_url: ''}]}]);
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

  let styleClickHandler = function(index) {
    setActiveDisplayIndex(index)
  }



  return <ImageCarousel activeStyleObject={styleObjects[activeDisplayIndex]}></ImageCarousel>

}


export default CarouselContainer;