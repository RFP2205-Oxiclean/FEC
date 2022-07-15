import React from 'react';
import axios from 'axios';

class RatingsReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    getReviewList(id) {
    let endPoint = `${url}/reviews/`;
    axios.get(endPoint, {
      params: {
        product_id: this.state.displayedProductId
      }
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch((err) => {
      console.error('Error in getRatingsReviewsData response: ', err);
    })
    }

    getRatingsList(id) {
    let endPoint = `${url}/reviews/meta`;
    axios.get(endPoint, {
        params: {
          product_id: this.state.displayedProductId
      },
        headers: {
          Authorization: API_KEY
      }
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch((err) => {
      console.error('Error in getRatingsReviewsData response: ', err);
    })
    }


    render() {
        return (
            <h1>
                Ratings and Reviews is working
            </h1>
        )
    }

}


export default RatingsReviews;