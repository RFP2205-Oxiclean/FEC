import React from 'react';

const RatingsBarComponent = (props) => {
  return (
    <div className = 'bars' style = {{'--rating': props.rating}}></div>
  )
}

export default RatingsBarComponent;