import React from 'react';
import Photo from './photo/Photo.jsx'

const validatePhoto= (photoUrl) => {
    if (photoUrl.indexOf(".jpeg") !== -1 ) {
        return true;
    } else if (photoUrl.indexOf(".jpg") !== -1) {
        return true;
    } else if (photoUrl.indexOf(".png") !== -1) {
        return true;
    }
    return false;
}

const PhotoList = (props) => {
    if (props.photos.length > 0) {
      return (
        <div className="photolist-container">
            {props.photos.map((photoUrl, index)=> {
                if ( validatePhoto(photoUrl) ){
                    return <Photo url={photoUrl} key={index}/>}
            })}
        </div>)
    } else {
        return null;
    }



}






export default PhotoList;