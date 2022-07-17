import React from 'react';
import Photo from './photo/Photo.jsx'


const PhotoList = (props) => {
    return (
        <div className="photolist-container">
            {props.photos.map((photoUrl, index)=> {
                return <Photo url={photoUrl} key={index}/>
            })}
        </div>)


}






export default PhotoList;