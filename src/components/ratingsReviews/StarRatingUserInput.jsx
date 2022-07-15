import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa'

const StarRatingUserInput = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const ratingChange = (ratingValue) => {
    setRating(ratingValue);
    props.handleRatingChange(ratingValue);

  }


  return (
    <div className = "star-rating-user-input"> Rating:&nbsp;
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
        <label key = {ratingValue}>
          <input className = ""
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
    </div>
  );
};

export default StarRatingUserInput;

