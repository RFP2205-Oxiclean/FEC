import React, {useEffect} from 'react';

import StarRatingStatic from '../commonComponents/StarRatingStatic.jsx'
import RatingsBarComponent from './RatingsBarComponent.jsx'
import RatingsGraph from './RatingsGraph.jsx'
import ProductBreakdown from './ProductBreakdown.jsx';

const RatingsSection = ({metadata, handleFilterByRating, filterRatings, handleFilterClear}) => {



    if (metadata.ratings !== undefined) {
      /*finding the average rating */
      let sum = (parseInt(metadata.ratings[1] || 0)) + (2 * ((parseInt(metadata.ratings[2] || 0)) || 0)) + (3 * ((parseInt(metadata.ratings[3] || 0)) || 0)) + (4 * ((parseInt(metadata.ratings[4] || 0)) || 0)) + (5 * ((parseInt(metadata.ratings[5] || 0)) || 0));


      var totalRatings = ((parseInt(metadata.ratings[1] || 0)) || 0) + (parseInt(metadata.ratings[2] || 0)) +    (parseInt(metadata.ratings[3] || 0)) + (parseInt(metadata.ratings[4] || 0)) + (parseInt(metadata.ratings[5] || 0))

      var roundedAverage = Math.round(sum / totalRatings * 10) / 10


      /* finding the recommended % */
      let totalRecommendations = parseInt(metadata.recommended.false) + parseInt(metadata.recommended.true);
      let numberRecommended = parseInt(metadata.recommended.true);

      var percentRecommended = Math.round(numberRecommended / totalRecommendations * 100);


    }

  const starFilterClicked = (e) => {
    e.preventDefault();
    if (e.target.id === '5-star-filter' || e.target.parentNode.id === '5-star-filter') {
      handleFilterByRating(5);
    } else if (e.target.id === '4-star-filter'|| e.target.parentNode.id === '4-star-filter') {
      handleFilterByRating(4);
    } else if (e.target.id === '3-star-filter'|| e.target.parentNode.id === '3-star-filter') {
      handleFilterByRating(3);
    } else if (e.target.id === '2-star-filter'|| e.target.parentNode.id === '2-star-filter') {
      handleFilterByRating(2);
    } else if (e.target.id === '1-star-filter'|| e.target.parentNode.id === '1-star-filter') {
      handleFilterByRating(1);
    }
  }

  var filterOn = () => {
    for (let rating in filterRatings) {
      if (filterRatings[rating] === true) {
        return true;
      }
    }
    return false;
  }

  var activeFilters = () => {
    let active = [];
    for (let rating in filterRatings) {
      if (filterRatings[rating] === true) {
        active.push(rating)
      }
    }
    return active;
  }

  var roundToQuarterDecimal =(num) => {
    return (Math.round(num * 4) / 4).toFixed(2)
  }

  if (metadata.ratings === undefined) {
    return <div> nothing to show here</div>
  }
  return (

      <div className = "ratings-section-container" data-testid = 'ratings-section'>
        <h1>Ratings & Reviews</h1>
        <span id = 'average-rating' data-testid = 'average-rating'>{roundedAverage.toFixed(1)}&nbsp;</span>
        <StarRatingStatic rating = {roundToQuarterDecimal(roundedAverage)}/>
        <span><i id = 'total-num-ratings'>({totalRatings} ratings)</i></span>
      <br></br>
        <div id = 'percent-recommended'>{percentRecommended}% of reviews recommend this product
        </div>
      <br></br>
      <RatingsGraph starFilterClicked = {starFilterClicked} metadata = {metadata} totalRatings = {totalRatings}/>

      <ProductBreakdown characteristics = {metadata.characteristics}/>
      <br></br>
      {!filterOn() ? '' :
        <div>Filters:
          {activeFilters().map((rating, index) => {
            return <span key = {index}> {rating} </span>
          })
          } ★ reviews&nbsp;
          <button className = 'small-interactive-buttons'onClick = {handleFilterClear}>Clear Filters</button>
        </div>
      }
    </div>

  )
}

export default RatingsSection;