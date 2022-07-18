import React from 'react';

const ImageModal = (props) => {
  return (
    <div className="qa-image-modal">
      <img src={'data:image/jpeg;base64, '+props.photo} className="image" />
    </div>
  )
}

export default ImageModal;