import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import SortDropdown from './SortDropdown.jsx';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numReviewsDisplayed: 0,
      sortOption: '',
    }
    this.addTwoReviewsToDisplay = this.addTwoReviewsToDisplay.bind(this);
    this.handleSortReviewsChange = this.handleSortReviewsChange.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
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

  handleSortReviewsChange(sortOption) {
    console.log('changing the sort option to ', sortOption)
    this.setState({
      sortOption: sortOption
    })
  }

  sortReviews() {
    var reviewsCopy = this.props.reviews.slice();
    if (this.state.sortOption === 'helpful') {
      reviewsCopy.sort((firstReview, secondReview) => secondReview.helpfulness - firstReview.helpfulness);
    } else if (this.state.sortOption === 'newest') {
      reviewsCopy.sort(function(firstReview, secondReview) {
        return (firstReview.date > secondReview.date) ? -1 : ((firstReview.date < secondReview.date) ? 1: 0)
      });
    } else {
      reviewsCopy.sort(function(firstReview, secondReview) {
        return (firstReview.date > secondReview.date) ? -1 : ((firstReview.date < secondReview.date) ? 1: 0)
      });
      reviewsCopy.sort((firstReview, secondReview) => secondReview.helpfulness - firstReview.helpfulness);
    }
    return reviewsCopy;
  }


  render() {
    var reviewsToDisplay = this.sortReviews().slice(0, this.state.numReviewsDisplayed);

    if (reviewsToDisplay.length === 0) {
      return (
        <button>Add a Review</button>
      )
    } else {
      return (
        <div>
          <SortDropdown handleSortReviewsChange = {this.handleSortReviewsChange} numReviews = {this.props.totalNumReviews}/>
          <div className = 'review-list'>
          {reviewsToDisplay.map((review, index) =>
            <ReviewListEntry key = {index} review = {review} handleMarkReviewHelpful = {this.props.handleMarkReviewHelpful} handleReportReview = {this.props.handleReportReview}/>
          )}
          </div>
          {this.props.reviews.length > this.state.numReviewsDisplayed ? <button onClick = {this.addTwoReviewsToDisplay}>MORE REVIEWS</button> : ''}
        </div>
        )
    }

  }

}

export default ReviewList;