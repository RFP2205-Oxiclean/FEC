import React from 'react';

const RatingsBarComponent = (props) => {

  return (
    <span className = 'bars' style = {{'--rating': props.rating, 'background': 'blue'}}></span>
  )
}

export default RatingsBarComponent;