import React, {useState} from 'react';
import {format} from 'date-fns';
import StarRatingStatic from '../commonComponents/StarRatingStatic.jsx';

const ReviewListEntry = ({review, handleMarkReviewHelpful, handleReportReview}) => {

  const date = new Date(review.date)

  const convertDateFormat = (date) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }

  const markReviewHelpful = (e) => {
    e.preventDefault();
    handleMarkReviewHelpful(review.review_id);
  }

  const reportReview = (e) => {
    e.preventDefault();
    handleReportReview(review.review_id)
  }



  var showRemainingBody = false;

  var showRemainingReview = (e) => {
    console.log('showRemainingReview was invoked, reviewBody', reviewBody)
    e.preventDefault();
    showRemainingBody = true;
  }

  var debugReviewListEntry = (e) => {
    console.log(reviewBody)
  }



  return (
    <div>
      <div>
        <StarRatingStatic rating= {review.rating}/>
        <small className = 'review-username-time'>{review.reviewer_name},&nbsp;{convertDateFormat(date)}
        </small>
      </div>
      <br></br>
      {/* <button onClick = {debugReviewListEntry}>Show reviewBody</button> */}
      <div className = 'review-summary'>{review.summary}</div>

      <div><br></br>{review.body}<br></br></div>

       <div>
        {/* { review.photos.length > 0 ? review.photos.map((photo, index) => {
          return (<div><img key = {index} className = "review-image-thumbnail" src = {photo.url}/>
          </div>)
        }) : ''} */}
      </div>
      <div>

      {review.recommend ? <div className = 'review-recommend'><br></br>✓ I recommend this product</div> : ''}

      {review.response ? <div className = 'review-response'>Response goes here<br></br></div> : ''}

      <div className = 'review-helpful-text-block'>Helpful?&nbsp;&nbsp;
        <span className = 'review-helpful-option' onClick = {markReviewHelpful}>Yes</span>
        <span>&nbsp;({review.helpfulness})</span>
        <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
        <span className = 'review-report-button' onClick = {reportReview}>Report</span>
      </div>
      <hr></hr>
      </div>
    </div>
  )
}

export default ReviewListEntry;