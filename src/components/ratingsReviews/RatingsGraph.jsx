import React from 'react';
import RatingsBarComponent from './RatingsBarComponent.jsx'

const RatingsGraph = ({starFilterClicked, metadata, totalRatings}) => {

  /* finding the percent of each rating */
  var oneRatingPercent = parseInt(metadata.ratings[1]) / totalRatings;
  var twoRatingPercent = parseInt(metadata.ratings[2]) / totalRatings;
  var threeRatingPercent = parseInt(metadata.ratings[3]) / totalRatings;
  var fourRatingPercent = parseInt(metadata.ratings[4]) / totalRatings;
  var fiveRatingPercent = parseInt(metadata.ratings[5]) / totalRatings;
  var stars = [5, 4, 3, 2, 1];

  return (
    <div data-testid = 'ratings-graph'>
      {stars.map((starNum, index) => {
        var testid = starNum + '-star-filter-click'
        var ratingPercent = parseInt(metadata.ratings[starNum]) / totalRatings
        var barId = starNum + '-star-filter'
        return (
          <div
            data-testid = {testid}
            className = 'rating-bar-label'
            id = {barId}
            onClick = {starFilterClicked}
            key = {index}
          >
            {starNum} stars
            <RatingsBarComponent rating = {ratingPercent}/>
            <i>{`(${metadata.ratings[starNum]})`}</i>
          <br></br>
          </div>
        )
      })}
      </div>
  )
}

export default RatingsGraph;