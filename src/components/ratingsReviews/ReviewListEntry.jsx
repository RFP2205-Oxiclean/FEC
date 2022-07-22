import React, {useState} from 'react';
import {format} from 'date-fns';
import StarRatingStatic from '../commonComponents/StarRatingStatic.jsx';
import ReviewImageModal from './ReviewImageModal.jsx'

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRemainingReviewBody: false,
      imageToShow: null,
      displayFullImageModal: false
    }
    this.convertDateFormat = this.convertDateFormat.bind(this);
    this.markReviewHelpful = this.markReviewHelpful.bind(this);
    this.reportReview = this.reportReview.bind(this);
    this.reviewBodyRender = this.reviewBodyRender.bind(this);
    this.checkBodyLongerThan250 = this.checkBodyLongerThan250.bind(this);
    this.showRemainingReviewBody = this.showRemainingReviewBody.bind(this);
    this.showFullImage = this.showFullImage.bind(this);
    this.showThumbnailPhotos = this.showThumbnailPhotos.bind(this);
    this.closeImageModal = this.closeImageModal.bind(this);
    this.roundToQuarterDecimal = this.roundToQuarterDecimal.bind(this);
  }

  componentDidMount() {
    this.checkBodyLongerThan250();
  }

  checkBodyLongerThan250() {
    let longBody = false;
    if (this.props.review.body.length > 250) {
      longBody = true;
    }
    this.setState({
      bodyLongerThan250: longBody
    })
  }


  convertDateFormat(date) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }

  //Stores a user's helpful vote in local storage. If the user has already voted, it will check the hasMarkedHelpful array. If the review_id doesn't exist in the array, cast the vote. Otherwise, don't take an action.
  markReviewHelpful(e) {
    e.preventDefault();

    var hasMarkedHelpful = JSON.parse(localStorage.getItem('hasMarkedHelpful')) || [];
    if (hasMarkedHelpful === null) {
      hasMarkedHelpful.push(this.props.review.review_id);
      localStorage.setItem('hasMarkedHelpful', JSON.stringify(hasMarkedHelpful));
      this.props.handleMarkReviewHelpful(this.props.review.review_id);
    } else if (hasMarkedHelpful.indexOf(this.props.review.review_id) === -1){
      hasMarkedHelpful.push(this.props.review.review_id);
      localStorage.setItem('hasMarkedHelpful', JSON.stringify(hasMarkedHelpful))
      this.props.handleMarkReviewHelpful(this.props.review.review_id);
    }
  }

  //Reports the review. This should remove the review from all reviews, so no additional logic necessary.
  reportReview (e) {
    e.preventDefault();
    this.props.handleReportReview(this.props.review.review_id)
  }

  //Conditionally renders the review body. If the body is longer than 250 char, show a show-more button and display only the first 250 char by default. Once button is clicked, show the full review.
  reviewBodyRender() {
    if (this.props.review.body.length < 250) {
      return <div className = 'review-body'>{this.props.review.body}</div>
    } else {
      if (this.state.showRemainingReviewBody === false) {
        return <div className = 'review-body'>{this.props.review.body.slice(0,250)}... &nbsp;&nbsp; &nbsp;
        <br></br>
        <span><button className = 'small-interactive-buttons' onClick = {this.showRemainingReviewBody}>Show More</button></span>
          </div>
      } else {
        return <div className = 'review-body'>{this.props.review.body}</div>
      }
    }
  }

  showRemainingReviewBody(e) {
    e.preventDefault();
    this.setState({
      showRemainingReviewBody: true
    })
  }

  //shows the thumbnail photos if they exist
  showThumbnailPhotos() {
    if (this.props.review.photos.length > 0) {
      return (
        <div className = "thumbnail-container">
          {this.props.review.photos.map((photo, index) =>
            <img
              data-testid = 'review-thumbnail-image'
              className = 'review-thumbnail-image'
              src = {photo.url}
              alt = 'Image not found'
              onError={(e) => {
              e.target.src="https://picsum.photos/200";
            }}
            onClick = {this.showFullImage} key = {photo.id}></img>
          )}
        </div>
      )
    }
  }

  showFullImage(e) {
    e.preventDefault();
    this.setState({
      displayFullImageModal: true,
      imageToShow: e.target.src
    })
  }

  closeImageModal(e) {
    e.preventDefault();
    this.setState({
      displayFullImageModal: false,
      imageToShow: null
    })
  }

  roundToQuarterDecimal(num) {
    console.log(num);
    console.log(Math.round(num * 4) / 4).toFixed(2)
    return (Math.round(num * 4) / 4).toFixed(2);
  }




  debugReviewListEntry = (e) => {
    console.log('state: ', this.state),
    console.log('photos: ', this.props.review.photos)
  }


  render() {
    return (
      <div data-testid = "review-tile" className = 'review-list-entry'>
        <div >
          {this.state.displayFullImageModal && <ReviewImageModal image = {this.state.imageToShow} closeImageModal = {this.closeImageModal}/>}
          <StarRatingStatic rating= {this.props.review.rating}/>
          <small className = 'review-username-time'>{this.props.review.reviewer_name} &nbsp;|&nbsp;{this.convertDateFormat(new Date(this.props.review.date))}
          </small>
        </div>
        <br></br>
        <div className = 'review-summary'>{this.props.review.summary}</div>

        <div><br></br>{this.reviewBodyRender()}</div>

        <div>{this.showThumbnailPhotos()}</div>


        {this.props.review.recommend ? <div className = 'review-recommend'><br></br>✓ I recommend this product</div> : ''}

        {this.props.review.response ? <div className = 'review-response'>Response goes here<br></br></div> : ''}

        <div className = 'review-helpful-text-block'>Helpful?&nbsp;&nbsp;
          <span className = 'review-helpful-option' data-testid = "review-helpful-link" onClick = {this.markReviewHelpful}>Yes</span>
          <span>&nbsp;({this.props.review.helpfulness})</span>
          <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
          <span className = 'review-report-button' onClick = {this.reportReview}>Report</span>
        </div>
        <hr></hr>

      </div>
    )
  }

}

export default ReviewListEntry;