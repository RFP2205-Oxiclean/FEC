import React from 'react';
import RatingsBarComponent from './RatingsBarComponent.jsx'

const RatingsGraph = ({starFilterClicked, metadata, totalRatings}) => {

  /* finding the percent of each rating */
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
            <i className = 'ratings-bar-num-ratings'>{`(${metadata.ratings[starNum] || 0})`}</i>
          <br></br>
          </div>
        )
      })}
    </div>
  )
}

export default RatingsGraph;