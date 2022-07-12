import React, {useState, useEffect} from 'react';
import OverlayThumbnail from './OverlayThumbnail.jsx';

const ThumbnailContainer = (props) => {

  return <div className="overview-thumbnail-container">
    <OverlayThumbnail></OverlayThumbnail>
    <OverlayThumbnail></OverlayThumbnail>
    <OverlayThumbnail></OverlayThumbnail>
    <OverlayThumbnail></OverlayThumbnail>
    <OverlayThumbnail></OverlayThumbnail>

  </div>
}


export default ThumbnailContainer