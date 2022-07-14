import React from 'react';

const SearchBar = (props) => {
  let text = '';
    return (
        <form>
            <input type="text" onChange={(event)=>{text=event.target.value; props.eventHandler(text)}} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
            <input type="button" />
        </form>)
}

export default SearchBar;