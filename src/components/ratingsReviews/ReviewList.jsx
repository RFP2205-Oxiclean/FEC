import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import SortDropdown from './SortDropdown.jsx';
import KeywordSearchFilter from './KeywordSearchFilter.jsx'

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numReviewsDisplayed: 0,
      sortOption: '',
      searchKeyword: ''
    }
    this.addTwoReviewsToDisplay = this.addTwoReviewsToDisplay.bind(this);
    this.handleSortReviewsChange = this.handleSortReviewsChange.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
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

  handleKeywordChange(word) {
    this.setState({
      searchKeyword: word
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
      reviewsCopy.sort((firstReview, secondReview) => {
        if (secondReview.helpfulness === firstReview.helpfulness) {
          return (firstReview.date > secondReview.date) ? -1 : ((firstReview.date < secondReview.date) ? 1: 0)
        }
        return secondReview.helpfulness - firstReview.helpfulness});

    };
    return reviewsCopy;
  }

  filterReviews(reviewsToFilter) {
    var filteredReviews = [];
    if (this.state.searchKeyword.length >= 3) {
      for (var i = 0; i < reviewsToFilter.length; i++) {
        if (reviewsToFilter[i].body.toLowerCase().includes(this.state.searchKeyword.toLowerCase()) || reviewsToFilter[i].summary.toLowerCase().includes(this.state.searchKeyword.toLowerCase())) {
          filteredReviews.push(reviewsToFilter[i]);
        }
      }
      return filteredReviews;
    } else {
      return reviewsToFilter;
    }
  }

  showKeyword() {
    console.log(this.state.searchKeyword)
  }


  render() {
    var reviewsToDisplay = this.filterReviews(this.sortReviews()).slice(0, this.state.numReviewsDisplayed);

    if (reviewsToDisplay.length === 0 && this.state.searchKeyword.length > 3) {
      return (
        <div className = "review-list-container">
          <KeywordSearchFilter handleKeywordChange = {this.handleKeywordChange}/>
          <SortDropdown handleSortReviewsChange = {this.handleSortReviewsChange} numReviews = {this.props.totalNumReviews}/>
          <div>No keywords matched that search, try again</div>
        </div>
      )

    } else if (reviewsToDisplay.length === 0 && this.state.searchKeyword.length < 3) {
      return (
        <div  className = "review-list-container">
          <button>ADD A REVIEW +</button>
        </div>

      )
    } else {
      return (
        <div className = "review-list-container">
          <KeywordSearchFilter handleKeywordChange = {this.handleKeywordChange}/>
          <SortDropdown handleSortReviewsChange = {this.handleSortReviewsChange} numReviews = {this.props.totalNumReviews}/>
          <div className = 'review-list'>
          {reviewsToDisplay.map((review, index) =>
            <ReviewListEntry key = {index} review = {review} handleMarkReviewHelpful = {this.props.handleMarkReviewHelpful} handleReportReview = {this.props.handleReportReview}/>
          )}
          </div>
          {this.props.reviews.length > this.state.numReviewsDisplayed ? <button onClick = {this.addTwoReviewsToDisplay} className = 'more-reviews-button'>MORE REVIEWS</button> : ''}
          <button className = 'add-review-button' onClick = {this.props.showAddReviewModal}>ADD A REVIEW +</button>
        </div>
        )
    }

  }

}

export default ReviewList;