import React from 'react';

const SearchBar = (props) => {
  let text = '';
    return (
        <form>
            <input type="text" className="qa-nav-bar" onChange={(event)=>{text=event.target.value; props.eventHandler(text)}} data-testid="nav-bar" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
        </form>)
}

export default SearchBar;