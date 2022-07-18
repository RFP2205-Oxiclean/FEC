import React from 'react';


const PhotoList = (props) => {
    if (props.photos.length > 0) {
      return (
        <div className="user-photolist-container">
            {props.photos.map((photo, index)=> {
                return <div className="upload-image-wrapper" key={index} ><img className="upload-image" src={photo} /></div>
            })}
        </div>)
    } else {
        return null;
    }
}



export default PhotoList;