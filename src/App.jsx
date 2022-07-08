import React from "react";
import { url } from "../config/config.js";
import { API_KEY } from "../config/config.js";
import axios from "axios";

import ProductOverview from './components/overview/ProductOverview.jsx'
import QuestionsAndAnswers from './components/questionsAndAnswers/QuestionsAndAnswers.jsx'
import RatingsReviews from './components/ratingsReviews/RatingsReviews.jsx'
// import RelatedItems from './components/relatedItems/RelatedItems.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedProductId: 40344,
            relatedItems: [],
            questionsAndAnswersData: [],
            ratingsAndReviews: []

        };
    }

    myDebugger() {
        console.log(this.state);
    }

    getRatingsReviewsData() {
        console.log('getting ratings and reviews');
        let endPoint = `${url}/reviews`;
        axios({
            method: 'GET',
            headers: {
                Authorization: API_KEY
            }
        })

    }










    render() {
        return (
            <div className='app'>
                <h1>
                    Welcome to React App thats build using Webpack and Babel separately
                </h1>
                <button onClick={this.myDebugger.bind(this)}>Debug</button>
                <button onClick={this.getRatingsReviewsData}>Get Ratings/Reviews</button>
                <div className='product-overview'>
                    <ProductOverview />
                </div>
                {/*
                <div className = 'related-items'>
                    <RelatedItems />
                </div> */}

                <div className='questions-and-answers'>
                    <QuestionsAndAnswers />
                </div>

                <div className='ratings-reviews'>
                    <RatingsReviews />
                </div>
            </div>

        )
    }

}

export default App;