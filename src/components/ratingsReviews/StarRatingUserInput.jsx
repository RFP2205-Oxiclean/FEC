import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa'

const StarRatingUserInput = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const ratingChange = (ratingValue) => {
    setRating(ratingValue);
    props.handleRatingChange(ratingValue);

  }

  const ratingDescriptions = ['Poor', 'Fair', 'Average', 'Good', 'Great']


  return (
    <span className = "star-rating-user-input"> Overall Rating:&nbsp;&nbsp;
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
        <label key = {ratingValue}>
          <input className = "star-rating-user-input-radio"
            type= "radio"
            name = "rating"
            value = {ratingValue}
            onClick = {() => ratingChange(ratingValue)}
          />
          <FaStar
            className = "stars-user-input"
            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            size = {20}
            onMouseEnter = {() => setHover(ratingValue)}
            onMouseLeave = {() => setHover(null)}
          />
        </label>
        )
      }
      )}
      {rating ? <span>&nbsp;{ratingDescriptions[rating - 1]}</span> : ''}
    </span>
  );
};

export default StarRatingUserInput;

