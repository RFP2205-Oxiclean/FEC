import React from 'react';
import {FaStar} from 'react-icons/fa'

const StarRatingStatic = (props) => {

  return (
    <div className = 'stars' style = {{'--rating': props.rating}}></div>
  )
}

export default StarRatingStatic;