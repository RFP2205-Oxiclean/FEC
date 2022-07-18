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
    <div className = 'keyword-search-container'>
    <form>
      <input className = 'keyword-searchbar' type = "text" placeholder = "Search for a review..." onChange = {updateKeyword}/>
      <button className = 'keyword-search-clear-button' onClick = {clearKeyword}>Clear</button>
    </form>
    </div>
  )
}

export default KeywordSearchFilter;