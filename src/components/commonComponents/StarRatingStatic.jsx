import React from 'react';

const StarRatingStatic = (props) => {

  return (
    <div className = 'stars' style = {{'--rating': props.rating}}></div>
  )
}

export default StarRatingStatic;