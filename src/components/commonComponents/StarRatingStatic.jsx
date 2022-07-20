import React from 'react';

const StarRatingStatic = (props) => {

  return (
    <div className = 'stars' style = {{'--rating': props.rating}} data-testid = "star-rating-static"></div>
  )
}

export default StarRatingStatic;