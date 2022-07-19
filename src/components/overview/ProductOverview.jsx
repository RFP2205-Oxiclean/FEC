import React, { useState, useEffect } from "react";
import { getProductById, getStylesById, prefetch, getStars } from "/src/controllers.js";
import ImageCarousel from "./ImageCarousel.jsx";
import { addToCart } from "/src/controllers.js";
import BottomInformation from "./BottomInformation.jsx";

const ProductOverview = ({ handleSubmit, product_id }) => {
  let [rating, setRating] = useState(0);
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
  let [stock, setStock] = useState({});

  useEffect(() => {
    getProductById(product_id).then((data) => {
      setProductInfo(data);
    });
    getStylesById(product_id).then((data) => {
      let activeThumbnails = {};
      let newStock = {};
      data.forEach((styleObj) => {
        activeThumbnails[styleObj.style_id] = 0;
        styleObj.photos.forEach(function (photoObj, i) {
          photoObj.trueIndex = i;
        });
        // consolidate stock
        let stockArr = [];
        for (let k in styleObj.skus) {
          let flag = false;
          stockArr.forEach(function (sizePair, i) {
            if (styleObj.skus[k].size === stockArr[i].size) {
              flag = true;
              stockArr[i].quantity = stockArr[i].quantity + styleObj.skus[k].quantity;
            }
          });
          if (!flag) {
            stockArr.push({ ...styleObj.skus[k], id: k });
          }
        }
        newStock = { ...newStock, [[styleObj.style_id]]: stockArr };
      });
      setActiveThumbnailIndices(activeThumbnails);
      setStock(newStock);
      setStyleObjects(data);
      getStars(product_id).then((results) => {
        setRating(results);
      });
    });
  }, [product_id]);

  useEffect(() => {
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
    console.log(stock);
    console.log(hoverIndex);
  };

  let getActiveThumbnailIndex = function () {
    if (hoverIndex !== null) {
      return activeThumbnailIndices[styleObjects[hoverIndex].style_id];
    }
    return activeThumbnailIndices[styleObjects[activeDisplayIndex].style_id];
  };

  let setActiveThumbnailIndex = function (trueIndex) {
    let copyObj = { ...activeThumbnailIndices };
    copyObj[styleObjects[activeDisplayIndex].style_id] = trueIndex;
    setActiveThumbnailIndices(copyObj);
  };

  let getActivePhotoObjects = function () {
    if (hoverIndex !== null) {
      return styleObjects[hoverIndex].photos;
    }
    return styleObjects[activeDisplayIndex].photos;
  };

  let getDisplayStyle = function () {
    if (hoverIndex !== null) {
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
    if (hoverIndex !== null) {
      return styleObjects[hoverIndex].photos[activeThumbnailIndices[styleObjects[hoverIndex].style_id]]?.url;
    }
    return styleObjects[activeDisplayIndex].photos[activeThumbnailIndices[styleObjects[activeDisplayIndex].style_id]]?.url;
  };

  let getActiveDisplayId = function () {
    return styleObjects[activeDisplayIndex].style_id;
  };

  let incrementThumbnailIndex = function () {
    let newIndices = { ...activeThumbnailIndices };
    newIndices[getActiveDisplayId()]++;
    setActiveThumbnailIndices(newIndices);
  };

  let decrementThumbnailIndex = function () {
    let newIndices = { ...activeThumbnailIndices };
    newIndices[getActiveDisplayId()]--;
    setActiveThumbnailIndices(newIndices);
  };

  let handleAddToCart = function (stockId, quantity) {
    if (!stockId || !quantity) {
      console.log("attempt failed");
      return;
    }
    addToCart(stockId, quantity)
      .then(() => {
        let copyStock = { ...stock };
        let newStock = stock[getActiveDisplayId()].slice();
        for (let i = 0; i < newStock.length; i++) {
          if (newStock[i].id === stockId) {
            newStock[i] = { quantity: newStock[i].quantity - quantity, size: newStock[i].size, id: stockId };
          }
        }
        copyStock[getActiveDisplayId()] = newStock;
        setStock(copyStock);
      })
      .catch((err) => console.log("failed to post"));
  };

  return (
    <div className="product-overview">
      <ImageCarousel
        rating={rating}
        decrementThumbnailIndex={decrementThumbnailIndex}
        incrementThumbnailIndex={incrementThumbnailIndex}
        handleAddToCart={handleAddToCart}
        stock={stock}
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
      <div className="overview-bottom-info">
        <BottomInformation></BottomInformation>
      </div>
      <div style={{ position: "absolute", top: "0" }}>
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
    </div>
  );
};

export default ProductOverview;
