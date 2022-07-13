import React from 'react';
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


  return (
    <div>
      <div>
        <StarRatingStatic rating= {review.rating}/>
        <small className = 'review-username-time'>{review.reviewer_name},&nbsp;{convertDateFormat(date)}
        </small>
      </div>
      <br></br>
      <div className = 'review-summary'>{review.summary}</div>
      <br></br>
      <div className = 'review-body'>{review.body}</div>
      <br></br>
      {review.recommend ? <div className = 'review-recommend'>✓ I recommend this product</div> : ''}
      <br></br>
      {review.response ? <div className = 'review-response'>Response goes here</div> : ''}
      <br></br>
      <div>Helpful?&nbsp;&nbsp;
        <span className = 'review-helpful-option' onClick = {markReviewHelpful}>Yes</span>
        <span>&nbsp;({review.helpfulness})</span>
        <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
        <span className = 'review-report-button' onClick = {reportReview}>Report</span>
      </div>
      <hr></hr>
    </div>
  )
}

export default ReviewListEntry;