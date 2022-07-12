import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx'

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedReviews: [],
      remainingReviews: []
    }
    this.addTwoReviewsToDisplay = this.addTwoReviewsToDisplay.bind(this);
  }

  componentDidMount() {
    this.addTwoReviewsToDisplay();
  }

  debugButton() {
    console.log(this.state);
    console.log('here is this.props.reviews.results', this.props.reviews.results)
  }

  addTwoReviewsToDisplay() {
    //If there is nothing in the displayedReviews (initial state), add the first two reviews, remove them from the remainingReviews, and set state
    if (this.state.displayedReviews.length === 0) {
      console.log('here')
      let displayedReviewsCopy = this.props.reviews.results.slice(0, 2);
      let remainingReviewsCopy = this.props.reviews.results.slice(2);
    } else {
      console.log('this.state.displayedReviews: ', this.state.displayedReviews);
      console.log('this.state.remainingReviews: ', this.state.remainigReviews);
      let displayedReviewsCopy = this.state.displayedReviews.slice();
      let remainingReviewsCopy = this.state.remainingReviews.slice();
      displayedReviewsCopy.push(remainingReviewsCopy.shift());
      displayedReviewsCopy.push(remainingReviewsCopy.shift());
    }

    this.setState({
      displayedReviews: displayedReviewsCopy,
      remainingReviews: remainingReviewsCopy
    })
  }


  render() {
    return (
      <div>
        {this.state.displayedReviews.map((review, index) =>
          <ReviewListEntry review = {review} key = {index}/>
        )}
        <button onClick = {this.debugButton.bind(this)}>Debug ReviewList</button>
      </div>
    )
  }

}

export default ReviewList;