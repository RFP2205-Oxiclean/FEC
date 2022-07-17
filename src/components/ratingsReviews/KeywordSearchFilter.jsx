import React, {useState} from 'react';

const KeywordSearchFilter = (props) => {


  const updateKeyword = (e) => {
    props.handleKeywordChange(e.target.value)
  }

  const clearKeyword = (e) => {
    e.preventDefault();
    console.log(document.getElementsByClassName('keyword-searchbar'));
    document.getElementsByClassName('keyword-searchbar')[0].value = '';
    props.handleKeywordChange('')
  }

  return (
    <div className = 'keyword-search-container'>
    <form>
      <input className = 'keyword-searchbar' type = "text" placeholder = "Search for a review..." onChange = {updateKeyword}/>
      <button onClick = {clearKeyword}>Clear</button>
    </form>
    </div>
  )
}

export default KeywordSearchFilter;