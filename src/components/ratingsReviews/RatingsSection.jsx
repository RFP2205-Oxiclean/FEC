import React from 'react';
import StarRatingUserInput from '../commonComponents/StarRatingUserInput.jsx'
import StarRatingStatic from '../commonComponents/StarRatingStatic.jsx'
import RatingsBarComponent from './RatingsBarComponent.jsx'

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

    /* finding the percent of each rating */
    var oneRatingPercent = parseInt(metadata.ratings[1]) / totalRatings;
    var twoRatingPercent = parseInt(metadata.ratings[2]) / totalRatings;
    var threeRatingPercent = parseInt(metadata.ratings[3]) / totalRatings;
    var fourRatingPercent = parseInt(metadata.ratings[4]) / totalRatings;
    var fiveRatingPercent = parseInt(metadata.ratings[5]) / totalRatings;
    console.log(oneRatingPercent, twoRatingPercent, threeRatingPercent, fourRatingPercent, fiveRatingPercent)
  }




  return (
    <div>
      <div>RATINGS & REVIEWS</div>
      <div className = 'average-rating'>{roundedAverage}&nbsp;
        <StarRatingStatic rating = {roundedAverage}/>
      </div>
      <br></br>
      <div className = 'percent-recommended'>{percentRecommended}% of reviews recommend this product
      </div>
      <br></br>
      <span>5 stars   </span> <RatingsBarComponent rating = {fiveRatingPercent}/>
      <br></br>
      <span>4 stars   </span> <RatingsBarComponent rating = {fourRatingPercent}/>
      <br></br>
      <span>3 stars   </span> <RatingsBarComponent rating = {threeRatingPercent}/>
      <br></br>
      <span>2 stars   </span> <RatingsBarComponent rating = {twoRatingPercent}/>
      <br></br>
      <span>1 stars   </span> <RatingsBarComponent rating = {oneRatingPercent}/>


    </div>
  )
}

export default RatingsSection;