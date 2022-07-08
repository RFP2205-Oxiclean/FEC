import React from "react";
import {url} from "../config/config.js";
import {API_KEY} from "../config/config.js";
import axios from "axios";

import ProductOverview from './components/overview/ProductOverview.jsx'
import QuestionsAndAnswers from './components/questionsAndAnswers/QuestionsAndAnswers.jsx'
import RatingsReviews from './components/ratingsReviews/RatingsReviews.jsx'
import RelatedItems from './components/relatedItems/RelatedItems.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedProductId: 40344,
            relatedItems: [],
            questionsAndAnswersData: [],
            ratingsAndReviews: []

        };

        this.getRelatedProducts = this.getRelatedProducts.bind(this);
        this.updateRelatedItemsState = this.updateRelatedItemsState.bind(this);
    }

    debug() {
        console.log(this.state);
    }

    // Products GET request to the API
    getRelatedProducts() {
        console.log('key', API_KEY);
        let endPoint = `${url}/products`;
        console.log('endPoint', endPoint);
        axios.get(`${url}/products`, {
            headers: {
                Authorization: API_KEY
            }
        }).then((response) => {
            this.updateRelatedItemsState(response.data);
        })
        .catch((err) => {
            console.error(err)
        })
    }

    updateRelatedItemsState(data) {
        this.setState({
            relatedItems: data
        })
    }

    getRatingsReviewsData() {
        console.log('getting ratings and reviews');
        let endPoint = `${url}/products`;
    }









    render() {
        return (
            <div className = 'app'>
                 <h1>
                Welcome to React App thats build using Webpack and Babel separately
                </h1>
                <button onClick = {this.debug.bind(this)}>Debug</button>
                <button onClick={this.getRelatedProducts}>Get Products</button>
                <div className = 'product-overview'>
                    <ProductOverview />
                </div>

                <div className = 'related-items'>
                    <RelatedItems />
                </div>

                <div className = 'questions-and-answers'>
                    <QuestionsAndAnswers />
                </div>

                <div className = 'ratings-reviews'>
                    <RatingsReviews />
                </div>
            </div>

        )
    }

}

export default App;