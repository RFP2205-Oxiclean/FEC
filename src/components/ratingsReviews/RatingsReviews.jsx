import React from 'react';
import axios from 'axios';
import {url, API_KEY} from '/Users/jasonchiou/HR/FEC/config/config.js'
import ReviewList from './ReviewList.jsx'
import RatingsSection from './RatingsSection.jsx'
axios.defaults.headers.common['Authorization'] = API_KEY;


class RatingsReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          reviews: [],
          metadata: {},
          filterRatings: {
            1: false,
            2: false,
            3: false,
            4: false,
            5: false
          }
        };
        this.getReviewList = this.getReviewList.bind(this);
        this.getMetadata = this.getMetadata.bind(this);
        this.handleMarkReviewHelpful = this.handleMarkReviewHelpful.bind(this);
        this.handleReportReview = this.handleReportReview.bind(this);
        this.logState = this.logState.bind(this);
        this.updateMetadataState = this.updateMetadataState.bind(this);
        this.updateReviewsState = this.updateReviewsState.bind(this);
        this.handleFilterByRating = this.handleFilterByRating.bind(this);
        this.filterReviews = this.filterReviews.bind(this);
        this.handleFilterClear = this.handleFilterClear.bind(this);
    }

    componentDidMount() {
      this.getReviewList();
      this.getMetadata();
    }

    logState() {
      console.log(this.state);
    }

    updateReviewsState(reviews) {
      this.setState({
        reviews: reviews.results
      })
    }

    updateMetadataState(metadata) {
      this.setState({
        metadata: metadata
      })
    }


    /*------ HTTP requests below ------*/

    //Retrieves an array of all reviews on the current product
    //On success, updates the state of RatingsReviews.jsx
    getReviewList() {
    let endPoint = `${url}/reviews`;
    axios.get(endPoint, {
      params: {
        product_id: this.props.product_id,
        count: 10000
      }
    })
      .then((response) => {
        console.log(response.data)
        this.updateReviewsState(response.data);
      })
      .catch((err) => {
        console.error('Error in getRatingsReviewsData response: ', err);
      })
    }

    //Retrieves an array of all ratings associated with the current product
    //On success, updates the state of RatingsReviews.jsx
    getMetadata() {
    let endPoint = `${url}/reviews/meta`;
    let newAxios = axios.create({
      headers : {'Authorization' : API_KEY}
    })
    newAxios.get(endPoint, {
        params: {
          product_id: this.props.product_id,
          count: 10000
        }
    })
      .then((response) => {
        console.log(response.data);
        this.updateMetadataState(response.data);
      })
      .catch((err) => {
        console.error('Error in getRatingsReviewsData response: ', err);
      })
    }

    //Posts a new review to the server. Takes in a review object that should have already been created when the method was invoked
    //On success, calls getReviewsList and getRatingsList to update with the latest info
    addReview(review) {
      let endPoint = `${url}/reviews`;
      axios.post(endPoint, {
        product_id: this.props.product_id,
        rating: review.rating,
        summary: review.summary,
        body: review.body,
        recommend: review.recommend,
        name: review.name,
        email: review.email,
        photos: review.photos,
        characteristics: review.characteristics
      })
    }

    //Marks a specific review as helpful. Takes in the review_id and creates a PUT request for that specific review
    //On success, calls getReviewsList to update with the latest info
    handleMarkReviewHelpful(review_id) {
      let endPoint = `${url}/reviews/${review_id}/helpful`;
      axios.put(endPoint, {
        params: {
          review_id: review_id
        }
      })
      .then((response) => {
        console.log('Review successfully marked as helpful!');
        this.getMetadata();
        this.getReviewList();
      })
      .catch((err) => {
        console.error('Errored in markReviewHelpful', err);
      })
    }

    //Reports a specific review. Takes in the review_id and creates a PUT request for that specific review
    //On success, calls getReviewsList to update with the latest info
    handleReportReview(review_id) {
      let endPoint = `${url}/reviews/${review_id}/report`
      axios.put(endPoint, {
        params: {
          review_id: review_id
        }
      })
      .then((response) => {
        console.log('Review successfully reported!');
        this.getReviewList();
      })
      .catch((err) => {
        console.error('Errored in reportReview', err);
      })
    }

    /* Ratings handler functions */

    handleFilterByRating(rating) {
      let filterRatingsCopy = {
        ...this.state.filterRatings
      }
<<<<<<< HEAD
    })
    .then((response) => {
    })
    .catch((err) => {
      console.error('Error in getRatingsReviewsData response: ', err);
    })
=======
      filterRatingsCopy[rating] = !filterRatingsCopy[rating]
      this.setState({
        filterRatings: filterRatingsCopy
      })
    }

    handleFilterClear() {
      this.setState({
        filterRatings: {
          1: false,
          2: false,
          3: false,
          4: false,
          5: false
        }
      })
    }

    /* Methods to filter and sort reviews to pass down to ReviewList */
    filterReviews() {
      var filteredReviews = [];

      var filterOn = false;

      for (let rating in this.state.filterRatings) {
        if (this.state.filterRatings[rating] === true) {
          filterOn = true;
        }
      }

      if (filterOn === false) {
        return this.state.reviews;
      } else {
        for (var i = 0; i < this.state.reviews.length; i++) {
          if (this.state.filterRatings[this.state.reviews[i].rating] === true) {
            filteredReviews.push(this.state.reviews[i]);
          }
        }
      }

      return filteredReviews;

    }

    sortReviews() {

>>>>>>> 379b5e14859a80cb5efea49de01e244a4d571475
    }


    render() {
        let filteredReviews = this.filterReviews();
        return (
          <div>
            <h1>Ratings & Reviews</h1>
            <ReviewList totalNumReviews = {this.state.reviews.length} reviews = {filteredReviews} handleMarkReviewHelpful = {this.handleMarkReviewHelpful} handleReportReview = {this.handleReportReview}/>
            <RatingsSection metadata = {this.state.metadata} handleFilterByRating = {this.handleFilterByRating} filterRatings = {this.state.filterRatings} handleFilterClear = {this.handleFilterClear}/>
            <button onClick = {this.getReviewList}>Get Review List</button>
            <button onClick = {this.getMetadata}>Get Ratings List</button>
            <button onClick = {this.logState}>Show current state</button>
            <button onClick = {this.filterReviews.bind(this)}>Filter Reviews</button>
          </div>

        )
    }

}


export default RatingsReviews;