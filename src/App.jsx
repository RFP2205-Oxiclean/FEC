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
            // relatedItems: [],
            // questionsAndAnswersData: [],
            // ratingsAndReviews: []
        };
    }

    render() {
        return (
            <div className='app'>
                <h1>
                    Welcome to React App thats build using Webpack and Babel separately
                </h1>
                <div className='product-overview'>
                    <ProductOverview
                        product_id={this.state.displayedProductId}
                    />
                </div>

                <div className='questions-and-answers'>
                    <QuestionsAndAnswers
                        product_id={this.state.displayedProductId}
                    />
                </div>

                <div className='ratings-reviews'>
                    <RatingsReviews
                        product_id={this.state.displayedProductId}
                    />
                </div>
            </div>

        )
    }

}

export default App;