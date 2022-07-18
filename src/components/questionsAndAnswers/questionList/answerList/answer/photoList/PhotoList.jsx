import React from 'react';
import Photo from './photo/Photo.jsx'


const PhotoList = (props) => {
    if (props.photos.length > 1) {
      return (
        <div className="photolist-container">
            {props.photos.map((photoUrl, index)=> {
                return <Photo url={photoUrl} key={index}/>
            })}
        </div>)
    } else {
        return null;
    }



}






export default PhotoList;