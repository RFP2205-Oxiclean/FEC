import React, { useState, useEffect } from "react";
import ImageCarousel from "./ImageCarousel.jsx";
import ExpandedProductInfo from "./ExpandedProductInfo.jsx";
import { createCloudinaryDisplayURL, createCloudinaryThumbnailURL } from "/src/services/Cloudinary.js";
import { getProductById, getProductStylesById } from "../../controllers.js";
import axios from "axios";

const CarouselContainer = ({ product_id }) => {
  let [productInfo, setProductInfo] = useState({});
  let [styleObjects, setStyleObjects] = useState([
    {
      activeDisplayThumbnail: 0,
      style_id: "",
      photos: [{ url: "", thumbnail_url: "" }],
      skus: [],
    },
  ]);

  let [activeDisplayIndex, setActiveDisplayIndex] = useState(0);

  useEffect(() => {
    getProductById(product_id).then((infoObject) => {
      setProductInfo(infoObject);
    });
    getProductStylesById(product_id).then((data) => {
      data = data.map(function (styleObject) {
        return { ...styleObject, activeDisplayThumbnail: 0 };
      });
      console.log(data);
      setStyleObjects(data);
    });
  }, []);

  let styleClickHandler = function (index) {
    setActiveDisplayIndex(index);
  };

  let changeActiveThumbnail = function (activeStyleObject, thumbnailTrueIndex) {
    let newActiveStyleObject = { ...activeStyleObject };
    newActiveStyleObject.activeDisplayThumbnail = thumbnailTrueIndex;
    let newStyleObjects = [...styleObjects].slice();
    for (let i = 0; i < newStyleObjects.length; i++) {
      if (newActiveStyleObject.style_id === newStyleObjects[i].style_id) {
        newStyleObjects[i] = newActiveStyleObject;
        break;
      }
    }
    setStyleObjects(newStyleObjects);
  };

  return (
    <ImageCarousel
      changeActiveThumbnail={changeActiveThumbnail}
      product_id={product_id}
      styleClickHandler={styleClickHandler}
      styleObjects={styleObjects}
      productInfo={productInfo}
      activeStyleObject={styleObjects?.[activeDisplayIndex]}></ImageCarousel>
  );
};

export default CarouselContainer;

// useEffect(() => {
//   styleObject?.photos.forEach(function(photoObject) {
//     axios.get(createCloudinaryDisplayURL(photoObject.url))
//     .then(() => {
//       axios.get(createCloudinaryDisplayURL(photoObject.thumbnail_url))

//     })
//   })
// }, [])
