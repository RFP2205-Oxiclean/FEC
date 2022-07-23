import React from "react";
import { url } from "../config/config.js";
import { API_KEY } from "../config/config.js";
import axios from "axios";

import ProductOverview from "./components/overview/ProductOverview.jsx";
import QuestionsAndAnswers from "./components/questionsAndAnswers/QuestionsAndAnswers.jsx";
import RatingsReviews from "./components/ratingsReviews/RatingsReviews.jsx";
// import RelatedItems from './components/relatedItems/RelatedItems.jsx'
import ThemeSwitcher from './components/commonComponents/ThemeSwitcher.jsx';

import {createContext, useState} from 'react';
export const ThemeContext = createContext(null);

import TopNavBar from "./components/commonComponents/TopNavBar.jsx";

function App() {

  const [displayedProductId, setProductId] = useState(40346);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  };


  const handleSubmit =(id) => {
    id = parseInt(id);
    this.setState({ displayedProductId: id });
  }


  return (
    <ThemeContext.Provider value = {theme}>
    <div className="app" data-testid="app" id = {theme}>
      <div className="top-nav-bar">
        <TopNavBar />
      </div>
      <div className="product-overview">
        <ThemeSwitcher toggleTheme = {toggleTheme}/>
        <ProductOverview handleSubmit={handleSubmit} product_id={displayedProductId} />
      </div>

      <div className="questions-and-answers">
        <QuestionsAndAnswers product_id={displayedProductId} />
      </div>

      <div className="ratings-reviews">
        <RatingsReviews product_id={displayedProductId} data-testid="RatingsReviews" />
      </div>
    </div>
    </ThemeContext.Provider>
  );
}


export default App;
