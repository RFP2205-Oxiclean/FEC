import React from "react";
import axios from "axios";
import { url, API_KEY } from "/config/config.js";
import ReviewList from "./ReviewList.jsx";
import RatingsSection from "./RatingsSection.jsx";
import AddReviewModal from "./AddReviewModal.jsx";
import KeywordSearchFilter from "./KeywordSearchFilter.jsx";
let newAxios = axios.create({});
newAxios.defaults.headers.common["Authorization"] = API_KEY;

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      metadata: {},
      product_name: "",
      displayAddReviewModal: false,
      filterRatings: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      },
    };
    this.getReviewList = this.getReviewList.bind(this);
    this.getMetadata = this.getMetadata.bind(this);
    this.handleMarkReviewHelpful = this.handleMarkReviewHelpful.bind(this);
    this.handleReportReview = this.handleReportReview.bind(this);
    this.logState = this.logState.bind(this);
    this.updateMetadataState = this.updateMetadataState.bind(this);
    this.updateReviewsState = this.updateReviewsState.bind(this);
    this.updateProductName = this.updateProductName.bind(this);
    this.handleFilterByRating = this.handleFilterByRating.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.handleFilterClear = this.handleFilterClear.bind(this);
    this.showAddReviewModal = this.showAddReviewModal.bind(this);
    this.closeAddReviewModal = this.closeAddReviewModal.bind(this);
    this.addReview = this.addReview.bind(this);

    //HTTP Request
    this.getProductInformation = this.getProductInformation.bind(this);
    this.getReviewList = this.getReviewList.bind(this);
    this.getMetadata = this.getMetadata.bind(this);
  }

  componentDidMount() {
    this.getReviewList();
    this.getMetadata();
    this.getProductInformation();
  }

  logState() {
    console.log(this.state);
  }

  updateReviewsState(reviews) {
    this.setState({
      reviews: reviews.results,
    });
  }

  updateMetadataState(metadata) {
    this.setState({
      metadata: metadata,
    });
  }

  updateProductName(product_name) {
    this.setState({
      product_name: product_name,
    });
  }

  /*------ HTTP requests below ------*/

  //Retrieves an array of all reviews on the current product
  //On success, updates the state of RatingsReviews.jsx
  getReviewList() {
    let endPoint = `${url}/reviews`;
    newAxios
      .get(endPoint, {
        params: {
          product_id: this.props.product_id,
          count: 10000,
        },
      })
      .then((response) => {
        this.updateReviewsState(response.data);
      })
      .catch((err) => {
        console.error("Error in getRatingsReviewsData response: ", err);
      });
  }

  //Retrieves an array of all ratings associated with the current product
  //On success, updates the state of RatingsReviews.jsx
  getMetadata() {
    let endPoint = `${url}/reviews/meta`;
    newAxios
      .get(endPoint, {
        params: {
          product_id: this.props.product_id,
          count: 10000,
        },
      })
      .then((response) => {
        this.updateMetadataState(response.data);
      })
      .catch((err) => {
        console.error("Error in getRatingsReviewsData response: ", err);
      });
  }

  getProductInformation() {
    let endPoint = `${url}/products/${this.props.product_id}`;
    newAxios
      .get(endPoint)
      .then((response) => {
        this.updateProductName(response.data.name);
      })
      .catch((err) => {
        console.error("Error in getProductInformation", err);
      });
  }

  //Posts a new review to the server. Takes in a review object that should have already been created when the method was invoked
  //On success, calls getReviewsList and getRatingsList to update with the latest info
  addReview(review) {
    let endPoint = `${url}/reviews`;
    newAxios
      .post(endPoint, review)
      .then((response) => {
        console.log("successfully posted review to server");
        setTimeout(this.closeAddReviewModal, 400)
        this.getReviewList();
      })
      .catch((err) => {
        console.error("errored in addReview", err);
      });
  }

  //Marks a specific review as helpful. Takes in the review_id and creates a PUT request for that specific review
  //On success, calls getReviewsList to update with the latest info
  handleMarkReviewHelpful(review_id) {
    let endPoint = `${url}/reviews/${review_id}/helpful`;
    newAxios
      .put(endPoint, {
        params: {
          review_id: review_id,
        },
      })
      .then((response) => {
        console.log("Review successfully marked as helpful!");
        this.getMetadata();
        this.getReviewList();
      })
      .catch((err) => {
        console.error("Errored in markReviewHelpful", err);
      });
  }

  //Reports a specific review. Takes in the review_id and creates a PUT request for that specific review
  //On success, calls getReviewsList to update with the latest info
  handleReportReview(review_id) {
    let endPoint = `${url}/reviews/${review_id}/report`;
    newAxios
      .put(endPoint, {
        params: {
          review_id: review_id,
        },
      })
      .then((response) => {
        console.log("Review successfully reported!");
        this.getReviewList();
      })
      .catch((err) => {
        console.error("Errored in reportReview", err);
      });
  }

  /* Ratings handler functions */

  handleFilterByRating(rating) {
    let filterRatingsCopy = {
      ...this.state.filterRatings,
    };
    filterRatingsCopy[rating] = !filterRatingsCopy[rating];
    this.setState({
      filterRatings: filterRatingsCopy,
    });
  }

  handleFilterClear() {
    this.setState({
      filterRatings: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      },
    });
  }

  /* Pops up the Add Review Modal */
  showAddReviewModal(e) {
    e.preventDefault();
    this.setState({
      displayAddReviewModal: true,
    });
  }

  /* Closes the Add Review Modal (passed down as prop) */
  closeAddReviewModal() {
    this.setState({
      displayAddReviewModal: false,
    });
  }

  /* Method to filter and sort reviews to pass down to ReviewList */
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
      return filteredReviews;
    }
  }
  invokeAllHTTPFunctions() {
    this.getProductInformation();
    this.getRatingsList();
    this.getMetadata();
  }

  render() {
    let filteredReviews = this.filterReviews();
    return (
      <div className = 'centering-wrapper'>
      <div data-testid="ratings-reviews" className="ratings-reviews-master-container">
        <a id="top-of-reviews"></a>

          {this.state.displayAddReviewModal && (
            <AddReviewModal
              product_id={this.props.product_id}
              product_name={this.state.product_name}
              closeModal={this.closeAddReviewModal}
              metadata={this.state.metadata}
              addReview={this.addReview}
            />
          )}
          <br></br>
          <RatingsSection
            metadata={this.state.metadata}
            handleFilterByRating={this.handleFilterByRating}
            filterRatings={this.state.filterRatings}
            handleFilterClear={this.handleFilterClear}
            setAverageRating={this.props.setAverageRating}
          />
          <ReviewList
            totalNumReviews={this.state.reviews.length}
            reviews={filteredReviews}
            handleMarkReviewHelpful={this.handleMarkReviewHelpful}
            handleReportReview={this.handleReportReview}
            showAddReviewModal={this.showAddReviewModal}
          />
        <button data-testid="get-information" className="jest-test-button" onClick={this.invokeAllHTTPFunctions}>
          Get Product Information
        </button>
      </div>
      </div>
    );
  }
}

export default RatingsReviews;
