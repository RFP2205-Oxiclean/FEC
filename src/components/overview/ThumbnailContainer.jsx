import React, {useState, useEffect} from 'react';
import OverlayThumbnail from './OverlayThumbnail.jsx';

const ThumbnailContainer = (props) => {

  // needs photos array
  return <div className="overview-thumbnail-container">
    {props.photos.map(function(photoObject, i) {
      return <OverlayThumbnail active={ i === props.activeImageIndex ? true : false} index = {i} changeImage={props.changeImage} key = {photoObject.thumbnail_url} image={photoObject.thumbnail_url}></OverlayThumbnail>
    })}
    {/* <OverlayThumbnail changeImage={props.changeImage} index={0}></OverlayThumbnail>
    <OverlayThumbnail changeImage={props.changeImage} index={1}></OverlayThumbnail>
    <OverlayThumbnail changeImage={props.changeImage} index={2}></OverlayThumbnail>
    <OverlayThumbnail changeImage={props.changeImage} index={3}></OverlayThumbnail>
    <OverlayThumbnail changeImage={props.changeImage} index={4}></OverlayThumbnail> */}
    {/* <OverlayThumbnail changeImage={props.changeImage} index={5}></OverlayThumbnail> */}

  </div>
}


export default ThumbnailContainer