import React from 'react';

const RatingsBarComponent = (props) => {
  return (
    <span className = 'bars' style = {{'--rating': props.rating}}></span>
  )
}

export default RatingsBarComponent;