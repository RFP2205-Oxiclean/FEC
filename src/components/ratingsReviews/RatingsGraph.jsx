import React from 'react';

const RatingsGraph = (props) => {


  return (
    <div>
    <span className = 'rating-bar-label' id = '5-star-filter' onClick = {props.starFilterClicked}> 5 stars
        <RatingsBarComponent
          rating = {fiveRatingPercent}
        />
      </span>
      <br></br>
      <span className = 'rating-bar-label' id = '4-star-filter' onClick = {props.starFilterClicked}> 4 stars
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