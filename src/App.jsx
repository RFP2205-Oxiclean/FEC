import React from "react";

import ProductOverview from './components/overview/ProductOverview.jsx'
import QuestionsAndAnswers from './components/QuestionsAndAnswers/QuestionsAndAnswers.jsx'
import RatingsReviews from './components/RatingsReviews/RatingsReviews.jsx'
import RelatedItems from './components/RelatedItems/RelatedItems.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className = 'app'>
                 <h1>
                Welcome to React App thats build using Webpack and Babel separately
                </h1>

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