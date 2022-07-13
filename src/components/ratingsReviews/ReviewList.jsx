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

  filterReviews() {
    var arrayCopy = [];
    if (this.props.filteredRating === null) {
      return this.props.reviews;
    } else {
      for (var i = 0; i < this.props.reviews.length; i++) {
        for (var j = 0; j < this.props.filteredRating.length; j++) {
          if (this.props.reviews[i].rating === this.props.filteredRating[j]) {
            arrayCopy.push(this.props.reviews[i]);
          }
        }
      }
    }
    return arrayCopy;
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