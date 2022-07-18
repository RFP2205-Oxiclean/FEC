import React from 'react';
import RatingsBarComponent from './RatingsBarComponent.jsx'

const RatingsGraph = ({starFilterClicked, metadata, totalRatings}) => {

  /* finding the percent of each rating */
  var oneRatingPercent = parseInt(metadata.ratings[1]) / totalRatings;
  var twoRatingPercent = parseInt(metadata.ratings[2]) / totalRatings;
  var threeRatingPercent = parseInt(metadata.ratings[3]) / totalRatings;
  var fourRatingPercent = parseInt(metadata.ratings[4]) / totalRatings;
  var fiveRatingPercent = parseInt(metadata.ratings[5]) / totalRatings;

  return (
    <div>
    <span className = 'rating-bar-label' id = '5-star-filter' onClick = {starFilterClicked}> 5 stars
        <RatingsBarComponent
          rating = {fiveRatingPercent}
        />
      </span>
      <br></br>
      <span className = 'rating-bar-label' id = '4-star-filter' onClick = {starFilterClicked}> 4 stars
        <RatingsBarComponent
          rating = {fourRatingPercent}
        />
      </span>
      <br></br>
      <span className = 'rating-bar-label' id = '3-star-filter' onClick = {starFilterClicked}> 3 stars
        <RatingsBarComponent
          rating = {threeRatingPercent}
        />
      </span>
      <br></br>
      <span className = 'rating-bar-label' id = '2-star-filter' onClick = {starFilterClicked}> 2 stars
        <RatingsBarComponent
          rating = {twoRatingPercent}
        />
      </span>
      <br></br>
      <span className = 'rating-bar-label' id = '1-star-filter' onClick = {starFilterClicked}> 1 star &nbsp;
        <RatingsBarComponent
          rating = {oneRatingPercent}
        />
      </span>
      </div>
  )
}

export default RatingsGraph;