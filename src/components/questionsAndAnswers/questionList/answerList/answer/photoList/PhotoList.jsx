import React from 'react';
import Photo from './photo/Photo.jsx'


const PhotoList = (props) => {
    return (
        props.photos.map((photoUrl)=> {
            return <Photo url={photoUrl}/>
        }))
}






export default PhotoList;