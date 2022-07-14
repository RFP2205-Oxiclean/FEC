import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx'

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numReviewsDisplayed: 0
    }
    this.addTwoReviewsToDisplay = this.addTwoReviewsToDisplay.bind(this);
  }

  componentDidMount() {
    this.addTwoReviewsToDisplay();
  }

  debugButton() {
    console.log(this.state);
    console.log('here is this.props.reviews', this.props.reviews)
  }

  addTwoReviewsToDisplay() {
    this.setState({
      numReviewsDisplayed: this.state.numReviewsDisplayed + 2
    })
  }



  render() {
    var reviewsToDisplay = this.props.reviews.slice(0, this.state.numReviewsDisplayed);
    return (
      <div>
        {reviewsToDisplay.map((review, index) =>
          <ReviewListEntry key = {index} review = {review} handleMarkReviewHelpful = {this.props.handleMarkReviewHelpful} handleReportReview = {this.props.handleReportReview}/>
        )}
        <button onClick = {this.debugButton.bind(this)}>Debug ReviewList</button>
        {this.props.reviews.length > this.state.numReviewsDisplayed ? <button onClick = {this.addTwoReviewsToDisplay}>More Reviews</button> : ''}
      </div>
    )
  }

}

export default ReviewList;