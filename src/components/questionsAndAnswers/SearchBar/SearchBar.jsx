import React from 'react';

const SearchBar = (props) => {
  let text = '';
    return (
        <form>
            <input type="text" onChange={(event)=>text=event.target.value} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
            <input type="button" onClick={(event)=>props.eventHandler(text)}/>
        </form>)
}

export default SearchBar;