import React from 'react';

const ImageModal = (props) => {
  return (
    <div className="qa-image-modal" data-testid="photo-modal">
      <img src={props.photo} className="image" />
    </div>
  )
}

export default ImageModal;