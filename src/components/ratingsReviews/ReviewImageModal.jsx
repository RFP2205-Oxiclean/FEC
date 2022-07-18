import React from 'react';

const ReviewImageModal = (props) => {
  return(
    <div className = 'full-image-modal-container'>
    <div><button className = 'exit-modal-button' onClick = {props.closeImageModal}>&times;</button></div>
      <img src = {props.image} className = 'full-size-image' alt="image not working"></img>

    </div>
  )
}

export default ReviewImageModal