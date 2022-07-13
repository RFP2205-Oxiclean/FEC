import React from 'react';
import StarRatingUserInput from '../commonComponents/StarRatingUserInput.jsx'
import StarRatingStatic from '../commonComponents/StarRatingStatic.jsx'
import RatingsBarComponent from './RatingsBarComponent.jsx'

const RatingsSection = ({metadata, handleFilterByRating, filterRatings, handleFilterClear}) => {


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



  return (
    <div>
      <br></br>
      <div>RATINGS & REVIEWS</div>
      <div id = 'average-rating'>{roundedAverage}&nbsp;
        <StarRatingStatic rating = {roundedAverage}/>
      </div>
      <br></br>
      <div id = 'percent-recommended'>{percentRecommended}% of reviews recommend this product
      </div>
      <br></br>
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

      {filterRatings.length === 0 ? '' :
        <div>Filters applied for:
          {filterRatings.map((rating, index) => {
            return <span> {rating} </span>
          })
          }
          <button onClick = {handleFilterClear}>Clear Filters</button>
        </div>
      }

    </div>
  )
}

export default RatingsSection;