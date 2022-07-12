import React from 'react';

const ReviewListEntry = ({review}) => {
  return (
    <div>
      {review.summary}
    </div>
  )
}

export default ReviewListEntry;