import React from 'react';
import StarRatingStatic from '../commonComponents/StarRatingStatic.jsx'

const RatingsSection = ({metadata}) => {


  if (metadata.ratings !== undefined) {
    /*finding the average rating */
    let sum = parseInt(metadata.ratings[1]) + (2 * parseInt(metadata.ratings[2])) + (3 * parseInt(metadata.ratings[3])) + (4 * parseInt(metadata.ratings[4])) + (5 * parseInt(metadata.ratings[5]));

    let totalRatings = parseInt(metadata.ratings[1]) + parseInt(metadata.ratings[2]) +    parseInt(metadata.ratings[3]) + parseInt(metadata.ratings[4]) + parseInt(metadata.ratings[5])

    var roundedAverage = Math.round(sum / totalRatings * 10) / 10

    /* finding the recommended % */
    let totalRecommendations = parseInt(metadata.recommended.false) + parseInt(metadata.recommended.true);
    let numberRecommended = parseInt(metadata.recommended.true);

    var percentRecommended = Math.round(numberRecommended / totalRecommendations * 100);
  }




  return (
    <div>Ratings section {console.log('metadata', metadata)}
      <div className = 'average-rating'>{roundedAverage}</div>

      <div className = 'percent-recommended'>{percentRecommended}% of reviews recommend this product</div>

      <StarRatingStatic/>

      <div className = 'ratings-bar-chart'> 5 stars

      </div>
    </div>
  )
}

export default RatingsSection;