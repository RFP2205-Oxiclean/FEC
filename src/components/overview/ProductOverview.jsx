import React, { useState, useEffect } from "react";
import { getProductById, getStylesById, prefetch } from "/src/controllers.js";
import ImageCarousel from "./ImageCarousel.jsx";

const ProductOverview = ({ handleSubmit, product_id }) => {
  let [entry, setEntry] = useState("");
  let [styleObjects, setStyleObjects] = useState([
    {
      style_id: 0,
      name: null,
      original_price: null,
      sale_price: null,
      photos: [{ url: "", thumbnail_url: "" }],
      skus: {},
      style_id: null,
    },
  ]);
  let [activeThumbnailIndices, setActiveThumbnailIndices] = useState({});
  let [productInfo, setProductInfo] = useState({});
  let [activeDisplayIndex, setActiveDisplayIndex] = useState(0);
  let [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    getProductById(product_id).then((data) => {
      setProductInfo(data);
    });
    getStylesById(product_id).then((data) => {
      let activeThumbnails = {};
      data.forEach((styleObj) => {
        activeThumbnails[styleObj.style_id] = 0;
        styleObj.photos.forEach(function (photoObj, i) {
          photoObj.trueIndex = i;
        });
      });
      setActiveThumbnailIndices(activeThumbnails);
      setStyleObjects(data);
    });
  }, [product_id]);

  useEffect(() => {
    console.log("prefetching");
    prefetch(styleObjects, product_id);
  }, [product_id]);

  let handleClick = function () {
    handleSubmit(entry);
  };

  let masterState = function () {
    console.log("styleObjects: ", styleObjects);
    console.log("activeThumbnailIndices: ", activeThumbnailIndices);
    console.log("activeDisplayIndex: ", activeDisplayIndex);
    // console.log("productInfo: ", productInfo);
    // console.log("hoverIndex: ", hoverIndex);
    // console.log("displayImage: ", getDisplayImage());
    // console.log("displayThumbnails: ", getDisplayThumbnails());
  };

  let getActiveThumbnailIndex = function () {
    for (let k in activeThumbnailIndices) {
      if (k === styleObjects[activeDisplayIndex].style_id) {
        return activeThumbnailIndices[k];
      }
    }
  };

  let setActiveThumbnailIndex = function (index) {
    for (let k in activeThumbnailIndices) {
      if (k === styleObjects[activeDisplayIndex].style_id) {
        let newIndices = { ...activeThumbnailIndices };
        newIndices[k] = index;
        setActiveThumbnailIndices(newIndices);
      }
    }
  };

  let getActivePhotoObjects = function () {
    return styleObjects[activeDisplayIndex].photos;
  };

  let getDisplayStyle = function () {
    return styleObjects[activeDisplayIndex];
  };

  let getDisplayURLS = function () {
    return styleObjects[activeDisplayIndex].photos.map(function (photoObject) {
      return photoObject.url;
    });
  };

  let getDisplayThumbnails = function () {
    return styleObjects[activeDisplayIndex].photos.map(function (photoObject) {
      return photoObject.thumbnail_url;
    });
  };

  let getDisplayImage = function () {
    return styleObjects[activeDisplayIndex].photos[activeThumbnailIndices[styleObjects[activeDisplayIndex].style_id]]?.url;
  };

  return (
    <div className="product-overview">
      <ImageCarousel
        setActiveThumbnailIndex={setActiveThumbnailIndex}
        activeThumbnailIndex={getActiveThumbnailIndex()}
        photoObjects={getActivePhotoObjects()}
        styleObjects={styleObjects}
        productInfo={productInfo}
        image={getDisplayImage()}></ImageCarousel>
      <input
        onChange={(e) => {
          setEntry(e.target.value);
        }}></input>
      <button
        onClick={() => {
          handleClick(entry);
        }}>
        New Product
      </button>
      <button onClick={masterState}>Master State</button>
    </div>
  );
};

export default ProductOverview;
