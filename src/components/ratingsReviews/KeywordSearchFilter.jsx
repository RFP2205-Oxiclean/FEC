import React, {useState} from 'react';

const KeywordSearchFilter = (props) => {


  const updateKeyword = (e) => {
    e.preventDefault();
    props.handleKeywordChange(e.target.value)
  }

  const clearKeyword = (e) => {
    e.preventDefault();
    document.getElementsByClassName('keyword-searchbar')[0].value = '';
    props.handleKeywordChange('')
  }

  return (
    <div className = 'keyword-search-container' data-testid = 'keyword-search-filter'>
    <form>
      <input data-testid = 'keyword-search-input'className = 'keyword-searchbar' type = "text" placeholder = "Search for a review..." onChange = {updateKeyword}/>
      <button data-testid = 'clear-search-button' className = 'keyword-search-clear-button' onClick = {clearKeyword}>Clear</button>
    </form>
    </div>
  )
}

export default KeywordSearchFilter;