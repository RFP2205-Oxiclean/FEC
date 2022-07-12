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
          ratings: {}
        };
        this.getReviewList = this.getReviewList.bind(this);
        this.getRatingsList = this.getRatingsList.bind(this);
        this.handleMarkReviewHelpful = this.handleMarkReviewHelpful.bind(this);
        this.handleReportReview = this.handleReportReview.bind(this);
        this.logState = this.logState.bind(this);
    }

    componentDidMount() {
      this.getReviewList();
      this.getRatingsList();
    }

    logState() {
      console.log(this.state);
    }

    updateReviewsState(reviews) {
      this.setState({
        reviews: reviews.results
      })
    }

    updateRatingsState(ratings) {
      this.setState({
        ratings: ratings
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
    getRatingsList() {
    let endPoint = `${url}/reviews/meta`;
    axios.get(endPoint, {
        params: {
          product_id: this.props.product_id,
          count: 10000
        }
    })
      .then((response) => {
        console.log(response.data);
        this.updateRatingsState(response.data);
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
      console.log(endPoint);
      axios.put(endPoint, {
        params: {
          review_id: review_id
        }
      })
      .then((response) => {
        console.log('Review successfully marked as helpful!');
        this.getRatingsList();
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


    render() {
        return (
          <div>Ratings and Reviews is working
            <ReviewList reviews = {this.state.reviews} handleMarkReviewHelpful = {this.handleMarkReviewHelpful} handleReportReview = {this.handleReportReview}/>
            <RatingsSection ratings = {this.state.ratings}/>
            <button onClick = {this.getReviewList}>Get Review List</button>
            <button onClick = {this.getRatingsList}>Get Ratings List</button>
            <button onClick = {this.logState}>Show current state</button>
          </div>

        )
    }

}


export default RatingsReviews;