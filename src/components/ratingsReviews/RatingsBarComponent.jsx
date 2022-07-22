import React from 'react';

const RatingsBarComponent = (props) => {

  if (props.rating === 0) {
    return (
      <div className = 'bars-zero'></div>
    )
  }
  return (
    <div className = 'bars' style = {{'--rating': props.rating}}>
    </div>
  )
}

export default RatingsBarComponent;