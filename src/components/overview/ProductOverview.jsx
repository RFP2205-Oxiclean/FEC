import React, { useState, useEffect } from "react";
import { getProductById, getStylesById, prefetch, getStars, getReviewList } from "../../controllers.js";
import ImageCarousel from "./ImageCarousel.jsx";
import { addToCart } from "../../controllers.js";
import BottomInformation from "./BottomInformation.jsx";
import usePrevious from "../commonComponents/usePreviousHook.jsx";

const ProductOverview = ({ product_id, bag, setBag, setProductId }) => {
  let [rating, setRating] = useState(0);
  let [entry, setEntry] = useState("");
  let [styleObjects, setStyleObjects] = useState([
    {
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
  let [stock, setStock] = useState({ style_id: { stock_id: { quantity: "", size: "", style_id: "", id: "" } } });
  let [previousImage, setPreviousImage] = useState(null);
  const [collapsePanel, setCollapsePanel] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [magnified, setMagnified] = useState(false);
  let [addToCartPrompt, setAddToCartPrompt] = useState(false);
  let [reviewListLength, setReviewListLength] = useState(0);
  let [cart, setCart] = useState({ style_id: { stock_id: null } });
  let [activeStockUnitId, setActiveStockUnitId] = useState(null);

  if (!Number.isInteger(parseInt(product_id))) {
    product_id = 0;
  } else if (product_id < 40344) {
    product_id = 40344;
  } else if (product_id > 41354) {
    product_id = 40344;
  }

  useEffect(() => {
    if (!product_id) {
      return;
    }
    getReviewList(product_id).then((response) => {
      setReviewListLength(response.data.results.length);
    });
    getProductById(product_id).then((data) => {
      setProductInfo(data);
    });
    getStylesById(product_id).then((data) => {
      let activeThumbnails = {};
      let newStock = {};
      data.forEach((styleObj) => {
        console.log(styleObj);
        activeThumbnails[styleObj.style_id] = 0;
        styleObj.photos.forEach(function (photoObj, i) {
          photoObj.trueIndex = i;
        });
        // consolidate stock
        let stockArr = [];
        for (let k in styleObj.skus) {
          stockArr.push({ ...styleObj.skus[k], id: k, style_id: styleObj.style_id });
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

  // useEffect(() => {
  //   prefetch(styleObjects, product_id);
  // }, [styleObjects]);

  let handleClick = function () {
    handleSubmit(entry);
  };

  let getActiveStock = function () {
    return stock[styleObjects[activeDisplayIndex].style_id];
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

  return (
    <div data-testid="product-overview" className="product-overview">
      <ImageCarousel
        setStock={setStock}
        bag={bag}
        setBag={setBag}
        activeStockUnitId={activeStockUnitId}
        setActiveStockUnitId={setActiveStockUnitId}
        activeStock={stock[styleObjects[activeDisplayIndex].style_id]}
        reviewListLength={reviewListLength}
        setAddToCartPrompt={setAddToCartPrompt}
        collapsePanel={collapsePanel}
        setMagnified={setMagnified}
        setExpanded={setExpanded}
        magnified={magnified}
        expanded={magnified}
        setCollapsePanel={setCollapsePanel}
        setPreviousImage={setPreviousImage}
        usePrevious={usePrevious}
        rating={rating}
        decrementThumbnailIndex={decrementThumbnailIndex}
        incrementThumbnailIndex={incrementThumbnailIndex}
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
      <BottomInformation description={productInfo?.description}></BottomInformation>
      <div style={{ position: "absolute", top: "0", marginTop: "300px" }}>
        <input
          onChange={(e) => {
            setEntry(e.target.value);
          }}></input>
        <button
          onClick={() => {
            setProductId(parseInt(entry));
          }}>
          New Product
        </button>
      </div>
    </div>
  );
};

export default ProductOverview;
