import React, {useEffect} from 'react';

import StarRatingStatic from '../commonComponents/StarRatingStatic.jsx'
import RatingsBarComponent from './RatingsBarComponent.jsx'
import RatingsGraph from './RatingsGraph.jsx'
import ProductBreakdown from './ProductBreakdown.jsx';

const RatingsSection = ({metadata, handleFilterByRating, filterRatings, handleFilterClear, setAverageRating}) => {



    if (metadata.ratings !== undefined) {
      /*finding the average rating */
      let sum = parseInt(metadata.ratings[1]) + (2 * parseInt(metadata.ratings[2])) + (3 * parseInt(metadata.ratings[3])) + (4 * parseInt(metadata.ratings[4])) + (5 * parseInt(metadata.ratings[5]));

      var totalRatings = parseInt(metadata.ratings[1]) + parseInt(metadata.ratings[2]) +    parseInt(metadata.ratings[3]) + parseInt(metadata.ratings[4]) + parseInt(metadata.ratings[5])

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



  return (
    <div className = "ratings-section-container">
      {metadata.ratings!== undefined ? <div>
      <div id = 'average-rating'>{roundedAverage}&nbsp;
        <StarRatingStatic rating = {roundedAverage}/>
      </div>
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
          <button className = 'clear-filters-button'onClick = {handleFilterClear}>Clear Filters</button>
        </div>
      }

    </div> : ''}
    </div>

  )
}

export default RatingsSection;