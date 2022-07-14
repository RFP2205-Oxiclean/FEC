import React, {useState, useEffect} from 'react';
import OverlayThumbnail from './OverlayThumbnail.jsx';

const ThumbnailContainer = (props) => {

  return <div className="overview-thumbnail-container">
    {props.photos?.map(function(photoObject, i) {
      return <OverlayThumbnail
        active={ i === props.activeImageIndex ? true : false}
        index={i}
        changeImage={props.changeImage}
        key={i}
        image={photoObject?.thumbnail_url}>
      </OverlayThumbnail>
    })}
  </div>
}


export default ThumbnailContainer