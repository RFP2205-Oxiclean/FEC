import React, {useState} from 'react';
import {format} from 'date-fns';
import StarRatingStatic from '../commonComponents/StarRatingStatic.jsx';
import ReviewImageModal from './ReviewImageModal.jsx'

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRemaining: false,
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
  }

  date = new Date(this.props.review.date)

  checkBodyLongerThan250() {
    let longBody = false;
    console.log('in check body longer than 250')
    if (this.props.review.body.length > 250) {
      longBody = true;
    }
    console.log('long body: ', longBody);
    this.setState({
      bodyLongerThan250: longBody
    })
  }


  convertDateFormat(date) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }

  markReviewHelpful(e) {
    e.preventDefault();
    this.props.handleMarkReviewHelpful(this.props.review.review_id);
  }

  reportReview (e) {
    e.preventDefault();
    this.props.handleReportReview(this.props.review.review_id)
  }

  reviewBodyRender() {
    if (this.props.review.body.length < 250) {
      return <div>{this.props.review.body}</div>
    } else {
      if (this.state.showRemaining === false) {
        return <div>{this.props.review.body.slice(0,250)}... &nbsp;&nbsp; &nbsp; <button onClick = {this.showRemainingReviewBody}>Show More</button>
        <br></br>

          </div>
      } else {
        return <div>{this.props.review.body}</div>
      }
    }
  }

  showRemainingReviewBody(e) {
    e.preventDefault();
    this.setState({
      showRemaining: true
    })
  }

  showThumbnailPhotos() {
    if (this.props.review.photos.length > 0) {
      return (
        <div className = "thumbnail-container">
          {this.props.review.photos.map((photo, index) =>
            <img className = 'review-thumbnail-image' src = {photo.url} onClick = {this.showFullImage} key = {index}></img>
          )}
        </div>
      )
    }
  }

  showFullImage(e) {
    e.preventDefault();
    console.log('show full image invoked')
    console.log(e.target.src)
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


  debugReviewListEntry = (e) => {
    console.log('state: ', this.state)
  }


  render() {
    return (
      <div>
        <div>
          {this.state.displayFullImageModal && <ReviewImageModal image = {this.state.imageToShow} closeImageModal = {this.closeImageModal}/>}
          <StarRatingStatic rating= {this.props.review.rating}/>
          <small className = 'review-username-time'>{this.props.review.reviewer_name},&nbsp;{this.convertDateFormat(this.date)}
          </small>
        </div>
        <br></br>
        {/* <button onClick = {this.debugReviewListEntry.bind(this)}>Show state</button> */}
        <div className = 'review-summary'>{this.props.review.summary}</div>

        <div><br></br>{this.reviewBodyRender()}</div>

        <div>{this.showThumbnailPhotos()}</div>


        {this.props.review.recommend ? <div className = 'review-recommend'><br></br>✓ I recommend this product</div> : ''}

        {this.props.review.response ? <div className = 'review-response'>Response goes here<br></br></div> : ''}

        <div className = 'review-helpful-text-block'>Helpful?&nbsp;&nbsp;
          <span className = 'review-helpful-option' onClick = {this.markReviewHelpful}>Yes</span>
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