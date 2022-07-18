import React from 'react';


const PhotoList = (props) => {
    if (props.photos.length > 1) {
      return (
        <div className="photolist-container">
            {props.photos.map((photo, index)=> {

            })}
        </div>)
    } else {
        return null;
    }
}



export default PhotoList;