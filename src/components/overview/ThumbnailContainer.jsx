import React, {useState, useEffect} from 'react';
import OverlayThumbnail from './OverlayThumbnail.jsx';

const ThumbnailContainer = (props) => {

  return <div className="overview-thumbnail-container">
    <OverlayThumbnail changeImage={props.changeImage} index={0}></OverlayThumbnail>
    <OverlayThumbnail changeImage={props.changeImage} index={1}></OverlayThumbnail>
    <OverlayThumbnail changeImage={props.changeImage} index={2}></OverlayThumbnail>
    <OverlayThumbnail changeImage={props.changeImage} index={3}></OverlayThumbnail>
    <OverlayThumbnail changeImage={props.changeImage} index={4}></OverlayThumbnail>
    {/* <OverlayThumbnail changeImage={props.changeImage} index={5}></OverlayThumbnail> */}

  </div>
}


export default ThumbnailContainer