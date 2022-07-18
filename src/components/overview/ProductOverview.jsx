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
  }, [styleObjects]);

  let handleClick = function () {
    handleSubmit(entry);
  };

  let masterState = function () {
    console.log("prefetch cache: ", prefetch(styleObjects, product_id, true));
    console.log("styleObjects: ", styleObjects);
    console.log("activeThumbnailIndices: ", activeThumbnailIndices);
    console.log("activeDisplayIndex: ", activeDisplayIndex);
    console.log("activeThumbnailIndex: ", getActiveThumbnailIndex());
    console.log(hoverIndex);
  };

  let getActiveThumbnailIndex = function () {
    return activeThumbnailIndices[styleObjects[activeDisplayIndex].style_id];
  };

  let setActiveThumbnailIndex = function (trueIndex) {
    let copyObj = { ...activeThumbnailIndices };
    copyObj[styleObjects[activeDisplayIndex].style_id] = trueIndex;
    setActiveThumbnailIndices(copyObj);
  };

  let getActivePhotoObjects = function () {
    if (hoverIndex) {
      return styleObjects[hoverIndex].photos.map(function (photoObject) {
        return photoObject.thumbnail_url;
      });
    }
    return styleObjects[activeDisplayIndex].photos;
  };

  let getDisplayStyle = function () {
    if (hoverIndex) {
      return styleObjects[hoverIndex];
    }
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
    if (hoverIndex) {
      return styleObjects[hoverIndex].photos[activeThumbnailIndices[styleObjects[activeDisplayIndex].style_id]]?.url;
    }
    return styleObjects[activeDisplayIndex].photos[activeThumbnailIndices[styleObjects[activeDisplayIndex].style_id]]?.url;
  };

  return (
    <div className="product-overview">
      <ImageCarousel
        setActiveDisplayIndex={setActiveDisplayIndex}
        setHoverIndex={setHoverIndex}
        activeDisplayIndex={activeDisplayIndex}
        productInfo={productInfo}
        styleInfo={getDisplayStyle()}
        activeThumbnailIndices={activeThumbnailIndices}
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
